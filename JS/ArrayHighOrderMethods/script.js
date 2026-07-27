// Array Methods

// Map, Filter, Find, Reduce

const ourArray = [1, 2, 3, 4, 5, 6];
console.log(ourArray);


// 1.Map

// ourArray.map(function(){ })

// const mapNewArr = ourArray.map ((data) => {
//     return data + 50;
// })

// const mapNewArr = ourArray.map((data) => data+60);

const mapNewArr = ourArray.map((data, index, arr) => data+60);

console.log(mapNewArr);

// 2.Filter

const filteredArray = ourArray.filter((data) => data < 4);
console.log(filteredArray)


// 3. Find

const findResult = ourArray.find((data) => data < 4)
console.log(findResult)


// 4. Reduce

const reducedValue = ourArray.reduce((accumalatorValue, currentValue) => {
    return accumalatorValue + currentValue;
}, 0)

console.log(reducedValue);

const cartItems = [
    {
        itemName : "iPhone 16",
        price: 100,
        quantity: 1
    },
    {
        itemName : "Laptop Bag",
        price: 30,
        quantity: 4
    },
    {
        itemName : "Water Bottle",
        price: 10,
        quantity: 2
    }
]

const totalPrice = cartItems.reduce((accValue, currValue) => {
    return accValue + currValue.price * currValue.quantity;
}, 0);

console.log("Flipcart Total Price: ", totalPrice)