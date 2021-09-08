let colorChange=document.getElementById("colorChange");

let ToggleBackground=document.getElementById("ToggleBackground");
let ToggleBackgroundButton=document.getElementById("toggleBackgroundButton");
let printNumber=document.getElementById("printNumber");
let number=document.getElementById("number");
const ToggleColor=()=>{
    console.log(colorChange);
    colorChange.style.color="red";
}

function BackgroundChange() {
    ToggleBackground.style.backgroundColor="cyan";
}

ToggleBackgroundButton.addEventListener("click",BackgroundChange);

function printNumbers() {
    let k="";
    for(let i=1;i<=10;i++){
        k+=i+" ";
    }
    number.textContent=k;
}

printNumber.addEventListener("click",printNumbers);