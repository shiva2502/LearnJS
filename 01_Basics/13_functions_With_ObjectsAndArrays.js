//  function calculateCartPrice(num1)
//  {
//     return num1;
//  }

 //console.log(calculateCartPrice(3));  //3
 
  function calculateCartPrice(...num1)
 {
    return num1;
 }

 // console.log(calculateCartPrice(300,600,900)); //[ 300, 600, 900 ]
 

   function calculateCartPrice(val1,val2,...num1)
 {
    return num1;
 }

 // console.log(calculateCartPrice(300,600,900,963)); //[ 900, 963 ]

//  const user = {
//     username: "Hitesh",
//     price: 199
//  }

//  function handleObject(anyobject)
//  {
//     console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
//      }

 // handleObject(user)


//passing object
// handleObject({
//     username: "Shiva",
//     price: 369
//  })

 //passing array

 const myNewArray = [200, 400, 100, 600]

 function returnSecondValue(getArray)
 {
   return getArray[1]
 }
 
 //console.log(returnSecondValue); //[Function: returnSecondValue]
 
 //console.log(returnSecondValue(myNewArray)); // 400

 console.log(returnSecondValue([200, 400, 100, 600]));  // 400

 