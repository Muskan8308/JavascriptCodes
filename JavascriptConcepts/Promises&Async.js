 // Promise Chaining

function asyncFunc1()
{
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log("Data1");
            resolve("success");
        },4000);
    });
}
function asyncFunc2()
{
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log("Data2");
            resolve("success");
        },4000);
    });
}
// Promise Chained
console.log("Fetching data1....");
let p1 = asyncFunc1();
p1.then((res)=>{
    console.log("fetching data2...");
    asyncFunc2().then((res)=> {});
})

// Async-Await : Async functions always returns a promise.
// Await pauses the execution of its surrounding async function until the promise is settled.

function getData(dataId)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("Success");
        },2000);
    });
}

async function getAllData()
{
    console.log("Getting Data1...");
    await getData(1);
    console.log("Getting Data2...");
    await getData(2);
    console.log("Getting Data3...");
    await getData(3);
}
// Here the problem is to execute the async function, we have to call the function atleast once.
// So the solution is to write the function inside the IIFE(Imediately Invoked Function Execution), which get executed only once when it is created without calling.
// Syntax -  (whole function)(); 

(async function getAllData()
{
    console.log("Getting Data1...");
    await getData(1);
    console.log("Getting Data2...");
    await getData(2);
    console.log("Getting Data3...");
    await getData(3);
})();

