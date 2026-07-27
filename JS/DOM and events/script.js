const bodyBackground = document.body;
bodyBackground.style.backgroundColor = "lightgray";


// /******First Approach*****/
// const box4 = document.getElementById('box4')


// /******Second Approach *****/
// const div = document.getElementsByTagName('h1')
// console.log(div)

// /******3rd Approach *****/
// const boxes = document.getElementsByClassName('box');
// console.log(boxes);

// /*****Modifying HTML elements *******/

// const box1 = document.getElementById('box1');

/*****Change text with tags */
// box1.innerHTML = "<b>Snehal Dattatray Kumbhar</b>"

/***change text only ****/
// box1.innerText = "It's me"

// document.getElementById('box1').innerText = "Snehal K";
// document.getElementById('p').innerText = "I'm an artist, Content creator"

// const box1 = document.getElementById("box1")
// box1.style.backgroundColor = "lightgreen"

// const box2 = document.getElementById('box2')
// box2.classList.add('circle')

// const box3 = document.getElementById('box3')
// box3.classList.remove('circle')

// const boxes = document.getElementsByClassName('box');
// for(let i = 0; i < boxes.length; i++){
//     boxes[i].classList.add('circle');
// }

// box3.classList.remove('box')


/****** Creating a new element *******/

// 1st is to get the access
// 2nd is the constents
// 3rd is appending

// const newPara = document.createElement('p');
// newPara.innerText = "I'm learning DOM Manipulation";

// const cont = document.getElementById('content');
// cont.appendChild(newPara)

// newPara.style.color = 'white'


/***** Events ******/

/***Event Handlers 
/*** onClick, onload, onmouseover, onmouseout, onkeypress, onkeydown, onkeyup */

// function onClickFunc(){
//     console.log("The box has been clicked")
// }

// const keyPressEvent = () =>{
//     alert("The key has been clicked")
// }
 

/***** Event Handlers *****/

const box1 = document.getElementById('box1');
box1.addEventListener('click', () =>{
    console.log("Click has been triggered on box1")
})


const container = document.getElementById('content')
container.addEventListener('click', () =>{
    console.log("clicked on container")
}, false)
