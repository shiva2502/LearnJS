const score = 600;
//console.log(score);

const balance = new Number(963);
//console.log(balance);

//console.log(balance.toString());
//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

const anotherNumber = 123.456789
//console.log(anotherNumber.toPrecision(6));

const hundreds = 1000000;
//console.log(hundreds.toLocaleString());
//console.log(hundreds.toLocaleString("en-IN")); // Refer MDN docs for different number counts as per country

//****************************************Maths************************************************* */

// console.log(Math);
// console.log(Math.abs(-6)); // abs gives Positive value
// console.log(Math.round(4.6));
// console.log(Math.ceil(6.9)); // top/high value from decimal
// console.log(Math.floor(3.6));// lower value from decimal
// console.log(Math.min(369,963)); //min value form list
// console.log(Math.max(3,6,9,963)); //max value form list


console.log(Math.random()); // gives value between 0-1
console.log(Math.random()*6); // gives value between 0-6
console.log((Math.random()*10)+1);  //gives value not less than 1
console.log(Math.floor(Math.random()*10)+1); 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1))+min)