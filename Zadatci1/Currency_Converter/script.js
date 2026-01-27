let inp = document.querySelector("input")

document.querySelector("button").addEventListener("click",function(){
    document.getElementsByClassName("res").innerHTML = Number(parseFloat(inp.value) * 73754.24).toFixed(2)
    document.getElementsByClassName("res").innerHTML = Number(parseFloat(inp.value) * 87912.56).toFixed(2)
})