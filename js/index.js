function insert(num) {
    var insert = document.getElementById("result").innerHTML += num
   if(insert.length >=21) {
       document.getElementById("result").innerHTML = num
   }
}

function erase(num) {
    document.getElementById("result").innerHTML = ""
}

function back() {
    var backspace = document.getElementById("result").innerHTML
    document.getElementById("result").innerHTML = backspace.substring(0, backspace.length - 1)
}

function calculate() {
    var calculate = document.getElementById("result").innerHTML
    if(calculate) {
        document.getElementById("result").innerHTML = eval(calculate)
    }
}