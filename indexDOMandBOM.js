console.log("DOM and BOM....");

let documentElement = document.documentElement;
console.log(documentElement);

console.log(document);



/*🤌 Childerens */


console.log(document.body.childNodes);
// text: whitespace , dot , enter press etc.

console.log(document.body.children);

console.log(document.body.children.length);

console.log(document.body.hasChildNodes());


let colorChange = document.body.firstElementChild;

console.log(colorChange);
console.log(colorChange.firstElementChild);
colorChange.firstElementChild.style.color = "blue ";




/*🤌 Siblings */

console.log(document.body.nextSibling); // null
console.log(document.body.nextElementSibling); // null


console.log(document.body.previousSibling); // text
console.log(document.body.previousElementSibling); // head

/*🤌 DOM */
let chihye = document.getElementsByClassName("box");
console.log(chihye);

let byTagName = document.getElementsByTagName("div");
console.log(byTagName);

let byName = document.getElementsByName("choose");
console.log(byName);

let byQueryId = document.querySelector("#form");
console.log(byQueryId); // it is more faster than all

let byQueryclass = document.querySelector(".box");
console.log(byQueryclass);

let byQueryTag = document.querySelector("input");
console.log(byQueryTag);

let byQueryTagAll = document.querySelectorAll("input");
console.log(byQueryTagAll);

console.log(document.querySelector("div form input"));
console.log(document.querySelectorAll("div form input"));
console.log(document.querySelector("div form p").innerHTML);

console.log(document.querySelectorAll("div form label").innerHTML); // undefined case




/*🤌 Events in JavaScript  */

/*🤌 Click Events in JavaScript  */

// 1. st way
let btnEvent = document.getElementById("btnEvent");
btnEvent.onclick = () => {
    alert("This onclick evet function by using fat arrow");
}


// 2nd way: this way only approch top to bootom aproch , top ko overWrite karke bottom ko excute kar dega 
let btnEvent4thWay = document.querySelector("#btnEvent4thWay");
btnEvent4thWay.onclick = function () {
    alert("This onclick evet function by using Anonoymus no name");
}

// btnEvent4thWay.onclick = function() {
//     console.log
//     ("This onclick evet function by using Anonoymus no name");
// }

//3rd way: take both
let btnEvent5thWay = document.querySelector("#btnEvent5thWay");
btnEvent5thWay.addEventListener('click', () => {
    alert("Using addEventListner and Arrow Fuction")
});
const eventFunc = () => {

    console.log("Using addEventListner and Arrow Fuction")
    console.log(event);
    console.log(event.target);
    console.log(event.type);

}
btnEvent5thWay.addEventListener('click', eventFunc);


/*🤌 MouseEvent Events in JavaScript  complete*/
//mouseDown
//mouseUp
// mouseEnter
// MouseLeave



/*🤌 keyBoard Events in JavaScript */
// onKeyDown
// onKeyUp

let buttonHeadling = document.getElementById("button-handling");

const keyPress = function () {
    buttonHeadling.innerHTML = `you press "${event.key}" and its code is ${event.code}`
    buttonHeadling.style.color = "#ffffff";
    buttonHeadling.style.fontSize = "24px";
    buttonHeadling.style.marginTop = "1rem";
}



/*🤌 INPUT Events in JavaScript */
// document.addEventListener("onchange = change")
/*
const selectItems = () => {
    let inputField = document.getElementById("inputField").value;
    let selectField = document.getElementById("Vehicles").value;
    let getValues = document.getElementById("getValues");
    // console.log(inputField, selectField);
    getValues.innerHTML = `Select Vehicle is ${selectField} ${inputField}`;
}
*/
let selectField = document.getElementById("Vehicles");
selectField.addEventListener("change", () => {
    let inputField = document.getElementById("inputField").value;
    let getValues = document.getElementById("getValues");
    getValues.innerHTML = `Select Vehicle is ${selectField.value} ${inputField}`;
});




/*🤌 Timing Based Events in JavaScript */

// 1. setTimeOut  (clearTimeout)
let showName = document.querySelector("#showName");
let nameData = document.querySelector("#showNameData");
showName.style.cursor = "pointer";
showName.addEventListener('click', () => {
    nameData.innerHTML = "Loading.....❤️";
    setTimeout(() => {
        nameData.innerHTML = "Vishal Yadav";
    }, 1000)
});

// 2. setInterval (clearInterval)
let startTimer = document.getElementById("startTimer");
let stopTimer = document.getElementById("stopTimer");
let showCountdown = document.getElementById("timer-countdown");
let forClear;

let num = 0;
startTimer.addEventListener('click', () => {
    showCountdown.innerHTML = "Loading.....❤️";
    forClear = setInterval(() => {
        showCountdown.innerHTML = `${num}`;
        num++;
    }, 1000)
});
stopTimer.addEventListener('click',()=>{
    clearInterval(forClear);
    showCountdown.innerHTML = `Timer Stop at ${num}`;
    num = 0;
})
