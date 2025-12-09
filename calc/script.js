let res = document.getElementById("result");

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");


let num3;
function addition(){
    
    res.innerHTML = Number(parseInt(num1.value)) + parseInt(num2.value)
}

function subtraction(){
 
    res.innerHTML = Number(parseInt(num1.value)) - parseInt(num2.value);
}

function multiplication(){
  
    res.innerHTML = Number(parseInt(num1.value)) * parseInt(num2.value);
}

function division(){
    
    res.innerHTML = Number(parseInt(num1.value)) / parseInt(num2.value);
}

function clear(){
    res.innerHTML = null;
    num1.value = null;
    num2.value = null;
}