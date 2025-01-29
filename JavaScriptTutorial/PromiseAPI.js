// Uncaught error - You are not even aware of that error and don't handled it.
// Uncaught error is a bad practice, you should never get an uncaught error in the program.
// We can handle this by using catch().

const p1 = new Promise((res, rej) => {
    //setTimeout(() => res("P1 success"), 3000);
    setTimeout(() => rej("P1 Fails"), 3000);

})

const p2 = new Promise((res, rej) => {
    // setTimeout(() => res("P2 success"), 1000);
    setTimeout(() => rej("P2 Fails"), 1000);
})

const p3 = new Promise((res, rej) => {
    // setTimeout(() => res("P3 success"), 2000);
    setTimeout(() => rej("P3 Fails"), 2000);

})


// • Promise.all() : If all the promises get resolved then it returns the iterator(array) of their values and if any one of them rejected then it throws an error same as the rejected promise.

// Promise.all([p1,p2,p3])
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => console.error(err));


// • Promise.allSettled() : Same as promise.all but it waits for all promises to get settled and returns their output in the array.

// Promise.allSettled([p1,p2,p3])
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => console.error(err));


// • Promise.race : It returns the first settled (whether rejected or resolved) promise in the output.

// Promise.race([p1,p2,p3])
// .then((res) => {
//     console.log(res);    
// })
// .catch((err) => console.error(err));


// • Promise.any() : It returns the first settled resolved promise and in case of all failure it returns an aggregate error in the array. 

Promise.any([p1,p2,p3])
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.error(err);
    console.log(err.errors)         // errors is the array 
});


