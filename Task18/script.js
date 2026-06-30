const hello = document.getElementById("p");

const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const yellow = document.getElementById("yellow");


const inputText = document.getElementById("in");
const btn = document.getElementById("greet");


red.addEventListener("click", ()=>{
    red.style.backgroundColor = "red";
})

blue.addEventListener("click", ()=>{
    blue.style.backgroundColor = "blue";
})

green.addEventListener("click", ()=>{
    green.style.backgroundColor = "green";
})

yellow.addEventListener("click", ()=>{
    yellow.style.backgroundColor = "yellow";
})


btn.addEventListener("click", () =>{
    const input = inputText.value;
    hello.textContent = "Hello " + input + "!";
})
