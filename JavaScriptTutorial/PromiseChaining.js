const cart = ['shoes', 'socks', 'gloves'];

/*
  ------  Promise Chaining -------

  for eg.
  createOrder -> orderSummary -> proceedToPayment -> updateWallet

*/

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


