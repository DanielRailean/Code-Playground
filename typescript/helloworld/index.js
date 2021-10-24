const person = {
    first: "jeff",
    last: "bezz",
    money: "yes"
};
const arr = [];
arr.push(person);
function pow(x, y) {
    return Math.pow(x, y);
}
pow(2, 2);
const arr2 = [];
arr2.push(20);
arr2.push("20");
arr2.push(true);
// Gererics
class Observable {
    value;
    constructor(value) {
        this.value = value;
    }
}
let x;
let y;
let z = new Observable(24);
