let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let dot = document.getElementById("dot");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let equal = document.getElementById("equal");
let divide = document.getElementById("devide");
let mult = document.getElementById("mult");
let del = document.getElementById("del");
let ac = document.getElementById("ac");

let text = document.getElementById("text");
text.value = "";

one.addEventListener('click',function(event){
    text.value = text.value + "1";
});

two.addEventListener('click',function(event){
    text.value = text.value + "2";
});

three.addEventListener('click',function(event){
    text.value = text.value + "3";
});

four.addEventListener('click',function(event){
    text.value = text.value + "4";
});

five.addEventListener('click',function(event){
    text.value = text.value + "5";
});

six.addEventListener('click',function(event){
    text.value = text.value + "6";
});

seven.addEventListener('click',function(event){
    text.value = text.value + "7";
});

eight.addEventListener('click',function(event){
    text.value = text.value + "8";
});

nine.addEventListener('click',function(event){
    text.value = text.value + "9";
});

zero.addEventListener('click',function(event){
    text.value = text.value + "0";
});



plus.addEventListener('click',function(event){
    text.value = text.value + "+";
});

minus.addEventListener('click',function(event){
    text.value = text.value + "-";
});

devide.addEventListener('click',function(event){
    text.value = text.value + "/";
});

mult.addEventListener('click',function(event){
    text.value = text.value + "*";
});

del.addEventListener('click',function(event){
    let temp = text.value;
    temp = temp.substring(0,temp.length-1); 
    text.value = temp;
});

ac.addEventListener('click',function(event){
    text.value = "";
});

equal.addEventListener('click',function(event){
    let expression = text.value;
    text.value = eval(expression);
});

dot.addEventListener('click',function(event){
    text.value = text.value + ".";
});