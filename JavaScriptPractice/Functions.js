
function fun(x)
{
    return x + x;
}

console.log(fun(" Muskan"));

// Arrow function
const num = (a, b)=>{
    return a * b;
}
console.log(num(5,7));

const num2 = (x,y) => x+y;      // Another way to write single line code inside an arrow function.
console.log(num2(5,7));

// Anonymus Function

let s = function()
{
    console.log("Hiiii");
}
s();

//Function inside an object
const obj1 = {
    num : 2,
    fun1 : function()
    {
        console.log("Hello");
    }
};
obj1.fun1();

// Passing function in a function as a parameter

function run(para)  // function declaration
{
    para();
}

run(function(){                 // Function calling     
    console.log("Hello1");
})

// Synchronous Code : Compiler will wait for one line to finish before going to the next line.
// Asynchronous Code : Compiler won't wait for one line to finish before going to the next line.
// Above code was the synchronous code, below will be the asynchronous code.

// SetTimeOut(function, time) method : It doesn't block the flow of the code. And it prints or do whatever is the working of the function after 4 seconds(which is given as a parameter).

setTimeout(function(){
    console.log("timeOut");
}, 4000);

console.log("Next Line");

// SetInterval(function, time) method : It doesn't block the flow of the code. And it prints or do whatever is the working of the function every 3 seconds(which is given as a parameter). This returns a number.

// ClearInterval(id) : This is used to stop the interval where id is the returned numberid from setInterval(). 

 const setId = setInterval(function(){
    console.log("Inteval");
}, 4000);

clearInterval(setId);

console.log("Next Line 2");

// forEach(function) : To iterate through the array, we use forEach() method.

["dinner", "lunch", "breakfast"].forEach(function(value, idx){
    console.log( value, idx);
});


["dinner", "snacks", "lunch", "breakfast"].forEach(function(value, idx){
    if(value == 'snacks')
        return;                     // This will skip the iteration like as continue.
    console.log( value, idx);
});




