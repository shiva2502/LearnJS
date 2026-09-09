// const instaUser = new Object() // {}
const instaUser = {} // {}

instaUser.id = "Say_cva";
instaUser.name = "kumar";
instaUser.isLoggedIn = true;

// console.log(instaUser);


//***********object inside object************//
const activeUser = {
    email: "insta@gmail.com",
    familyName: {
        sirName:{
                  firstName:"ceo-talks",
                  MiddleName:"Woolies"
        }
        

    }
}

//console.log(activeUser); //{  email: 'insta@gmail.com',  familyName: { sirName: { firstName: 'ceo-talks', MiddleName: 'Woolies' } }}
//console.log(activeUser.familyName); //{ sirName: { firstName: 'ceo-talks', MiddleName: 'Woolies' } }
//console.log(activeUser.familyName.sirName); //{ firstName: 'ceo-talks', MiddleName: 'Woolies' }


//***********Merge objects*******************//
const obj1 = {1:"shiva", 2:"sree"}
const obj2 = {3:"Durga", 4:"Nandan"}
const obj3 = {5:"Amma", 6:"Nanna"}

//const obj4 = {obj1,obj2}
// console.log(obj4);  //{  obj1: { '1': 'shiva', '2': 'sree' },  obj2: { '3': 'Durga', '4': 'Nandan' }}

// const obj4 = Object.assign(obj1,obj2,obj3) // {  '1': 'shiva',  '2': 'sree',  '3': 'Durga',  '4': 'Nandan',  '5': 'Amma',  '6': 'Nanna'}

//const obj4 = Object.assign({},obj1,obj2,obj3) // {  '1': 'shiva',  '2': 'sree',  '3': 'Durga',  '4': 'Nandan',  '5': 'Amma',  '6': 'Nanna'}
// refer MDN for object.assign()

//spread object
const obj4 = {...obj1,...obj2,...obj3}
//console.log(obj4);


//Array of objects

const users = [
    {
        id : 963, email: "paj@thm.com",
    },
    {
        id : 369, email: "jap@thm.com",
    },
    {
        id : 639, email: "ajp@thm.com",
    }
]

// console.log(users[0].email); //paj@thm.com

// console.log(Object.keys(instaUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(instaUser)); // [ 'Say_cva', 'kumar', true ]
// console.log(Object.entries(instaUser)); // [ [ 'id', 'Say_cva' ], [ 'name', 'kumar' ], [ 'isLoggedIn', true ] ]

// console.log(instaUser.hasOwnProperty("isLoggedIn")); // true

// console.log(instaUser.hasOwnProperty("activeUser")); // false


// object de-structure

const course = {
    courseName: "JavaScript",
    price: 999,
    instructorName: "Hitesh"
}

// console.log(course.instructorName); //Hitesh

// const {instructorName} = course
// console.log(instructorName);  //Hitesh

const {instructorName: ins} = course
console.log(ins); //Hitesh

//Object depth explained twoo videos
