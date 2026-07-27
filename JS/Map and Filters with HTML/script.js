const Students =[
    {Id: "001", name:"Snehal Kumbhar", sport:"Cricket"},
    {Id: "002", name:"Sanchita S", sport:"Kabaddi"},
    {Id: "003", name:"Vashnavi A", sport:"Cricket"},
    {Id: "004", name:"Soham K", sport:"Wrestling"},
    {Id: "005", name:"Sneh D", sport:"Volley Ball"},
]

console.log(Students);

let filterOdd = Students.filter((data) =>{
    return data.Id % 2 !== 0
})

console.log(filterOdd)

const newArr = [];
for(let i = 0; i< Students.length; i++){
    if(Students[i].Id % 2 == 0){
        newArr.push(Students[i])
    }
}

console.log(newArr)



// getting it on UI
const names = Students
.filter((currVal) => currVal.sport === 'Cricket')
.map((data) => {

    return `<li>${data.name}</li>`;
})

console.log(names)

const div = document.getElementById('container');
div.innerHTML = `<ul>${names.join('')}</ul>`;