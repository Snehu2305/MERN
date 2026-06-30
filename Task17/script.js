const divideNumber = ((num1, num2) => {
     return new Promise((resolve, reject) => {
        if(num2 == 0){
            reject (new Error("Can't divide by zero.."));
            reject;
        }
        const ans = num1 / num2;
        resolve(ans);
     })
});

divideNumber(25, 5)
.then((ans) => {
    console.log("dividing 25 by 5")
    console.log("The answer is: ", ans)
}).catch((err) => {
    console.log(err.message)
})

divideNumber(10, 5)
.then((ans) => {
    console.log("dividing 10 by 5")
    console.log("The answer is: ", ans)
}).catch((err) => {
    console.log(err.message)
})

divideNumber(84, 12)
.then((ans) => {
     console.log("dividing 84 by 12")
    console.log("The answer is: ", ans)
}).catch((err) => {
    console.log(err.message)
})

divideNumber(120, 12)
.then((ans) => {
     console.log("dividing 84 by 12")
    console.log("The answer is: ", ans)
}).catch((err) => {
    console.log(err.message)
})

divideNumber(900, 9)
.then((ans) => {
     console.log("dividing 84 by 12")
    console.log("The answer is: ", ans)
}).catch((err) => {
    console.log(err.message)
})

divideNumber(10, 0)
.then((ans) => {
    console.log("The answer is: ", ans)
}).catch((err) => {
    console.log("dividing 10 by 0")
    console.log(err.message)
})
