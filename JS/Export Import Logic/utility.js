// export function addition(a, b, c){
//     return a + b + c;
// }

// export function multiply(a, b, c){
//     return a * b * c;
// }

function addition(a, b, c){
    return a+b+c;
}

function multiply(a, b, c){
    return a * b * c;
}

export{
    addition as add,
    multiply as mul
}

export const EMPLOYEE_COUNT = 25;

export default function me (a){
    return "Hello I'm "+ a;
}