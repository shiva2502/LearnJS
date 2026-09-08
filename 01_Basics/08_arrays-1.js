const marvelHeros = ["IronMan", "SpiderMan","Loki"];
const dcHeros = ["SuperMan","Batman","AquaMan"];

// const collab = marvelHeros.push(dcHeros)
// console.log(collab); // 4 returing length of an array
// console.log(marvelHeros); // [ 'IronMan', 'SpiderMan', 'Loki', [ 'SuperMan', 'Batman', 'AquaMan' ] ] dcHeroes added as element in a array 
// console.log(marvelHeros[3][2]); //AquaMan

// const collab1 = marvelHeros.concat(dcHeros);
// console.log(collab1); //[ 'IronMan', 'SpiderMan', 'Loki', 'SuperMan', 'Batman', 'AquaMan' ]

// const allHeros = [...marvelHeros,...dcHeros] //[ 'IronMan', 'SpiderMan', 'Loki', 'SuperMan', 'Batman', 'AquaMan' ]
// console.log(allHeros);

// const arrayInArray = [1,[2,3],4,5,[6,7,8],9,10,11,[12,13,14,15]];
// console.log(arrayInArray);

// const realArray = arrayInArray.flat(Infinity);
// console.log(realArray);

// console.log(Array.isArray("Shiva")); //direct declaration (checking is that parameter given is array) - false
// console.log(Array.from("Shiva")); // string to array conversion - [ 'S', 'h', 'i', 'v', 'a' ]
// console.log(Array.from({name:"Shiva"})); //[] interesting case

let num1 = 300;
let num2 = 600;
let num3 = 900;

console.log(Array.of(num1,num2,num3)); 

//Refer notes about isArray, from, of

