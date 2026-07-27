// import { addition as add, multiply } from "./utility.js";

import * as utility from './utility.js'
import me from './utility.js';

// const sum = add(2, 2 ,6);
// const multi = multiply(23, 10, 2);
// console.log(sum, multiply)

const s = utility.add(5, 6, 10);
const multi = utility.mul(4, 2, 10);
const myName = me("snehal");

console.log(s, multi);

console.log(utility.EMPLOYEE_COUNT);
console.log(myName)