const xhr = new XMLHttpRequest();   // builtIn class provided by js
// This object 👆 creates a new Http message (request) to send to the backend

/*
    URL - UNIFORM RESOURCE LOCATOR 
    Its like an address for the internet and helps us locate another computer on the internet.
    
    Common Types of request -
    GET, POST, DELETE, PUT
    GET - Get some info from backend
*/

xhr.addEventListener('load', () => {
    console.log(xhr.response);      // This response is a string
})


// To set the request we use open(type of request, url of backend)
xhr.open('GET', "https://supersimplebackend.dev");


xhr.send();        // to send the message to the computer across the internet

/*
    xhr.response;    // This used to get the response form backend to our computer. 
    This can cause problem since it takes time for the request to travel across the internet due to which response is not available right away
    i.e xhr.response = undefined
    And xhr.send() is an aysnchronous code which means it will not wait for this line's code to finish, it will execute the code line by line. So to prevent this we use addEventListener() which executes at a specific event.
*/


// Giving Url paths (eg. "https://goole.com/about/owner") here after / i.e "/about/owner" is the path for the following urls
// xhr.open('GET', "https://supersimplebackend.dev/products/first");


// Backend only supports a certain set of url paths

// xhr.open('GET', "https://supersimplebackend.dev/not-supported");     // not supported by the backend




