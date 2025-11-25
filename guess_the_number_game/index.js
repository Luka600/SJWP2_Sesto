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
    
    if(isNaN(value) || value<1 || value>100){
        msg.innerHTML = "Unesi broj između 1 i 100";
        msg.style.color = "Crimson";
        return
    }
    if(value == ranNum){
        msg.innerHTML = "Pogodak! Broj je: " + ranNum;
        msg.style.color = "Lime";
    }else if(value < ranNum){
        msg.innerHTML = "Premalo!";
        msg.style.color = "Orange";
    }else if(value > ranNum){
        msg.innerHTML = "Preveliko!";
        msg.style.color = "Orange";
        
    }
    tri++;
    updateTries();
}

function newGame(){
    /* location.reload(); */
    ranNum = randNumb();
    tri = 0;
    updateTries();
    msg.innerHTML = "Nova igra - pokušaj ponovo!"
    msg.style.color = "Black"
    inp.focus(); 
    
}