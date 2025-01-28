/*  
• Async-Await is used to handle promises. 

• Async functions always returns a promise.

• This can be happen in two ways either we returns a promise or we returns a non-promise value( like string, number, boolean and so on).
• If it is a non-promise value then this function automatically wrapped it into a promise and then returns it.

• Await can only be used inside an async function and it writtens before the promise and it resolves the promise. 

*/


// ------ Async -------

/*
// We are returning a promised value
const p1 = new Promise(function(res) {
    setTimeout(() => {
        res("Promise resolved Value ");
    }, 5000);
           
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

*/

// Some questions which are asked in interviews

/*

// Js Engine was waiting for the promise to be resolved.
async function fun2()
{
    // Here in o/p -> js has waited for the promise to be resolved and then print "namaste and promise resolved" together.
    const value = await p1;
    console.log("Namaste Jii");
    console.log(value);

    // Here we are trying to resolve our promise again 
    const value2 = await p1;
    console.log("Namaste Jii 2");
    console.log(value2);
    // Here it will take 5s to resolve our promise only once and then print all together. 
}
fun2();


// Js Engine will not wait for promise to be resolved
    function handlePromise(){
        p1.then(function(res) {
            console.log(res);
        })

        console.log("Namaste jii");
    }

handlePromise();
// Here in o/p -> "Namaste" will print first and then "promise resolved" will print means js has not wait for the promise to get resolved.

*/

// Some more complex questions asked in interview

const p1 = new Promise(function(res) {
    setTimeout(() => {
        res("Promise resolved Value ");
    }, 3000);
           
})

const p2 = new Promise(function(res) {
    setTimeout(() => {
        res("Promise resolved Value ");
    }, 5000);
           
})

// • If p1 - 5s and p2 - 3s to resolve, then it takes 5s and then print all namaste 1 and 2 together.
// • If p1 - 3s and p2 - 5s to resolve, then it takes 3s to print namaste 1 then after 2s it will print namaste 2 .

async function fun2()
{
    const value = await p1;
    console.log("Namaste Jii");
    console.log(value);

    const value2 = await p2;
    console.log("Namaste Jii 2");
    console.log(value2);
}
fun2();

/*
    • What is happening behind the scene here with fun2() ?

    ⇨ There is a callstack which is empty right now and also there are 2 promises that will resolve at some point of time.
    Since js is a synchronous single threaded language therefore all the code will run line by line. And as soon as the fun2() function will call, it will come inside the callStack.
    Now, when js sees that "await" is here and a promise has to resolve at some point of time so at that time the fun2() function will get suspended and will leave the callstack (since js does not wait for anything, also fun2() is not waiting inside the callstack it gets suspended) due to which our page or callstack will not freeze.
    Now when the promise get resolved, the fun2() will again comeback to the callstack and start executing from where it left.



    CALLSTACK
     ↓
    Empty
     ↓
    fun2()
     ↓       LEAVE THE STACK and take 5s for promise to resolve till then the stack is empty 
     ↓       Now, Promise resolved
    fun2() - Start executing again from where it left

*/






