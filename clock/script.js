function clock(){

    var DT = new Date();
    document.querySelector("h1").innerHTML = DT.getHours().toString() + ":" + DT.getMinutes().toString();
    document.reload();
}
setInterval(clock(),1000)