// Sort()

let arr = [2,5,8,3,6,1];
console.log(arr);
// Sorting in increasing order
arr.sort();
console.log(arr);

// Sorting in decreasing order
arr.sort(function(a,b){
    return b-a;
});
console.log(arr);

// But this sort method doesn't work properly in case of neg integers

let brr = [3, 5,-5,-8,1];
console.log(brr.sort());        // Wrong sorting

brr.sort((a,b) => a-b);
console.log(brr);               // Right sorting

// Sorting on the basis of value and neglecting the sign

brr.sort((a,b) => Math.abs(a) - Math.abs(b));
console.log(brr);

// Filter()

function fun(ele)
{
    if(ele % 2 == 0) return true;
    else return false;
}

let arr1 = [4,2,7,8,3,7,9,2,1];
console.log(arr1);

arr1 = arr1.filter(fun);         // Filter out all odd numbers
console.log(arr1);      

arr1 = arr1.filter(ele => (ele < 5));
console.log(arr1);