
let num = document.getElementById("no").value;
let nearest = document.getElementById("num").value;
let result = document.getElementById("result")
console.log(num);
function re() {
    if (num < nearest) {
        result.value = nearest;
    } else {
        result.value = Math.round(num / nearest) * nearest;
    }
    
}

// btn = document.getElementsByClassName("btn");
// document.getElementById("btn").addEventListener("click", re);