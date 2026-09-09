// functions -- all the code is combined in a package and can used as a reference for many use cases 

function jsGreeting(){
console.log("Hello");
console.log("JavaScript");
console.log("I");
console.log("am");
console.log("Shiva");
}

// jsGreeting();

function addTwoNumbers (){
    console.log();
    
}

// addTwoNumbers(); //NaN 

// function addTwoNumbers (number1, number2) // number1 & number2 are parameters
// {
//     console.log(number1+number2);
    
// }

// addTwoNumbers(3,3);  //3
// addTwoNumbers(3,"J"); //3J
// addTwoNumbers(3,true); //4
// addTwoNumbers(3,null); //3

// function addTwoNumbers (number1, number2) // number1 & number2 are parameters
// {
//     console.log(number1+number2);
    
// }

// const result = addTwoNumbers(3,5) // 8 // number1 & number2 are arguments

// console.log("Result: ", result);  // Result:  undefined


function addTwoNumbers (number1, number2) // number1 & number2 are parameters
{
        // let result = number1 + number2;
        // return result;
        return number1+number2;

        console.log("Added two numbers"); // code not reachable after return
        

    
}

const result = addTwoNumbers(4,5) // 

// console.log("Result: ", result);  // Result:  9

function loginUser(username){
    return `${username} just loggedIn`
}

// loginUser("Shiva"); // return the message but asked to print
// console.log(loginUser("Shiva")); //Shiva just loggedIn


function loginUser(username){
    if (username == undefined){
        console.log("Please Enter a username");
        return;

    }
    return `${username} just loggedIn`
}

console.log(loginUser());  // undefined just loggedIn //without return in function

console.log(loginUser());  // with return in function
// Please Enter a username
//undefined


function loginUser(username){
    if (!username){
        console.log("Please Enter a username");
        return;

    }
    return `${username} just loggedIn`
}

console.log(loginUser());

// Please Enter a username
//undefined

