// Map() is a method of Array

let arr = [4,6,7,1];
console.log(arr);

function add(ele)
{
    return ele + 10;
}

arr = arr.map(add);
console.log(arr);

arr = arr.map(function(ele){
    return ele + ele;
})
console.log(arr);

let brr = arr.map((ele) => {        // Arrow function
    return ele/10;
})
console.log(brr);
console.log(arr);

brr = arr.map(ele => ele * ele);        // Short form of arrow function
console.log(brr);

// Reduce()

let crr = [5,2,4,6,8,9,6];
console.log(crr);

let x = crr.reduce(function(a,b){
    return a + b;
})

console.log(x);



