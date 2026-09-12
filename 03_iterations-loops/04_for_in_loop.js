
//obejcts can be iterable by using for_in loop

const myobject = {
    py: "Python",
    java: "Java",
    js: "JavaScript",
    cpp: "C++"
}

for (const key in myobject) {
    //console.log(key);
    //console.log(myobject[key]);
    //console.log(`${key} : ${myobject[key]} `);    
}


// for-in loop can be appiled on array

const prgmshortcut = [".py",".java",".js",".c"]

for (const key in prgmshortcut) {
    //console.log(key);
    console.log(key, prgmshortcut[key]);    
}
