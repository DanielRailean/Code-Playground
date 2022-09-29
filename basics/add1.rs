fn factorial(n: u64) -> u64 {
    if n==0{
        1
    } else {
        n * factorial(n-1)
    }
}

fn main() {
    let mut sum = 0;
    for i in 0..6 {
        sum += i;
    }
    println!("sum {}", factorial(10));
}