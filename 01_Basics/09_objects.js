// singleton
//object.create

// object literals

const mySymbol = Symbol("key1")

const jsUser = {
    name:"Shiva", 
    "full name":"Shiva Kumar",
    [mySymbol]:"mykey1",
    age:33,
    location:"Midrand",
    email:"Shiva@google.com",
    AccountStatus:true, 
    lastLogin: ["Friday","Monday"]
}
console.log(typeof(jsUser)); //Object


// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySymbol]);
//console.log(typeof(jsUser[mySymbol]));//string

jsUser.email = "shiva@chatgpt.com";
//Object.freeze(jsUser);
jsUser.email = "shiva@bmw.com";
//console.log(jsUser);

//********Adding function to the object********************/

jsUser.greeting = function()
{
    console.log("Hello JS user");
    
}
console.log(jsUser.greeting); //[Function (anonymous)]

jsUser.greetingAgain = function()
{
console.log(`Hi JS user, ${this["full name"]}`);

}

console.log(jsUser.greeting()); //undefined
console.log(jsUser.greetingAgain());
