
document.querySelector("input").addEventListener("input",function(){
    document.querySelector("h3").innerHTML = "Broj slova je: " + document.querySelector("input").value.length;
})