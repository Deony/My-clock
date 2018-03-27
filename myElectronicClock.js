var hourHand = document.querySelector('.hour'),
    minuteHand = document.querySelector('.minute'),
    secondHand = document.querySelector('.second');

function setDate() {
    var now = new Date(),
        seconds = now.getSeconds(),
        minutes = now.getMinutes(),
        hours = now.getHours();

        hourHand.innerText = hours;
        if(seconds < 10) {
        	seconds = '0' + seconds;
        }
        if(minutes < 10) {
        	minutes = '0' + minutes;
        }
        if(hours < 10) {
        	hours = '0' + hours;
        }
        minuteHand.innerText = minutes;
        secondHand.innerText = seconds;

}

setInterval(setDate);