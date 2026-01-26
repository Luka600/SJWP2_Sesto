document.querySelector("button").addEventListener("Click",function(){
    document.getElementsByClassName("result")[0].innerHTML = (Number(parseFloat(document.getElementById(inp2).value) / ((parseFloat(document.getElementById(inp1).value)) * (parseFloat(document.getElementById(inp1).value))))).toFixed(2)
})