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



