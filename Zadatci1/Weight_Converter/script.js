let inp = document.querySelector("input")

document.querySelector("button").addEventListener("click",function(){
    document.querySelectorAll("p")[0].innerHTML = Number(parseFloat(inp.value) * 2.205).toFixed(2)
    document.querySelectorAll("p")[1].innerHTML = Number(parseFloat(inp.value) * 35.274).toFixed(2)
    document.querySelectorAll("p")[2].innerHTML = Number(parseFloat(inp.value) * 1000).toFixed(2)
})