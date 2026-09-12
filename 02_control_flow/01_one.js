// if

// const isUserLoggedIn = true

// if ( 2 == "2"){
//     console.log("Executed");
    
// }

// <, >, <=, >=, == , === (strict equal), !=, !==



// let temp = 42;

// if(temp < 50){
//     console.log("Temperature less than 50");
    
// }
// else{
//     console.log("Temperature greater than 50");
// }

//const AccBalance = 900;
// if (AccBalance > 600) console.log("Yes"); console.log("No");  //Not best practice

// const AccBalance = 900
// if (AccBalance < 600) {{console.log("Less than 600");} }
// else if (AccBalance < 700) {console.log("Less than 700");} 
// else if (AccBalance < 800) { console.log("Less than 800");} 
// else {console.log("Less than 900");}
 
const isLoggedIn = true;
const debitCard = true;
const googleLoggedIn = false;
const emailLoggedIn = true;
const guestUser = true;

if (isLoggedIn && debitCard){
    console.log("User can Buy a course");
    
}

if(googleLoggedIn || emailLoggedIn || guestUser){
    console.log("User loggedIn");
    
}

