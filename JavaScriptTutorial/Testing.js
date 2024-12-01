// Related to TestingB.js file

// Manual Testing - Open the website and try out the code.

// AutoMated Testing - Use or write code to test code. 

// Automated testing 
import formatCurrency from './TestingB.js';

console.log("test suite : formatCurrency");

console.log("converts cents into dollars");

if(formatCurrency(2025) === '20.25')
    console.log('passed');
else
    console.log('failed');

console.log("rounds upto the nearest cent ");
if(formatCurrency(2000.5) === '20.01')
    console.log('passed');
else
    console.log('failed');

console.log("Works with 0");
if(formatCurrency(0) === '0.00')
    console.log('passed');
else
    console.log('failed');
