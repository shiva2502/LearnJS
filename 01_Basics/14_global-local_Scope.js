
let a = 100
const b = 200
var c = 300

if (true){

    let a = 10
const b = 20
var c = 30

console.log("Inner: ", a);

}

//console.log(a); // calling from if scope --> a is not defined
//console.log(b); // calling from if scope --> b is not defined
//console.log(c); // calling from if scope due to var (avoid var) --> 30

console.log(a); // 100
console.log(b); // 200
console.log(c); // 30  calling from if scope
