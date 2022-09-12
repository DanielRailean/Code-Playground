fn sum(values: &[i32]) -> i32 {
    let mut res = 0;
    for i in 0..values.len() {
        res += values[i]
    }
    res
}

fn main() {
    let arr = [10,20,30,40];
    // look at that &
    let res = sum(&arr);
    println!("sum {}", res);
    println!("sum {:?}", arr);

    let slice1 = &arr[0..2];
    let slice2 = &arr[1..];  // open range!

    println!("ints {:?}", arr);
    println!("slice1 {:?}", slice1);
    println!("slice2 {:?}", slice2);

    let slice = &arr;
    let first = slice.get(0);
    let last = slice.get(5);

    println!("first {:?}", first);
    println!("last {:?}", last);

    println!("first {} {}", first.is_some(), first.is_none());
    println!("last {} {}", last.is_some(), last.is_none());
    println!("first value {}", first.unwrap());

    let last = *slice.get(5).unwrap_or(&-1);

    println!("{:?}", last);
    
}