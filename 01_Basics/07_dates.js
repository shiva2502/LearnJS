//Dates

let myDate = new Date();

//console.log(myDate); //2026-09-08T11:57:17.798Z
//console.log(myDate.toString()); //Tue Sep 08 2026 13:58:13 GMT+0200 (South Africa Standard Time)
//console.log(myDate.toDateString()); //Tue Sep 08 2026
//console.log(myDate.toLocaleString()); //2026/09/08, 14:00:05
//console.log(typeof myDate); //object

//let myCreatedDate = new Date(2026,0,8); 
//console.log(myCreatedDate.toDateString()); //Thu Jan 08 2026

//let myCreatedDate1 = new Date(2026,0,8,4,63); 
//console.log(myCreatedDate1.toLocaleString()); 
/*Thu Jan 08 2026
2026/01/08, 05:03:00*/

//let myCreatedDate2 = new Date("2026-01-08"); 
//console.log(myCreatedDate2.toLocaleString()); //2026/01/08, 02:00:00

let myCreatedDate3 = new Date("08-1-2026"); 
//console.log(myCreatedDate3.toLocaleString()); //2026/08/01, 00:00:00

let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(myCreatedDate3.getTime());
//console.log(Date.now());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate); //2026-09-08T12:28:29.872Z
// console.log(newDate.getMonth()); //8
// console.log(newDate.getMonth()+1); //9
// console.log(newDate.getDay()); //2

console.log(newDate.toLocaleString('default', {weekday:"long"}))