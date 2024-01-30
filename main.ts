const timerText = document.getElementById("timer");

let seconds = 0;
let minutes = 0;
let hours = 0;

let secondsText = "";
let minutesText = "";
let hoursText = "";

setInterval(TimerIncrement, 1000)

function TimerIncrement()
{
    seconds += 1;

    if(seconds > 59)
    {
        seconds -= 60;
        minutes += 1;
    }
    if(minutes > 59)
    {
        minutes -= 60;
        hours += 1;
    }
    if(seconds < 10)
        secondsText = "0" + seconds.toString();
    else
        secondsText = seconds.toString();
    if(minutes < 10)
        minutesText = "0" + minutes.toString();
    else
        minutesText = minutes.toString();
    if(hours < 10)
        hoursText = "0" + hours.toString();
    else
        hoursText = hours.toString();

    timerText.innerText = hoursText + ":" + minutesText + ":" + secondsText;
}