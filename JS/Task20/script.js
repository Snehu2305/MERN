emailjs.init("8MmCXRvW-elKxKwWd");


const table = document.querySelector('.priceTable')
const bookNow = document.getElementById('bookNow');
const form = document.querySelector('.form');

const subscribe = document.getElementById("subscribe")
const fullName = document.getElementById("full-name")
const subscription = document.querySelector(".subscriptionMain")
const subscribeEmail = document.getElementById("SubscribeEmail")

const total = document.querySelector('.total')
const amount = document.querySelector('.Amount')
const items = document.querySelector(".items")

const add1 = document.getElementById("add1")
const add2 = document.getElementById("add2")
const add3 = document.getElementById("add3")
const add4 = document.getElementById("add4")
const add5 = document.getElementById("add5")
const add6 = document.getElementById("add6")

let cart = [];
let totalValue = 0
const remove = "remove item ➖"
const add = "Add item ➕"

bookNow.addEventListener('click', () => {

    if(cart.length === 0){
        alert("Add items to the cart first");
        return;
    }

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if(name.trim() === "" || email.trim() === ""){
        alert("Please fill all fields");
        return;
    }

    const services =
        cart.map(item => item.name).join(", ");

    // Email to Admin
    emailjs.send(
        "service_ew0tu7v",
        "template_e1i93xi",
        {
            customer_name: name,
            customer_email: email,
            services: services,
            total: totalValue
        }
    )

    // Email to Customer
    .then(() => {

        return emailjs.send(
            "service_ew0tu7v",
            "template_cs97drj",
            {
                customer_name: name,
                customer_email: email,
                services: services,
                total: totalValue
            }
        );

    })

    // Success
    .then(() => {

        alert("Booking Successful!");

        let message =
            document.getElementById("bookingMessage");

        if(!message){
            message = document.createElement("p");
            message.id = "bookingMessage";
            form.appendChild(message);
        }

        message.innerText =
            "Thank you for booking the service. We will get back to you soon!";
        message.style.color = "green";

        // Optional: Clear form
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";

    })

    // Error
    .catch((error) => {

        console.error(error);
        alert("Failed to send email");

    });

});

add1.addEventListener('click', () =>{
   const serviceName = document.querySelector('.title')
   const rate = document.querySelector('.price')

    if(add1.innerText === add){
        add1.innerText = remove;
        updateTable(serviceName, rate)
    }
    else{
         add1.innerText = add;
         removeItem(serviceName, rate, add1)
    }
})

add2.addEventListener('click', () =>{
   
    const rate = document.querySelector('.price1')
    const serviceName = document.querySelector('.title1')
    
    if(add2.innerText === add){
        add2.innerText = remove;
        updateTable(serviceName, rate)
    }
    else{
         add2.innerText = add;
         removeItem(serviceName, rate, add2)
    }

})

add3.addEventListener('click', () =>{
    
    const serviceName = document.querySelector('.title2')
    const rate = document.querySelector('.price2')

    if(add3.innerText === add){
        add3.innerText = remove;
        updateTable(serviceName, rate)
    }
    else{
         add3.innerText = add;
         removeItem(serviceName, rate, add3)
    }
    
     
})

add4.addEventListener('click', () =>{
    
   const serviceName = document.querySelector('.title3')
   const rate = document.querySelector('.price3')
     
   if(add4.innerText === add){
        add4.innerText = remove;
        updateTable(serviceName, rate)
    }
    else{
         add4.innerText = add;
         removeItem(serviceName, rate, add4)
    }
    
})

add5.addEventListener('click', () =>{
   
    const serviceName = document.querySelector('.title4')
    const rate = document.querySelector('.price4')
    
    if(add5.innerText === add){
        add5.innerText = remove;
        updateTable(serviceName, rate)
    }
    else{
         add5.innerText = add;
         removeItem(serviceName, rate, add5)
    }

})

add6.addEventListener('click', () =>{
    
     const serviceName = document.querySelector('.title5')
     const rate = document.querySelector('.price5')

     if(add6.innerText === add){
        add6.innerText = remove;
        updateTable(serviceName, rate)
    }
    else{
         add6.innerText = add;
         removeItem(serviceName, rate, add6)
    }
    
    

})

function updateTable(serviceName, rate){
     const services = {
        name: serviceName.innerText,
        price:rate.innerText
     }

     cart.push(services)

    const tbody = document.querySelector('.tbody');

    if(cart.length === 1){
        tbody.innerHTML = "";
    }

    const service = cart[cart.length - 1];


    renderTable()


    const value = Number(rate.innerText.replace("₹", " "));
    totalValue += value;
    amount.innerText = totalValue;
}


function removeItem(serviceName, rate, button){

     let index = cart.findIndex(
        obj => obj.name === serviceName.innerText
    );

     if(index !== -1){
        cart.splice(index, 1);
     }

     renderTable()

     const row = document.querySelector(
        `[data-service="${serviceName.innerText}"]`
     )

     if(row){
        row.remove();
     }
    

    const value = Number(rate.innerText.replace("₹", " "));
    totalValue -= value;
    amount.innerText = totalValue;

}


function renderTable(){
    const tbody = document.querySelector(".tbody")

    tbody.innerHTML = "";

    cart.forEach((service, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${service.name}</td>
                <td>${service.price}</td>
            </tr>        
        `
    });
}


subscribe.addEventListener("click", ()=>{



let message = document.getElementById("subscribeMessage");

if(!message){
    message = document.createElement("p");
    message.id = "subscribeMessage";
    subscription.appendChild(message);
}

if(subscribeEmail.value.trim() === ""){
    message.innerText = "Please Enter your Email";
    message.style.color = "red";
}
else{
    message.innerText = "Thank you for subscribing!";
    message.style.color = "lightgreen";
}

})