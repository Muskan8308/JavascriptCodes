/*
    • fetch() is a method provided by the browser, not by the js.
    • fetch() returns a promise.

    • How the fetch() works ?
    ⇒ fetch() returns a promise and if the promise is resolved it gives a response which is a readable stream.
       So to convert that readable stream into json file we use .json()
*/


// const apiUrl = "https://apihscgh";

const apiUrl = "https://api.github.com/users/Muskan8308"

async function handlePromise() 
{
    // One way to handle errors in async await functions - try catch
    try
    {
        const data = await fetch(apiUrl);
        const jsonValue = await data.json();    // .json() also returns a promise

        console.log(jsonValue);
    }
    catch(err)
    {
        console.log(err);
    }
}

handlePromise();

// Another way is traditional way to handle errors -
// handlePromise().catch(err => console.log(err));

