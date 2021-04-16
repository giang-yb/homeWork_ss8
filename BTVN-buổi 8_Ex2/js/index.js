let timer;
let myTime = document.getElementById("time");
let count;

function startTime() {
    timer = setInterval(start, 1000);
    document.getElementById("show").innerHTML = myTime.value;
    count = myTime.value;
    document.getElementById("btn").disabled = true;
}

function start(){
    count--;
    document.getElementById("show").innerHTML = count;
    if(count == -1){
        stoP();
        document.getElementById("show").innerHTML = "0";
    }
}

function stoP(){
    clearInterval(timer);
    document.getElementById("show").innerHTML = "Stopped!";
}

function reSet(){
    clearInterval(timer);
    document.getElementById("show").innerHTML = "--";
}