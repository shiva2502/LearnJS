// for of

//["","",""]
//[{},{},{}]

// const array = [1,2,3,4,5,6]

// for (const num of array) {

//     console.log(`array of elements ${num}`);
   
            
// }


// const name = "Hello Shiva"

// for (const alpha of name) {

//     console.log(`Each char is ${alpha}`);
    
    
// }



//*************************   map  *****************************/
//Duplicate values are not allowed in map
//map cannot be iterable with for_of loop

const map = new Map()

map.set("RS", "Russia");
map.set("IN", "India");
map.set("CN", "CHINA");
map.set("IN", "INDIA") // Duplicate value no allowed

//console.log(map);  //Map(3) { 'RS' => 'Russia', 'IN' => 'India', 'CN' => 'CHINA' }

for (const keys of map) {
    //console.log(keys);
    
}

// [ 'RS', 'Russia' ]
// [ 'IN', 'INDIA' ]
// [ 'CN', 'CHINA' ]


for (const [keys, value] of map) {
    //console.log(keys,'-',value);
    
}

// RS - Russia
// IN - INDIA
// CN - CHINA

// Object isnot iteratable at forof loop

const myobject ={
    game1: 'badminton',
    game2: 'peddal'
}

for (const [key, value] of myobject) {
    console.log(key,'-',value);  //  myobject is not iterable
    
    
}