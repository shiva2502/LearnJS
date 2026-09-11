
const user = {
    username: "Hitesh",
    price: 999,

    welcomeMessage: function()
    {
        console.log(`${this.username}, Welcome to Website`);
        // console.log(this);
        
    }
}

//console.log(this.username);

// user.welcomeMessage()
// user.username = "Shiva"
// user.welcomeMessage()

// console.log(this);

// function chai()
// {
//     let username ="Shiva"
//     console.log(this);
    
// }

// chai()


// const chai = function()
// {
//     let username = "Shiva"
//     console.log(this.username);
    
// }

// chai()

const chai = () =>
{
    let username = "Shiva"
    //console.log(this.username);
    console.log(this);
    
}

//chai()

//******************************Arrow function****************************************/

// const AddTwoNum = (num1,num2) =>
// {
//     return num1+num2;
// }

// console.log(AddTwoNum(3,6));

// const AddTwoNum = (num1,num2) =>   num1+num2;  //implicit return
// const AddTwoNum = (num1,num2) =>   (num1+num2); //implicit return

// const AddTwoNum = (num1,num2) =>   {username : "Shiva"}; // undefined
const AddTwoNum = (num1,num2) =>   ({username : "Shiva"});  // { username: 'Shiva' }

console.log(AddTwoNum(3,3));


 