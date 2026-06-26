export function sumOfN(n){
    let sum = 0;
    for(let i = 0; i<= n; i++){
        sum += i;
    }
    return "The sum of first "+n+" numbers is "+sum;
}

export function table(n){
    for(let i = 0; i<= 10; i++){
        console.log(n +" * "+ i + " = " + n*i);
    }
}

export function isPrime(n){
    let x = 2;
    while(x*x <= n){
        if(n % x == 0){
            return "Is it a prime number? No";
        }
        x += 1;
    }
    return "Prime";return "Is it a prime number? Yes";
}

export function factors(n){
    let x = 1;

    let result = "";
    while(x <= n){
        if(n % x == 0){
            result += x +" ";
        }
        x+= 1;
    }
    console.log("Factors: "+ result);
}

export function sumOfDigits(n){
    let sum = 0;
    while(n > 0){
        let digit = n % 10;
        sum += digit;
        n = parseInt(n / 10);
    }

    return "Sum of its digits: "+ sum;
}

export function isArmstrong(n){
    let original = n;
    let prod = 1;

    while(n > 0){
        let digit = n % 10;
        prod *= digit;
        n /= 10;
    }

    if(prod == original){
        return "Is it an Armstrong number? Yes";
    }else{
        return "Is it an Armstrong number? No"; 
    }
}
