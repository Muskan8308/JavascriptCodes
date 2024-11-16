// Arithmetic Operators
let a= 5, b = 2;
console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a * b = ", a*b);
console.log("a / b = ", a/b);
console.log("a % b = ", a%b);
console.log("a ** b = ", a**b);  // Exponential operator i.e 5^2 = 25;

// Unary Operator
console.log("++a = ", ++a);
console.log("--a = ", --a);

// Assignment operator

a += 4 ;        // a = a + 4
console.log("a = ", a);

// Comparison operator
console.log("a == b", a==b); // equal to
console.log("a != b", a==b); //  not equal to
console.log("a === b", a==b); // strictly equal to (it will check the type also with value)
console.log("a 1== b", a==b); // strictly not equal to
 
// Ternary Operator
// a ? b : c

let age = 19;
let result = age>=18 ? "Adult" : "Not Adult" ;
console.log(result);

// Practice Q1
let num = prompt('Enter a number : ');
let res = num%5 === 0 ? "It is a multiple of 5" : "It is not a multiple of 5";
console.log(res);

// Practice Q2
let marks = prompt("Enter your marks : ");
if(marks >= 90 && marks <= 100){
    console.log(" Grade A");
}
else if(marks>=70 && marks<=89)
{
    console.log(" Grade B");
}
else if(marks>=60 && marks<=69)
{
    console.log(" Grade C");
}
else if(marks>=50 && marks<=59)
{
    console.log(" Grade D");
}
else{
    console.log(" Grade F");
}
