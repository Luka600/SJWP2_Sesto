let ranNum1 = Math.floor(Math.random()*6) + 1; 
let ranImgSrc1 = "./images/dice" + ranNum1 + ".png";

let ranNum2 = Math.floor(Math.random()*6) + 1;
let ranImgSrc2 = "./images/dice" + ranNum2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", ranImgSrc1);
document.querySelectorAll("img")[1].setAttribute("src", ranImgSrc2);

if(ranImgSrc1 > ranImgSrc2){
document.querySelector("h1").innerHTML = "Player 1 wins!"
}else if(ranImgSrc1 < ranImgSrc2){
document.querySelector("h1").innerHTML = "Player 2 wins!"
}else{
document.querySelector("h1").innerHTML = "Tie!"
}