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
    clockDays = new Date().getDay();
    let day;
    if(clockDays == 0){
        day = "SA";
    }else if(clockDays == 1){
        day = "MO";
    }else if(clockDays == 2){
        day = "TU";
    }else if(clockDays == 3){
        day = "WE";
    }else if(clockDays == 4){
        day = "TH";
    }else if(clockDays == 5){
        day = "FR";
    }else{
        day = "SA";
    }
    clockDay.innerText = day;
}, 1000);   