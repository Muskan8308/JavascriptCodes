let x = document.getElementById("h1");
let y = document.getElementById("h2");

x.addEventListener("click",() => {
    x.style.color = "yellow";
    x.style.backgroundColor = "green";
    x.style.backgroundColor = "green";
})

y.addEventListener("mouseenter",() => {     // hovering on h2 and changes appear in h1
    x.style.color = "white";
    x.style.backgroundColor = "blue";
})
y.addEventListener("mouseleave",() => {
    x.style.color = "black";
    x.style.backgroundColor = "white";
})