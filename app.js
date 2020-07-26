window.onload = function () {

    var hours = 00;
    var minutes = 00;
    var seconds = 00;
    var tens = 00;
    var clockHours = document.getElementById("hours");
    var clockMinutes = document.getElementById("minutes");
    var clockSeconds = document.getElementById("seconds");
    var clockTens = document.getElementById("tens");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset =document.getElementById("button-reset");
    var Interval;

    clockTens.style.display = "none";

    buttonStart.onclick = function () {

        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function () {
        clearInterval(Interval);
    }

    buttonReset.onclick = function () {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        minutes = "00";
        hours = "00";
        clockHours.innerHTML = hours;
        clockMinutes.innerHTML =  minutes;
        clockSeconds.innerHTML = seconds;
        clockTens.innerHTML = tens;
    }

    function startTimer () {
        tens++;

        if(tens < 9){
            clockTens.innerHTML = " 0" + tens;
        }

        if(tens > 9){
            clockTens.innerHTML = tens;
        }

        if(tens > 99) {
            console.log("seconds");
            seconds++;
            clockSeconds.innerHTML = "0" + seconds;
            tens = 0;
            clockTens.innerHTML = "0" + 0;
        }

        if(seconds > 9) {
            clockSeconds.innerHTML = seconds;
        }

        if(seconds > 59) {
            console.log("minutes");
            minutes++;
            clockMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            clockSeconds.innerHTML = "0" + 0;
        }

        if(minutes > 9) {
            clockMinutes.innerHTML = minutes;
        }

        if(minutes > 59) {
            console.log("hours");
            hours++;
            clockHours.innerHTML = "0" + hours;
            minutes = 0;
            clockMinutes.innerHTML = 00;
        }

        if(hours > 9) {
            clockHours.innerHTML = hours;
        }
    }

}