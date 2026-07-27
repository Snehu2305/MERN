// const ticket = new Promise(function(resolve, reject){
//     const isBoarded = false;
//     if(isBoarded){
//         resolve("You are eligible to onboard")
//     }else{
//         reject("You are not eligible")
//     }
// })

// ticket.then((data) =>{
//     console.log("wohooo ", data);
// }).catch((data) =>{
//     console.log("Oh no ", data);
// }).finally(() =>{
//     console.log("This will be executed at any cost");
// })


function getCandies(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const candies = "🍭";
            // console.log("In our getCandies method", candies);
            resolve(candies);
        }, 3000);
    })
}

function handOverKeys(candies){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const keys = candies + "🗝️";
            // console.log("In our handOverKeys method", keys);
            // resolve(keys);
            reject("key not found");
        }, 3000);
    })
}

function onboarding(keys){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const onboarded = keys + "🏙️"
            // console.log("In our onboarding method", onboarded);
            resolve(onboarded);
        }, 3000)
    })
}

// getCandies()
// .then((candies) =>{
//     console.log("Here is the candy", candies);
//     return handOverKeys(candies);
// })
// .then((keys) => {
//     console.log("Here is the key", keys);
//     return onboarding(keys);
// })
// .then((onboarded) =>{
//     console.log("Welcome to our restaurant", onboarded);
// })
// .catch((err) =>{
//     console.log("error occured:", err);
// })
// .finally(() =>{
//     console.log("Happy to assist you !!");
// })





// /*********** async - await  *********///

async function onboardClient() {

    try{
    const candy = await getCandies();
    console.log("Here is the candy", candy);

    const key = await handOverKeys(candy);
    console.log("Here is your keys", key);

    const onBoard = await onboarding(key);
    console.log("Welcome to our restaurant", onBoard);
    }
    catch(error){
        console.log("Error occured: ", error);
    }

    console.log("Happy to assist you")
}


onboardClient();




