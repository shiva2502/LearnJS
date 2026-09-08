// array

 const myArray = [9,8,7,6,4,3];
// console.log(myArray);
// console.log(myArray.length); //7

// const mixedType = ["Shiva",33,true,1.76];
// console.log(mixedType);
// console.log(mixedType[2]);

// const obj = new Array(0,3,6,9);
// console.log(obj);


//****************Array methods****************************

// myArray.push(0);// a value is added at last
// myArray.pop(); // last element will removed 
// myArray.unshift(10); // // a value is added at first
// console.log(myArray); 

// console.log(myArray.includes(15)); 
//console.log(myArray.indexOf(15)); // -1

//console.log(myArray.indexOf(3)); // 6

// const newArray = myArray.join();

// console.log(myArray);
// console.log(newArray);


// frequently used metods in arrays[slice, splice]


console.log("A", myArray);

const my1 = myArray.slice(1,3); //will not add the last parameter value
console.log(my1);
console.log("B", myArray);

const my2 = myArray.splice(1,3); //will remove the mentioned parameter value
console.log("c", myArray);
console.log(my2);
