const name = "shiva";
const age = 33

// console.log(name+" age "+age);  outdated format

console.log(`Hello my is name is ${name.toUpperCase()} and my age is ${age}`); // ` `backtext for modern code


const gamename = new String("shiva kumar");

console.log([0]);
console.log(gamename.__proto__);

//console.log(gamename.length);
//console.log(gamename.toUpperCase());
//console.log(gamename.charAt(6));
//console.log(gamename.indexOf('a'));

const newString = gamename.substring(0,4);
console.log(newString);

const anotherString = gamename.slice(-9,5);
console.log(anotherString);

const newStringOne = "       Shiva      "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20choudary"

console.log(url.replace('%20', '-'));
console.log(url.includes("hitesh"));
console.log(url.includes("Shiva"));
console.log(gamename.split('-'));
