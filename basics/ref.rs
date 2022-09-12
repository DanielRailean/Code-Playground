fn by_ref(x: &i32) -> i32{
    *x + 1
}

fn mut_ref(x: &mut i32) {
    *x=*x + 2
}

fn main(){
    let mut i = 10;
    let res1 = by_ref(&i);
    mut_ref(&mut i);
    println!("{} {}", res1, i);
}