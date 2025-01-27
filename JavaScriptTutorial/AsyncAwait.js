/*  
• Async-Await is used to handle promises. 

• Async functions always returns a promise.

• This can be happen in two ways either we returns a promise or we returns a non-promise value( like string, number, boolean and so on).
• If it is a non-promise value then this function automatically wrapped it into a promise and then returns it.

• Await can only be used inside an async function and it writtens before the promise and it resolves the promise. 

*/


// ------ Async -------

// We are returning a promised value
const p1 = new Promise(function(res) {
    res("Promise resolved Value ");       
})

async function data() {
    return p1;              // promise value
}

let val2 = data();
console.log(val2);


// We are returning a non-promise value
async function getData() 
{
    return "hello";         // string type i.e non-promise value
}

let val1 = getData();

console.log(val1); // returns the value in the promise 

val1.then(function(res) {
    console.log(res);
})

// ------ Await -------

async function fun()
{
    const value = await p1;
    console.log(value);
}

fun();


