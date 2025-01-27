const cart = ['shoes', 'socks', 'gloves'];

/*
  ------  Promise Chaining -------

  1. Promise can be created using new Promise() constructor function which takes a callback function as argument.

  2. There is a '.catch()' which is used to attach a failure callback function that handles any error that pops up during the execution of promise chain.

  3. .catch() only handles the error of .then() that are present above it. If there is any then() below catch(), so it will executed and catch will don't handle the error for that.

  4. We can have multiple catch() based on the requirement and then a general catch() at the end.
  
  5. If a then() returns a value, so it will be used as an argument in the next function. 

  for eg.
  createOrder -> orderSummary -> proceedToPayment -> updateWallet

*/

// Promise chaining

createOrder(cart)
.then(function (orderId) {
    console.log(`Order Id - ${orderId}`);
    return orderId;
})
.then(function (orderId){
    return orderSummary(orderId);
})
.then(function() {
    return proceedToPayment();
})
.then(function () {
    return updateWallet();
})
.then(function(paymentInfo) {
    console.log(paymentInfo);
})
.catch(function(err) {
    console.log(err.message);
})

function createOrder(cart){
    return new Promise(function (resolve, reject) {
        const orderId = 345662;

        // failure
        if(!validateCart(cart))
        {
            const err = new Error("Cart is invalid");
            reject(err);
        }

        // Success
        if(orderId)
        resolve(orderId);
    })
}

function orderSummary(orderId)
{
    return new Promise(function (resolve, reject) {
        console.log("Here is the details of the Orders")
        resolve(orderId);
    })
}

function proceedToPayment() 
{
    return new Promise(function (resolve, reject) {
        console.log("Payment Successful");
        const paymentInfo = 250;
        resolve(paymentInfo);
    //  reject("Payment Unsuccessful");
    })
}

function updateWallet()
{
    return new Promise(function (res, rej) {
        res("Wallet is updated");
    })
}

function validateCart(cart) {
    return true;
}


