function findMax(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }

    console.log("Maximum number: ", max);
}

let Sum = (arr) => {
    let s = 0;

    for(let i = 0; i < arr.length; i++){
        s += arr[i];
    }

    return s;
}

let count = function(arr){
    let c = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 1){
            c += 1;
        }
    }

    console.log("Count of odd numbers: ", c);
}

//dummy array 1
let Array = [4, 8, 2, 11, 6, 7, 10];
findMax(Array);
console.log("Sum of all elements: ", Sum(Array));
count(Array);


//dummy array 2
let Array2 = [6, 9, 11, 45, 100, 56]
findMax(Array2);
console.log("Sum of all elements: ", Sum(Array2));
count(Array2);
