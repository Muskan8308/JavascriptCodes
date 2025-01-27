/*
    Promise is an object which represents the eventual completion or failure of an asynchronous operation.
    It has three states - Fulfilled/Resolved, Pending & Rejected.
    It resolved only once and is immutable(unchanged).
    Using `.then()` we can control when we have to call the callback function.

*/

const cart = ['shoes', 'socks', 'gloves'];
// Consumer side
const promise = createOrder(cart);

console.log(promise);

promise.then(function (orderId) {
    console.log(orderId);
});

// Producer side

//To creating a promise, syntax -

new Promise(function(resolve, reject){
    // resolve and reject are the functions provided by the promise class
    
});

function createOrder(cart)
{
    const pr = new Promise(function (resolve, reject) {
        // To reject the order -

        if(!validateCart(cart))
        {
            // Way to create an error in js, using Error builtIn class
            const err = new Error("Cart is not valid");
            reject(err);
        }

        // To accept or resolve the error -
        
        const orderId = "456673";

        if(orderId)
        {
            // when delayed, promise has the pending state
            // setTimeout(() => {
            //     resolve(orderId);
            // }, 5000);

            // When resolved, promise has the fulfilled state 
            resolve(orderId);
        }
    });
    return pr;
}

function validateCart()
{
    return true;
}
