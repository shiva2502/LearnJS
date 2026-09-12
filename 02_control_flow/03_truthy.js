// truthy & false values

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}


// const userEmail =[]

// if(userEmail){
//     console.log("Got User email");
    
// }
// else{
//     console.log("Don't have th email");
    
// }

// if (userEmail.length ===0)
// {
//     console.log("Array is Empty");
    
// }

//empty object

// const emptyobj ={ }

// if(Object.keys(emptyobj).length ===0)
// {
//     console.log("object is empty");

// }


// Nullish coalescingoperator (??): null undefined


let val1;
//val1 = 5 ?? 10                //5
//val1 = null ?? 10             //10
//val1 = 0 ?? 10               //0
//val1 = undefined ?? 10       //10
val1 = null ?? 10 ?? 20        //20
//console.log(val1);



//Terniary Operator

// condition ? true : false


const coffee = 100;

coffee >= 110 ? console.log("Less than 100") : console.log("More than 100");

