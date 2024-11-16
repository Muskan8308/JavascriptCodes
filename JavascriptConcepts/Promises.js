// Synchronous Programming : The code runs in a particular sequence of instructions given in the program.
// and each instruction will wait for previous instruction to execute.

// Asynchronous Programming : This code execution allows us to execute next instructions immediately and doesn't block the flow.
console.log("1");
console.log("2");
setTimeout(()=>{
    console.log("Hiii");    // Asynchronous  
},3000)
console.log("3");
console.log("4");

// CallBack 
function hello() 
{
    console.log("Hello");
}
setTimeout(hello,4000);

// CallBack Hell Problem : It is a problem in which there are many callbacks nested inside themself.
// The solution of callBack problem is "Promises".

// Promise : It is for "eventual" completion of task.It is an object in JS.
// Syntax : let prom = new Promise(resolve,reject) => {}
// Here resolve and reject are callback functions provided by JS.
// Promise have three state -
// 1. Pending : the result is undefined
// 2. Resolved : the result is a value (fulfilled)
// 3. Rejected : the result is an error object (rejected)


// let prom = new Promise((resolve, reject)=>{
//     console.log("I'm a Promise");
//     // resolve("Success");
//     reject("Some error");
// });

// We don't create promises, these promises is sending by the APIs, like below -

// function getData(dataId, getNextData)
// {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if(getNextData)
//             {
//                 getNextData();
//             }
//         }, 5000);
//     });
// }




// There are two functions by which we access the promise -
// promise.then((res)=>{})
// promise.catch((err)=>{})


const getPromise = () => {
    return new Promise((resolve,reject) => {
        console.log("I'm a promise...");
     //   resolve("Success!!")
        reject("Network error");
    });
};


let promise = getPromise();
promise.then((res) => {
    console.log("Promise fulfilled!!",res);
});

promise.catch((err) => {
    console.log("Rejected",err);
})



