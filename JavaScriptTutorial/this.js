"use strict";

console.log(this);

function x()
{
    console.log(this);      // in strict mode, undefined otherwise window object
}
x();

//  "this" value depends on how the function is called 
// function inside the object

const obj = {
    a : 344,
    b : function() {
        console.log(this); // "this" has the reference of the obj
    }
}

obj.b();

// call() method

const student1 = {
    name : "John",
    printName : function() {
        console.log(this.name); 
    }
}

const student2 = {
    name : "Jecica",
    
}

student1.printName();        // John

// Sharing printName() function from student1 to student2 by call() method
student1.printName.call(student2);

// this inside arrow function

const obj2 = {
    a : 344,
    x : () => {

        // value of "this" inside the arrow function depends on the enclosing lexical context.
        // here the lexical context is the object i.e it behaves like global object.
        console.log(this); 
    }
}
obj2.x();

const obj3 = {
    a : 67,
    // nested arrow function
    x : function() {
        const y = () => {       // here the lexical context is the function body therefore it will behave like the reference of the object. 
            console.log(this);
        }
        y();
    }
}

obj3.x();
