
function print(n)
{
    for(let i = 1; i <= n; i++)
    {
        console.log(i);
    }
}
print(5);

function cube(a,b)
{
    return Math.abs(a*a*a) + Math.abs(b*b*b);
}

console.log(cube(4,-2));

// Some built-in functions

console.log(Math.abs(-5.78));               // gives positive value

console.log(Math.max(-5.78,75,98));         // gives maximum
console.log(Math.min(-5.78,34,-12,67,32));  // gives minimum

console.log(Math.pow(2,4));             // gives 2 ^ 4
console.log(Math.log(2.81));            // gives log of the value

console.log(Math.sqrt(4));       
console.log(Math.cbrt(69));

console.log(Math.floor(-78.9));         // gives integer which is the floor for the value i.e -79
console.log(Math.floor(56.8));          // gives 56
console.log(Math.ceil(-5.78));          // gives integer which is the ceiling for the value i.e -5
console.log(Math.ceil(67.9));           // gives 68



// Some questions

// 1. Generate random integers b/w 0 & 9 (included).
    let a = Math.floor(Math.random()*10);
    console.log(a);

// 2. Generate random integers b/w 0 & 10 (included).
let b = Math.floor(Math.random()*11);
console.log(b);

// 1. Generate random integers b/w -10 & 10 (included).
let c = Math.floor(Math.random()*(-10) + Math.random()*11);
console.log(c);


