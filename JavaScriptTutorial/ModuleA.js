// MODULES - A better way to organize our code.
// we want to load or access a variable in this file from ModulesA.js
/*
    If we want to import everything from a file we use -
    import * as obj from 'filepath';            obj is an object
*/
import {nums as myNums} from './ModulesA.js';
var nums = 56;
console.log(nums);
console.log(myNums);