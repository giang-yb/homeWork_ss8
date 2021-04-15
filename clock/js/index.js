setInterval(() => {
    let clockSecond = document.getElementById("seconds");
    clockSecond.innerText = new Date().getSeconds();
}, 1000);

setInterval(() => {
    let clockMin = document.getElementById("minutes");
    clockMin.innerText = new Date().getMinutes();
}, 1000);

setInterval(() => {
    let clockHou = document.getElementById("hours");
    clockHou.innerText = new Date().getHours();
}, 1000);

setInterval(() => {
    let clockDay = document.getElementById("days");
    clockDay.innerText = new Date().getDay();
    if(clockDay.innerText == 0){
        clockDay.innerText = "SA";
    }else if(clockDay.innerText == 1){
        clockDay.innerText = "MO";
    }else if(clockDay.innerText == 2){
        clockDay.innerText = "TU";
    }else if(clockDay.innerText == 3){
        clockDay.innerText = "WE";
    }else if(clockDay.innerText == 4){
        clockDay.innerText = "TH";
    }else if(clockDay.innerText == 5){
        clockDay.innerText = "FR";
    }else{
        clockDay.innerText = "SA";
    }
}, 1000);