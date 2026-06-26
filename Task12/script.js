let P = 10000;
let r = 0.10; 
let n = 2;
let t = 5;

const A = P*(1+(r/n))**(n*t);

console.log("The compound interest after 5 years is: ", A);
