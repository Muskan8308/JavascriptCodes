// objects : 

let obj1 = {
    name : "Muskan",
    age : 26,
    marks : 89.65,
    isIndian : true
}

console.log(obj1);

let obj2 = {
    name : "Muskan",
    age : 26,
    marks : 89.65,
    "is Indian" : true      // This is also valid to have space b/w the keys.
}

console.log(obj2);
console.log(obj2.age);
console.log(obj2.name);
console.log(obj2.marks);
console.log(obj2["is Indian"]);
console.log(obj1['age']);

obj2.marks = 90.4;
obj2["is Indian"] = false;
obj2['name'] = "Muskan Chourasia";

console.log(obj2);

// To iterate the object we use for-in loop

for(const key in obj2)
{
    console.log(key, obj2[key]);        // here obj2.key won't work it gives all values as undefined.
}
