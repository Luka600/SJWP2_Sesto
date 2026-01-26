document.querySelector("button").addEventListener("click",function(){
    let color = "#" + Math.floor(Math.random()*0xFFFFFF).toString(16);
    document.body.style.background = color;
})