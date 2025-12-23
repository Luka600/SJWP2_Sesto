let res1 = document.getElementById("result1")
let res2 = document.getElementById("result2")
let res3 = document.getElementById("result3")
let res4 = document.getElementById("result4")
let res5 = document.getElementById("result5")
let res6 = document.getElementById("result6")
let res7 = document.getElementById("result7")
let res8 = document.getElementById("result8")
let res9 = document.getElementById("result9")
let res10 = document.getElementById("result10")
let res11 = document.getElementById("result11")

let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let num3 = document.getElementById("num3")
let num4 = document.getElementById("num4")
let num5 = document.getElementById("num5")
let num6 = document.getElementById("num6")
let num7 = document.getElementById("num7")
let num8 = document.getElementById("num8")
let num9 = document.getElementById("num9")
let num10 = document.getElementById("num10")
let num11 = document.getElementById("num11")
let num12 = document.getElementById("num12")
let num13 = document.getElementById("num13")
let num14 = document.getElementById("num14")
let num15 = document.getElementById("num15")
let num16 = document.getElementById("num16")
let num17 = document.getElementById("num17")
let num18 = document.getElementById("num18")
let num19 = document.getElementById("num19")
let num20 = document.getElementById("num20")
let num21 = document.getElementById("num21")
let num22 = document.getElementById("num22")
let num23 = document.getElementById("num23")
let num24 = document.getElementById("num24")

let pervak =1.2566370614*Math.pow(10,-6)

function calc1(){
    res1.innerHTML = (Number(parseFloat(num2.value) / parseFloat(num1.value))).toFixed(2) + " A"
}
function calc2(){
    res2.innerHTML = (Number(parseFloat(num5.value) * (parseFloat(num4.value) / (parseFloat(num3.value) + parseFloat(num4.value))))).toFixed(2) + " V"
}
function calc3(){
    res3.innerHTML = (Number(parseFloat(num6.value) + parseFloat(num7.value))).toFixed(2) + " Ω"
}
function calc4(){
    res4.innerHTML = (Number((parseFloat(num8.value) * parseFloat(num9.value)) / (parseFloat(num8.value) + parseFloat(num9.value)))).toFixed(2) + " Ω"
}
function calc5(){
    res5.innerHTML = (Number((parseFloat(num10.value) * parseFloat(num11.value)) / (parseFloat(num10.value) + parseFloat(num11.value)))).toFixed(2) + " μF"
}
function calc6(){
    res6.innerHTML = (Number(parseFloat(num12.value) + parseFloat(num13.value))).toFixed(2) + " μF"
}
function calc7(){
    res7.innerHTML = (Number(parseFloat(num14.value) + parseFloat(num15.value))).toFixed(2) + " H"
}
function calc8(){
    res8.innerHTML = (Number((parseFloat(num16.value) * parseFloat(num17.value)) / (parseFloat(num16.value) + parseFloat(num17.value)))).toFixed(2) + " μF"
}
function calc9(){
    res9.innerHTML = (Number((parseFloat(pervak) * ((Math.pow(parseFloat(num18.value),2) * parseFloat(num19.value)) / parseFloat(num20.value)))) * parseFloat(1000000)).toFixed(2) + " μH"
}
function calc10(){
    res10.innerHTML = (Number(parseFloat(1) / (parseFloat(num21.value) * parseFloat(num22.value)))).toFixed(2) + " Ω"
}
function calc11(){
    res11.innerHTML = (Number(parseFloat(1) / (parseFloat(num23.value) * parseFloat(num24.value)))).toFixed(2) + " Ω"
}