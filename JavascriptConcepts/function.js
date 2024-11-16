// FUNCTION

function sum(x,y)       // function definition
{
    s = x+y;
    return s;
}

let res1 = sum(4,7);      // function call
console.log(res1);

// Above same function can be return in form of arrowFunction which is a part of modern JS.
// ARROW FUNCTION

const val = (x,y) => {
    console.log(x+y);
}

let res2 = val(4,6); 
console.log(res2);

const mul = (a,b) => {
    return a*b ;
}
// let res3 = mul(8,4);
console.log(mul(8,4));

// Practice Q1
// This can be done by using for-of loop also inside a function.

// for(let char of str)
//     {
//         if(str.toLowerCase() == "a" || str.toLowerCase() == "e" || str.toLowerCase() == "i" || str.toLowerCase() == "o"|| str.toLowerCase() == "u")
//         {
//             count++;
//         }
//     }

function Vowels(str)
{
    let count = 0 ;
    for(let i=0; i<str.length; i++)
    {
        if(str[i].toLowerCase() == "a" || str[i].toLowerCase() == "e" || str[i].toLowerCase() == "i" || str[i].toLowerCase() == "o"|| str[i].toLowerCase() == "u")
        {
            count++;
        }
    }
    return count;
}
let result = Vowels("cOnsonAnts");
console.log("No. of vowels present in string :",result);

// Q2

let countVowel = (strg) => {
    let total = 0;
    for(let val of strg)
    {
        if(val.toLowerCase() == "a" || val.toLowerCase() == "e" || val.toLowerCase() == "i" || val.toLowerCase() == "o"|| val.toLowerCase() == "u")
        {
            total++;
        }
    }
    return total;
}

console.log("No. of vowels :",countVowel("EnterprenuershIp"));

// In JS, Functions can be passed as an argument to another function and also can be return in another function, and those functions are called callback functions (which get passed).

// FOREACH LOOP : It get automatically call. It doesn't create a new array.
// Higher Order Function/Methods : If a function returns a function or get function as a argument are higher order functions.
// ForEach loop is higher order function. 

let arr = [1,3,4,5,7];
arr.forEach(function printVal(val){
    console.log(val);
} )

let city = ["pune",'mumbai','delhi','kolkata'];
city.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
})

// Q3

let num = [4,6,3,2,7];
let sqr = (n) => {          // Arrow function
    console.log(n*n);       // n ** 2
}

num.forEach(sqr);           // Another way to pass a function as an argument.

// Some array methods 

// 1. Map : It is similar to forEach but the only difference is it creates a new array.
// 2. Filter : Creates a new array of elements that give true or a condition/filter.
// 3. Reduce : Performs some operations and reduces the array to a single value and returns the same.
let A =[ 4,5,78,3,3,2,78,90];

A.map((val) => {
    console.log(val);
})

let newA = A.filter((val) => {
    return val%2 != 0;
});
console.log(newA);

let output = A.reduce((prev, curr) => {         
    return prev>curr ? prev: curr ;         // returns the largest value
})
console.log(output);

// Q4
let marks = [76,56,95,78,34,90,93,97]; 
 let result1 = marks.filter((res) => {
    return res > 90;
 })
console.log(result1);

// Q5 take size of array from user and then sum and multiply all elements of array

let n = prompt("Enter the size of an array : ");

let arr1 = [];
for(let i=1; i<=n; i++)
{
    arr1[i-1] = i*3;      // 1(0), 2(1), 3(2).... 
}
console.log(arr1);

let sum1 = arr1.reduce((prev,curr) => {
    return prev + curr ;
})
let mult = arr1.reduce((prev,curr) => {
    return prev*curr ;
})
console.log("Sum of array's elements :",sum1);
console.log("Multiplication of array's elements :",mult);
