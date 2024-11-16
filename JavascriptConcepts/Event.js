// Events : To do the simplest changes in our web pages is called events.
// Event Handling : To deal with these events is called event handling.
// Event Object : It is a special object that has details about the event.


let btn = document.querySelector("#btn1");
btn.ondblclick = () => {                                // Event Handler
    console.log("Button should clicked 2 times");
}

let div1 = document.querySelector("div");
div1.onmouseover = ()=>{
    console.log("you are in a div");
}

let btn2 = document.querySelector("#btn2");
// btn2.onclick = (e) => {                        // Event object (e)
//     console.log(e);
// }

// Event Listener
btn2.addEventListener("click",(e) => {
    console.log("Button is pressed");
    console.log(e);
    console.log(e.type);
});
btn2.addEventListener("click",() => {
    console.log("Button is pressed again 1");
});
let handler2 = () => {
    console.log("Button is pressed again 2");
};
btn2.addEventListener("click",handler2);

btn2.addEventListener("click",() => {
    console.log("Button is pressed again 3");
});

btn2.removeEventListener("click",handler2);


// Q1
let modeBtn = document.querySelector("#mode");

let currMode = "light";
modeBtn.addEventListener("click",() =>{
    if(currMode == "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor="white";

    }
    console.log(currMode);
})




