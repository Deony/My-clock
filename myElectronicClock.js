var hourHand = document.querySelector('.hour'),
    minuteHand = document.querySelector('.minute'),
    secondHand = document.querySelector('.second'),
    alarmSign = document.querySelector('.alarmSign'),
    setAlarmTime = document.querySelector('.setAlarmTime'),
    timeAlarmHour = document.querySelector('.timeAlarmHour'),
    timeAlarmMinute = document.querySelector('.timeAlarmMinute'),
    myAudio = new Audio();
    myAudio.src = 'Ofenbach_-_Katchi.mp3',
    timeEndAlarm = 20;    

alarmSign.addEventListener('click', function(){setAlarm()}, false);
alarmSign.addEventListener('dblclick', function(){deactivateAlarm()}, false);

function setAlarm() {
    alarmSign.style.opacity = 1;
    setAlarmTime.style.display = 'block';
    timeAlarmHour.style.display = 'block';
    timeAlarmMinute.style.display = 'block';
}

function deactivateAlarm() {
    alarmSign.style.opacity = 0.4;
    setAlarmTime.style.display = 'none';
    timeAlarmHour.style.display = 'none';
    timeAlarmMinute.style.display = 'none';
}

function setDate() {
    var now = new Date(),
        seconds = now.getSeconds(),
        minutes = now.getMinutes(),
        hours = now.getHours();

        
        if(seconds < 10) {
        	seconds = '0' + seconds;
        }
        if(minutes < 10) {
        	minutes = '0' + minutes;
        }
        if(hours < 10) {
        	hours = '0' + hours;
        }

        hourHand.innerText = hours;
        minuteHand.innerText = minutes;
        secondHand.innerText = seconds;

        if(timeAlarmHour.value==hours && timeAlarmMinute.value==minutes){
            audioLoad();
            var setTime = setTimeout(function() {              
                    myAudio.pause();
                }, 5000);
        }

}

function audioLoad() {
    myAudio.play();
}

setInterval(setDate);