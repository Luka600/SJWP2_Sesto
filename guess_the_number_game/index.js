function randNumb(){
return Math.floor(Math.random()*100) + 1;
}

let inp = document.getElementById("guess");
let msg = document.getElementById("msg");
let tries = document.getElementById("tries");

let ranNum = randNumb();
let tri = 0;

function updateTries(){
    tries.innerHTML = "Attempts: " + tri;
}
updateTries()

function checkNumber(event){
    event.preventDefault();

    let value = parseInt(inp.value);
    
    
}

function newGame(){
    location.reload();
}