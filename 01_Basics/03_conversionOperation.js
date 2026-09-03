// let score = "33abc" //NaN stands for "Not-a-Number"

// let score = "33"; //number

// let score = null; // 0

// let score = undefined; //NaN

/*
let score = true; // boolean   (true => 1, false => 0)

console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber); 
console.log(valueInNumber);
*/
//let isLoggedIn = 1;      // true
//let isLoggedIn = 0;     // false
//let isLoggedIn = "Shiva"; // true
//let isLoggedIn = " ";  //true
let isLoggedIn = "";     //false

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// ************************************ Operations *********************************************

let value =3
let negvalue = -value

// console.log(negvalue);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello "
let str2 = "Shiva"

let str3 = str1+str2
console.log(str3);


// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); //122 // starts with string then string will be output
// console.log(1 + 2 + "2"); //32

console.log(+true); // 1
console.log(+""); // 0

let gameCounter = 100;
//gameCounter++; // 101
++gameCounter; //101
console.log(gameCounter);

/*

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// The ++ operator is overloaded for two types of operands: number and BigInt. It first coerces the operand to a numeric value and tests the type of it. It performs BigInt increment if the operand becomes a BigInt; otherwise, it performs number increment.

*/