// CartOOP.html

class Product {
    id;
    image;
    name;
    color;
    priceCents;

    constructor(proDetails)
    {
        this.id = proDetails.id;
        this.image = proDetails.image;
        this.name = proDetails.name;
        this.color = proDetails.color;
        this.priceCents = proDetails.priceCents;
    }
}

class Cloth extends Product {           // Cloth(child) has inherited the Product(parent) class
    size;
    constructor(proDetails)
    {
        super(proDetails);          // super calls the parent's class constructor
        this.size = proDetails.size;
    }
}

const shirt = new Cloth({
    id : "36465-vsdhc-edc6231",
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp60iJ1WyTUZ59nnMq1r5MxQWgUXvxQPJXoQ&s',
    name : "Blue line printed shirt",
    color : "white + blue",
    size : "XX"
})

console.log(shirt);

// Some built-in classes

const date = new Date();        // This will give the current date and time
console.log(date);

console.log(date.toLocaleTimeString()); // This will give the current time in h:m:s format

// The dayJs library also uses Date() class in background. And, using dayJs is better than using directly Date() class.


// Details about "this"

// 'this' points to its parents object since here is no parent object of following therefore its output will be 'undefined'.

console.log(this);

const obj = {
    a : 2,
    b : this.a
};

function this_log()
{
    console.log(this);
}
this_log();
 
// We can change the value of 'this' by using call()

this_log.call('Hello this is the changed value of "this" ');
this_log.call('hello');

// But Arrow function, do not change the value of 'this'
// 'this' have the same value inside as it has outside the arrow function

const obj2 = {
    method : () => {
        console.log(this);
    }
}
obj2.method();