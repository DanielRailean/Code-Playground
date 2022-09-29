use std::str::FromStr;

use warp::{Filter, path::FullPath};

struct Something;

impl FromStr for Something {
    type Err = ();
    fn from_str(s: &str) -> Result<Something, ()> {
        match s {
            "value1" | "value2" => Ok(Something),
            _ => Err(())
        }
    }
}



#[tokio::main]
async fn main() {


    let bye = warp::path("bye")
    .and(warp::path::param())
    .map(|name: String| {
        format!("Good bye, {}!", name)
    });

    let returned = warp::get().and(warp::path::full())
    .and_then(|path: FullPath| async move {
            let arr = ["/some/path","/other"];

            for i in 0..2 {
                if arr[i]==path.as_str().to_string() {
                    return Ok(format!("Hello #{}", "there"))
                } 
            }

            Err(warp::reject::not_found())
            
        }
    );


    

    let routes = bye.or(returned);
    

    warp::serve(routes)
        .run(([127, 0, 0, 1], 3000))
        .await;

    
}
