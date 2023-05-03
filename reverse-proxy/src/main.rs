use std::net::{TcpListener, TcpStream};
use std::io::{Read, Write};
use std::thread;

fn handle_client(mut client_stream: TcpStream, upstream_host: &str, upstream_port: u16) {
    let mut upstream_stream = TcpStream::connect((upstream_host, upstream_port))
        .expect("failed to connect to upstream server");

    // Start a thread to forward data from the upstream server to the client
    let client_to_upstream = thread::spawn(move || {
        let mut buf = [0; 4096];
        loop {
            let n = upstream_stream.read(&mut buf).unwrap();
            if n == 0 {
                break;
            }
            client_stream.write_all(&buf[0..n]).unwrap();
        }
    });

    // Forward data from the client to the upstream server
    let mut buf = [0; 4096];
    loop {
        let n = client_stream.read(&mut buf).unwrap();
        if n == 0 {
            break;
        }
        upstream_stream.write_all(&buf[0..n]).unwrap();
    }

    // Wait for the client-to-upstream thread to complete
    client_to_upstream.join().unwrap();
}

fn main() {
    let listener = TcpListener::bind("127.0.0.1:8080")
        .expect("failed to bind to local address");

    // The upstream server to forward traffic to
    let upstream_host = "example.com";
    let upstream_port = 80;

    // Accept connections and spawn threads to handle them
    for stream in listener.incoming() {
        match stream {
            Ok(stream) => {
                thread::spawn(move || {
                    handle_client(stream, upstream_host, upstream_port);
                });
            }
            Err(e) => {
                eprintln!("failed to accept client connection: {}", e);
            }
        }
    }
}
