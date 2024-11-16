// Object : A javascript object is an entity having state and behaviour (properties & methods)
// Js having an special property called prototype.
// To create your own prototype we use .__proto__ It is use to inherit the properties of another object.
// If object and prototype have same method, then object's method will be used.

// Class is a program-code template for creating objects.
// These objects will have some state(variables) & some behaviour(functions) inside it.


// OBJECTS
const student = {
    Name : "Muskan",
    marks : 78.9,
    printMarks : function() {
        console.log("marks : ",this.marks);
    }
};

const company = {
    calcTax() {
        console.log("Tax rate is 15%");
    }
}

const employee = {
    salary : 50000
}
employee.__proto__ = company;

// CLASSES

class Car 
{
    constructor(brand)          // Constructor
    {
        console.log("Object is created");
        this.brand = brand;
    }
    start()
    {
        console.log("Start");
    }
    end()
    {
        console.log("End");
    }
}

let obj = new Car("Toyota");
console.log(obj);

