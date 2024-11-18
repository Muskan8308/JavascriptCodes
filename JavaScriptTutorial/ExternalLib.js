// EXTERNAL LIBRARY : The code which is outside of the code.
// Other developers has upload or put their code in the internet if we want to access or use their code so we have to get that code into our code and that uploaded codes on internet is known as External libraries.

import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';              // This is the ESM version of external library

// Following is the different syntax called as default export. This is the ESM version of external library syntax of importing.
// This syntax is used when we want to export only one thing. 

import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';       // This is the ESM version of external library

// Here is the default export example similar to ESM version .
// export default demo;


hello();
console.log(dayjs());

const today = dayjs();                              // add(param1, param2)
const deliveryDate = today.add(7, 'days');          // we have add() inside dayjs library which adds param1(number) to our today's date and second param represents the length of the date
console.log(deliveryDate);
console.log(deliveryDate.format('dddd, MMMM D'));

