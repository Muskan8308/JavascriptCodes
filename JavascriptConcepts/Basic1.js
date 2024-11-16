 console.log("Apna College");
 console.log("Apna College");
 name = "Muskan Chourasia";
 console.log(name);
 let price = 210;
 let x;
 let y = null;
 let a = BigInt("1234");
 let b = Symbol("Summer");

 // here student is an object which is a collection of key-values pair where fullName, age, etc. are keys and 'Muskan Chourasia', 18,etc. are values.
 const student = {
    fullName : "Muskan Chourasia",
    age : 18,
    cgpa : 7.10,
    isPass : true,
 };

// Two ways to access individual keys of object - 1. student.age     2.student["age"]
console.log(student.cgpa);
 student["age"] = 19;           // Here age is updated...
 console.log(student["age"]);

 const profile = {
    title : "Shradha Khapra",
    posts : 195,
    bio : " Apna College | Ex-Mircosoft ",
 };
