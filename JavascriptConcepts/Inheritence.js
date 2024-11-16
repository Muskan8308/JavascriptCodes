// Inheritence 
// If child and parent class have same method, then child's method will be used.[Method Overriding]
// super keyword : This is used to call the constructor of parent's class.
class person{
    constructor(name)
    {
        this.name = name;
    }
    eat()
    {
        console.log("eat");
    }
   sleep()
    {
        console.log("sleep");
    }
}

class engineer extends person 
{
    constructor()
    {
        super(name);
        console.log("Parent's class constructor is invoked!!")
    }
    work()
    {
        console.log("solve problems & give solutions.")
    }
}

let obj = new engineer();

// Q1 

class User 
{
    constructor(name,email)
    {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("Name : ",this.name);
        console.log("Email : ",this.email);
    }
}
let object = new User("Muskan", "muskan@gmail.com");
object.viewData();

// Q2 

class Admin extends User
{
    constructor(name,email)
    {
       super(name,email);
    }
    editData = (city) => {
        console.log("City : ",city);
    }
}

let std = new Admin("Nayan","nayan12@gmail.com");
std.viewData();
std.editData("Vrindavan");
