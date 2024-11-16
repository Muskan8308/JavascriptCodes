
let x = ["ABcd",34,78.9,true];      // Array

console.log(x);
// console.log(x[0]);
// console.log("ajdj");

let cities = ["Mumbai","Delhi","Pune"];
console.log(cities);
cities.push("Goa"); // Adds a element in the last of array
console.log(cities);
cities.pop();       // Deletes last element
console.log(cities);

cities.unshift("Indore", "Ajmer", "Ujjain");    // Adds a element in the starting of array
console.log(cities);

cities.shift();     // Deletes starting element
console.log(cities);

let v = [34, 89.2022, "Romeo", true, [5,7,8,24.6]];
console.log(v);

// cities
console.log(cities.slice(2,4));     // Slice() method writes a part of the array

let a = ["I am a good dancer."];
console.log(a);
const str = a.splice(2);
console.log(str);

