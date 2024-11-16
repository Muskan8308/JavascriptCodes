// API (Application Programming Interface)
// The fetch API provides an interface for fetching (sending/receiving) resources.
// It uses Request and Response objects.
// The fetch() method is used to fetch a resorce(data).
// syntax - let promise = fetch(url,[option])

// Some Terms
// AJAX : It is Asynchronous JS & XML.
// JSON : It is JavaScript Object Notation.
// json() : returns a second promise that resloves with the result of parsing the response body text as JSON.(Input is JSON, output is JS object)
// Requests & Response
// Headers : It contains Additional details in HTTP.
// Status code : 200 is for successful code.

const factpara = document.querySelector("#fact");
const btn = document.querySelector("#btn");
const URL = "https://cat-fact.herokuapp.com/facts";
const getFact = async () =>{
    console.log("Getting Data.....")
    let response = await fetch(URL); 
    console.log(response);  // JSON format
    let data = await response.json();      // This method is used to make data readable.
    factpara.innerText = data[4].text;
}
btn.addEventListener("click",getFact);













