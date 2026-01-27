let inp1 = document.getElementById("inp1")
let inp2 = document.getElementById("inp2")

inp1.addEventListener("input",function(){
    inp2.innerHTML = Number((parseFloat(inp1.value) * (9/5)) + 32).toFixed(2)
})

inp2.addEventListener("input",function(){
    inp1.innerHTML = Number((parseFloat(inp1.value) - 32) * (9/5)).toFixed(2)
})