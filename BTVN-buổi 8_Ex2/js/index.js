let timer;
let myTime = document.getElementById("time");
let count;

function startTime() {
    timer = setInterval(start, 1000);
    document.getElementById("show").innerHTML = myTime.value;
    count = myTime.value;
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
}