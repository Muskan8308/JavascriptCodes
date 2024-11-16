// Window Object : It represents an open window in a browser.It is browser's object(not js's) & is automatically created by browser.
// It is an global object with lots of methods and properties.   
// What is DOM : It is simply a way to access the HTML code through JS. 
window.console.log("hello");
console.dir(document.body);
console.log(document.body);
console.log(document.body.style.background="burlywood"); // changing background color in html through js. 

// DOM Manipulation 
// Ways to accessing (i) with id
let v1 = document.getElementById("head");
console.dir(v1);
// Ways to accessing (ii) with class
let v2 = document.getElementsByClassName("myclass");
console.dir(v2);
// Ways to accessing (iii) with tag
let v3 = document.getElementsByTagName("p");
console.dir(v3);

// Above things can also be done by using the following..
// Ways to accessing with queryselecter
let q1 = document.querySelector("p");  // 1st element
console.dir(q1);
let q2 = document.querySelectorAll("p");  // all element
console.dir(q2);
let q3 = document.querySelector(".myclass");  // 1st element
console.dir(q3);
let q4 = document.querySelectorAll(".myclass");  // all element
console.dir(q4);
let q5 = document.querySelector("#head");  // 1st element
console.dir(q5);

// innerText : returns the text content of the ele,emt and all its children.
// innerHTML : returns the plain text or HTML contents in the element
// textContent : returns textual content even for hidden elements.
let div = document.querySelector("div");
console.dir(div);

// Q1
let val = document.querySelector("#text");
console.dir(val.innerText);

val.innerText = val.innerText+"from Apna College Students";

// Q2

let val1 = document.querySelectorAll(".box");
console.dir(val1);
// val1[0].innerText = "HIII";
// val1[1].innerText = "HEllo";
// val1[2].innerText = "Bonjour";

let idx=1;
for(let val of val1)
{
    val.innerText = `New Value ${idx}`;
    idx++;
}
