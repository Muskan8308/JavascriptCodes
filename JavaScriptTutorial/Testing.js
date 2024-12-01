// Manual Testing - Open the website and try out the code.

// AutoMated Testing - Use or write code to test code. 

// Automated testing 
import formatCurrency from './TestingB.js';

if(formatCurrency(2025) === '20.25')
    console.log('passed');
else
    console.log('failed');

if(formatCurrency(2000.5) === '20.01')
    console.log('passed');
else
    console.log('failed');

if(formatCurrency(0) === '0.00')
    console.log('passed');
else
    console.log('failed');
