// Datatypes categorized in two types

/*
Primitive datatypes
====================
7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

*/
const score = 100;
console.log(typeof score); // number

const scoreValue = 100.3;
console.log(typeof scoreValue); // number

const isLoggedIn = false
console.log(typeof isLoggedIn); // boolean

const outsideTemp = null;
console.log(typeof outsideTemp); // object

let userEmail;
console.log(typeof userEmail); // undefined

const id =Symbol("123");
console.log(typeof id);
console.log(id); //Symbol(123)

const anotherid =Symbol("123");
console.log(anotherid); //Symbol(123)

console.log(id === anotherid); // false

const bigNumber = 963875421n
console.log(typeof bigNumber);


/*
Reference datatypes (Non-Primitive datatypes)
==============================================
Array, Objects, Functions
*/
const heros = ["Shaktiman", "Spiderman", "Superman"];
console.log(heros);


let myObj = {
    name : "shiva", age : 33
}
console.log(myObj);


// *****************************************Stack & Heap Memory*************************************************

// Stack (primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshchoudarydotcom";

let anothername = myYoutubename;
console.log(anothername);

anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@woolies.com",
    upi: "user@gpay"
}


let userTwo = userOne;

userTwo.email = "shiva@google.com"

console.log(userOne.email, userOne.upi);
console.log(userTwo.email, userTwo.upi);
