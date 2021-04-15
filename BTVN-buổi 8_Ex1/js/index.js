let count = 0;
function sub() {
    let number = document.getElementById("number");
    count--;
    number.innerText = count;
}

function add() {
    let number = document.getElementById("number");
    count++;
    number.innerText = count;
}

function reset(){
    let number = document.getElementById("number");
    number.innerText = count=0;
}
console.log(1);