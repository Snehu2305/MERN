// console.log("First");
// console.log("Second");

// setTimeout(function(){
//     console.log("This will be executed after 3 seconds!");
// }, 3000);

// console.log("Third");



// function getCandies(){
//     setTimeout(()=>{
//         const candies = "🍭";
//         console.log("Here is your candie: ", candies);
//         return candies;
//     }, 5000);
// }

// console.log(getCandies());



function getCandies(callback){
    setTimeout(()=>{
        const candies = "🍭";
        console.log("In our getCandies method", candies);
        callback(candies)
        // return candies;
    }, 5000);
}

function handOverKeys(candies, callback2){
    setTimeout(() =>{
        const keys = candies + "🗝️";
        console.log("In our handOverKeys method", keys);
        callback2(keys)
    }, 3000);
}

function onboarding(keys, callback3){
    setTimeout(() => {
        const onboarded = keys + "🏙️";
        console.log("In our onboarding method", onboarded);
        callback3(onboarded);
    }, 3000);
}


//callback hell
getCandies((candies) =>{
    handOverKeys(candies, (keys) =>{
        onboarding(keys, (onboarded) =>{
            console.log("Welcome to our restaurant", onboarded);
        })
    })
})

// getCandies((candies) =>{
//     handOverKeys(candies, (keys) =>{
//         console.log("Here is your key", keys);
//     })
// })

// getCandies((candies) =>{
//     console.log("Here is your candy ", candies)
// })







