

interface Person {
    first: string;
    last: string;
    [key : string]: any
}

const person : Person= {
    first: "jeff",
    last: "bezz",
    money: "yes"
}

const arr: Person[] =[];

arr.push(person);


function pow(x: number,y:number){
    return Math.pow(x,y);
}

pow(2,2);

type MyList = [number?,string?, boolean?]

const arr2 : MyList = []

arr2.push(20);
arr2.push("20");
arr2.push(true);

// Gererics

class Observable<T> {
    constructor (public value:T){}
}

let x: Observable<number>
let y: Observable<Person>
let z = new Observable(24);