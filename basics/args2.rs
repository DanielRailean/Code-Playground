use std::env;

fn main() {
    let first = env::args().nth(1).expect("please supply an argument");
    match first.find("привет") {
        Some(idx) => {
            let hi = &first[idx..];
            println!("Russian hi {}", hi);
        },
        None => println!("couldn't find the greeting, Товарищ")
    };
}
