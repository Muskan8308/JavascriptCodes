// Loops
// for, while and do while loops are same as C, but 2 loops are also there -

// 1. for-of loop : This loop is basically used in strings and arrays.

let str = "JavaScript";
let length = 0;
for(let i of str)       // In this loop, we don't have to care about the initialization, updation and stoping condition.
{
    console.log("i =",i);
    length++ ;
}
console.log("Length of string : ",length);

// 2. for-in loop : This loop is used for objects and arrays.

let student = {
    Name : "Rahul",
    age : 24,
    cgpa : 7.34,
    isPass : true,
};

for(let i in student)   // This loop prints the keys from the object student.
{
    console.log("key =",i, ", value =",student[i]);
}

// Practice Q1

for(let num=0; num<100; num++)
{
    if( num%2===0 )         // Even numbers
    {
        console.log(num);
    }
}

// Practice Q2
// console.log("You've total 5 chances :)" );
// let gameNum = 30;
// for(let i=1; i<=5; i++)
// {
//      let num = prompt("Guess the number");
    
//     if(gameNum == num)
//     {
//         console.log("Right number...");
//     break;
//     }
//     else{
//         console.log("Wrong number...");
//     }
// }

// STRINGS

let str1 = "Apna College";
let str2 = 'Apna College';
console.log(str1, str2);
let obj = {
    item : "pen",
    price : 10,
};
let output = `The cost of ${obj.item} is ${obj.price} rs.`  // Template Literals..
console.log(output);
console.log("The cost of",obj.item,"is",obj.price,"rs.");
console.log("Muskan \nChourasia");
console.log("Muskan \tChourasia");
let str3 = "Apna\tCollege";             // escape characters(\n,\t) single count hote i.e \n = 1, \n != 1.
console.log(str3.length);

// Some Built-in methods of String 
// 1. str.length (Practiced above)      (Property of string)
// 2. str.toUpperCase()
// 3. str.toLowerCase()
// 4. str.trim()                This removes all spaces from the starting and ending.
// 5. str.slice(start,end)      This returns a part of string. And ending index is optional to give and it is inclusive(not included).
// 6. str1.concat(str2)         This combines two strings.This can done by (+) sign also.
// 7. str.replace(oldVal, newVal) This is used to replace a part of string with new strings.


let val = "JavaScript";         // In javascript, strings are immutable(unchangable).
console.log(val);
let newVal = val.toUpperCase();
console.log(newVal);
newVal = val.toLowerCase(); 
console.log(newVal);

let val1 = "      Javascript      js";
console.log(val1.trim());

console.log(val.slice(2,8));

let val2= " is a programming language.";
console.log(val.concat(val2));
console.log(val+val2);

let val3 = "helolololo";
console.log(val3.replace("lo","p"));
console.log(val3.replaceAll("lo","p"));

// Q3

let userName = prompt("Enter your full name");
let len = userName.length;
console.log("UserName is","@"+userName.concat(len));