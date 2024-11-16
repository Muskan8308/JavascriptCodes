// 1. getAttribute(attr) = to get the attribute's value
// 2. setAttribute(attr,new) = to set the attribute's value
// 3. style = It gives styling to elements.
// To insert elements, we have to (i)create then (ii)add elements.
// 4. node.append(ele) = adds at the end of the node(inside).
// 5. node.prepend(ele) = adds at the start of the node(inside).
// 6. node.before(ele) = adds before the node(outside).
// 7. node.append(ele) = adds after the node(outside).
// 8. node.remove() = removes the node

let div = document.querySelector("div");
console.log(div);
let getId = div.getAttribute("id");
console.log(getId);

let para = document.querySelector("p");
console.log(para);

console.log(para.setAttribute("class","newClass"));

para.style.color = "red";
para.style.fontFamily = "Arial";
para.style.fontSize = "25px";

// Creating
let newBtn = document.createElement("button");
newBtn.innerText = "click here";
console.log(newBtn);

// Adding
let div1 = document.querySelector("div");
div1.append(newBtn);
div1.prepend(newBtn);
div1.before(newBtn);
div1.after(newBtn);

let heading = document.createElement("h1");
heading.innerHTML = "<i>Hiii! Everyone</i>";

document.querySelector("body").prepend(heading);

let para1 = document.querySelector("p");
para1.remove();

// Q1
let btn = document.createElement("button");
btn.innerText = "Click me";
console.log(btn);
btn.style.backgroundColor = "red";
btn.style.color = "white";

let body1 = document.querySelector("body");
body1.prepend(btn);




