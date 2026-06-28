const students = [
    { studentName: "Snehal Kumbhar", marks: 88, class: "10A", address: "Kolhapur" },
    { studentName: "Aarav Patil", marks: 85, class: "10B", address: "Mumbai" },
    { studentName: "Sneha Deshmukh", marks: 92, class: "10C", address: "Pune" },
    { studentName: "Rohan Jadhav", marks: 67, class: "10A", address: "Kolhapur" },
    { studentName: "Priya Shinde", marks: 78, class: "10B", address: "Nagpur" },
    { studentName: "Karan Chavan", marks: 55, class: "10C", address: "Nashik" },
    { studentName: "Ananya More", marks: 96, class: "10A", address: "Thane" },
    { studentName: "Vikram Pawar", marks: 73, class: "10B", address: "Satara" },
    { studentName: "Meera Kadam", marks: 88, class: "10C", address: "Sangli" },
    { studentName: "Rahul Mane", marks: 61, class: "10A", address: "Solapur" },
    { studentName: "Pooja Salunkhe", marks: 81, class: "10B", address: "Pune" },
    { studentName: "Aditya Mohite", marks: 90, class: "10C", address: "Mumbai" },
    { studentName: "Neha Gawade", marks: 72, class: "10A", address: "Kolhapur" },
    { studentName: "Sagar Nalawade", marks: 58, class: "10B", address: "Nagpur" },
    { studentName: "Aditi Patankar", marks: 94, class: "10C", address: "Thane" },
    { studentName: "Yash Jagtap", marks: 76, class: "10A", address: "Satara" },
    { studentName: "Komal Khot", marks: 69, class: "10B", address: "Sangli" },
    { studentName: "Om Bhosale", marks: 83, class: "10C", address: "Pune" },
    { studentName: "Tanvi Powar", marks: 91, class: "10A", address: "Mumbai" },
    { studentName: "Atharva Patil", marks: 64, class: "10B", address: "Nashik" },
    { studentName: "Rutuja Gurav", marks: 87, class: "10C", address: "Kolhapur" },
    { studentName: "Soham Koli", marks: 79, class: "10A", address: "Solapur" },
    { studentName: "Isha Kamble", marks: 95, class: "10B", address: "Pune" },
    { studentName: "Tejas Dhotre", marks: 62, class: "10C", address: "Nagpur" },
    { studentName: "Shruti Sawant", marks: 84, class: "10A", address: "Thane" },
    { studentName: "Nikhil Wagh", marks: 71, class: "10B", address: "Satara" },
    { studentName: "Vaishnavi Shingade", marks: 89, class: "10C", address: "Mumbai" },
    { studentName: "Akash Thorat", marks: 53, class: "10A", address: "Sangli" },
    { studentName: "Mitali Bhagat", marks: 97, class: "10B", address: "Kolhapur" },
    { studentName: "Pratik Dange", marks: 75, class: "10C", address: "Nashik" }
];

const container = document.getElementById("student-container");

students.forEach(student => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = 
     `
     <h3>${student.studentName}</h3>
     <p>Marks: ${student.marks}</p>
     <p>Class: ${student.class}</p>
     <p>City: ${student.address}</p>
     <br>
     `;
     container.appendChild(card);
})

const inp = document.getElementById("input");


function displayStudents(data){
    container.innerHTML = "";

    data.forEach(student =>{
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
        <h3>${student.studentName}</h3>
        <p>Marks: ${student.marks}</p>
        <p>Class: ${student.class}</p>
        <p>City: ${student.address}</p>
        `

        container.appendChild(card);
    })
}

displayStudents(students);

const btn = document.getElementById("find");

btn.addEventListener("click", ()=>{
    const searchValue = inp.value.toLowerCase();
    
    const filteredStudents = students.filter(student =>{
       const v = student.studentName.split(" ")[0];
       return v.toLowerCase().startsWith(searchValue)
});

    displayStudents(filteredStudents);
});

