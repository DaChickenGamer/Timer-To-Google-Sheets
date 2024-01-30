const timerText = document.getElementById("timer");

let timerStarted = false;

let seconds = 0;
let minutes = 0;
let hours = 0;

let secondsText = "";
let minutesText = "";
let hoursText = "";

const timer = setInterval(TimerIncrement, 1000)

function TimeToString(hours, minutes, seconds)
{
    return hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();
}
function StartTimer()
{
    timerStarted = true;
}
function StopTimer()
{
    timerStarted = false;
}
function ClearTimer()
{
    seconds = 0;
    minutes = 0;
    hours = 0;

    secondsText = "0" + seconds.toString();
    minutesText = "0" + minutes.toString();
    hoursText = "0" + hours.toString();

    timerText.innerText = hoursText + ":" + minutesText + ":" + secondsText;
}

function TimerIncrement()
{
    if (timerStarted == false)
        return;
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