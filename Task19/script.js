const services =[
    {
        name:"cloth cleaning",
        price:500,
        image:"images/cleaning.jpg"
    },
    {
        name:"cloth folding",
        price: 350,
        image:"images/clothFold.jpg"
    },
    {
        name:"cloth pick-up",
        price: 200,
        image:"images/clothFold.jpg"
    },
    {
        name:"cloth pressing",
        price: 150,
        image:"images/clothFold.jpg"
    },

];

console.log(services)

let currentIndex = 0;
let totalAmount = 0;
const cart = [];

function displayService(){
    document.querySelector(".service-name").textContent = services[currentIndex].name;

    document.querySelector(".price").textContent = `${services[currentIndex].price}`;

    document.querySelector(".service-img").src=services[currentIndex].image;
}

document.querySelector(".add").addEventListener("click", ()=>{
    cart.push(services[currentIndex]);
    totalAmount += services[currentIndex].price;
    updateTable();
    nextService();
})

document.querySelector(".skip").addEventListener("click", ()=>{
    nextService();
})

function nextService(){
    currentIndex++;
    if(currentIndex < services.length){
        displayService();
    }
    else{
        document.querySelector(".service-card").innerHTML =
         "<h2>All Services Viewed</h2>";
    }
}

function updateTable(){

    const tbody = document.querySelector("tbody");

    tbody.innerHTML = "";
    cart.forEach((service, index) =>{
        tbody.innerHTML += `
        <tr>
            <td>${index+1}</td>
             <td>${service.name}</td>
              <td>${service.price}</td>
        </tr>
        `;
    })

    document.querySelector(".total-amount").textContent = `Total amount: ${totalAmount}`;
}
