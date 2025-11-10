let ranNum1 = Math.floor(Math.random()*6) + 1; 
let ranImgSrc1 = "./images/dice" + ranNum1 + ".png";

let ranNum2 = Math.floor(Math.random()*6) + 1;
let ranImgSrc2 = "./images/dice" + ranNum2 + ".png";

let ranNum3 = Math.floor(Math.random()*6) + 1; 
let ranImgSrc3 = "./images/dice" + ranNum3 + ".png";

let ranNum4 = Math.floor(Math.random()*6) + 1;
let ranImgSrc4 = "./images/dice" + ranNum4 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", ranImgSrc1);
document.querySelectorAll("img")[1].setAttribute("src", ranImgSrc3);
document.querySelectorAll("img")[2].setAttribute("src", ranImgSrc2);
document.querySelectorAll("img")[3].setAttribute("src", ranImgSrc4);


if((ranNum1 + ranNum3) > (ranNum2 + ranNum4)){
document.querySelector("h1").innerHTML = "Player 1 wins!"
}else if((ranNum1 + ranNum3) < (ranNum2 + ranNum4)){
document.querySelector("h1").innerHTML = "Player 2 wins!"
}else{
document.querySelector("h1").innerHTML = "Tie!"
}

let zb1 = ranNum1 + ranNum3;
let zb2 = ranNum2 + ranNum4;

 document.querySelector(".rez1").innerHTML ="Zbroj: " + zb1;
document.querySelector(".rez2").innerHTML ="Zbroj: " + zb2; 

