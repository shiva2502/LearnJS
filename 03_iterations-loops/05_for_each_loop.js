
const coding = ["js","py","java","cpp","c"]

// coding.forEach(function (value){
//     console.log(value);
    
// })

// arrow function

// coding.forEach((value)  => {
//     console.log(value);
    
// })


// function printMe(item){

//     console.log(item);
    
// }

// coding.forEach(printMe)



coding.forEach((value, index, arr) => {
    console.log(value, index, arr);
    
})



const myCoding = [
    {
    languageName: "JavaScript",
    lanaguageFile: ".js"
    },
    {
    languageName: "Java",
    lanaguageFile: ".java"
    },
     {
    languageName: "Python",
    lanaguageFile: ".py"
    },
      {
    languageName: "Terraform",
    lanaguageFile: ".tf"
    }
]

myCoding.forEach((value) => 
    {

    console.log(`Language Name is ${value.languageName} and Language file ${value.lanaguageFile}`);
    
})