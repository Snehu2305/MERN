function summation(r, k){
    const result = r + k;
    console.log("Result: ", result);
}

summation(20, 30);

function greet(userName){
    console.log("Hey! Welcome to our appln ", userName)
}

greet("Snehal")


//Anonymous func / func expression

let sum = function (r, k){
    const result = r+k;
    return result;
}
console.log(sum(23, 67));


//nested functions

let mul = 1

function addSquares(x, y){
    let res = 0;
    function square(num){
        return num * num;
    }
    return res = square(x) + square(y);
}
console.log(addSquares(4, 5))

//Arrow Functions

const greetings = () =>{
    console.log("Hello Everyone!");
}
greetings()

const doSum = (a, b) =>{
    console.log("The sum is: ", a+b);
}

doSum(23, 87);

//const square = (num) => {
//     return num * num;
// }

//OR

const square =(num) => num * num;
console.log(square(8))


//Callback Functions

const calculate = (a, b, operation) =>{
    return operation(a, b);
}

const summation1 = calculate(2, 3, function(n1, n2){
    return n1+n2;
})

console.log(summation1);

const subtraction = calculate(2, 3, function(n1, n2){
    return n1 - n2;
})
console.log(subtraction)

const mul1 = (a, b) => a * b
console.log(calculate(12, 3, mul1));

//example - array


const arr = [2, 5, 6, 8, 9, 0, -3, -6, 10]

//method - 1
const printFirstNegNumber  = (num) => num < 0;

//method - 2
const printFirstNeg = (num) => {
    return num <  0;
}

//method - 3
const printFirstNegative = (num) =>{
    if(num < 0){
        return num;
    }
}

const result = arr.find(printFirstNegNumber)
console.log(result)



