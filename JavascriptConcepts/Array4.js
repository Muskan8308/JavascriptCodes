// ARRAY 
// Arrays are mutable in JS.
let marks = [67,78,43,63,98,54];
let name = ['muskan','shradha','nayan','aman'];
let item = ['muskan',78,'nayan',85];        // this is bad practice
console.log(marks);
console.log(name);
console.log(item);
console.log(item.length);
console.log(name[2]);       //To access that index's value.
marks[4] = 87;
console.log(marks);

// for(let idx=0; idx<name.length; idx++)
// {
//     console.log(name[idx]);
// }

for(let ele of name)
{
    console.log(ele.toUpperCase());
}

// Practice Q1

let score = [85,97,44,37,76,60];
let sum = 0;
for(let i=0; i<score.length; i++)
{
    sum = sum + score[i];
}
let avr = sum/score.length;
console.log("Average marks =",avr);

// Q2

let price = [250,645,300,900,50];
let offer, val = 0;
for(let i=0; i<price.length; i++)
{
    offer = price[i] / 10;
    price[i] = price[i] - offer;
}
console.log(price);

// Array methods (built-in) 
// 1. Push() : add to end, this method change original arrays.
// 2. Pop() : delete from end and return, this method change original arrays.
// 3. toString() : converts array to string
// 4. Concat() : It combines two arrays.
// 5. Unshift() : It adds at starting.
// 6. Shift() : It deletes from starting and return.
// 7. Slice() : It returns a part of array.
// 8. Splice() : It changes original array(i.e.add,remove,replace)    syntax- splice(startIdx,delCount,newEle);
let food = ["pizza","pears",'burger','butter','lady finger'];
console.log(food);
food.push("chips","juice");
console.log(food);
food.pop();
console.log(food);

console.log(food.toString());

let drinks = ['coke','fruity','thumbsUp'];
console.log(food.concat(drinks));

drinks.unshift("juice","pepsi",'sprite');
console.log(drinks);

drinks.shift();
console.log(drinks);

console.log(drinks.slice(1,4));

let A =[34,56,88,43,65];
A.splice(1,2,45,67,80);
console.log(A);

// Q3
let company = ['Bloomberg','Microsoft','Uber','Google','IBM','Netflix'];
console.log(company);
company.shift();
console.log(company);
console.log(company.splice(1,1,"Ola"));
company.push("Amazon");
console.log(company);

