const timerText = document.getElementById("timer");

let seconds = 0;
let minutes = 0;
let hours = 0;

setInterval(TimerIncrement, 1000)

function TimerIncrement()
{
    seconds += 1;

    if(seconds > 60)
        minutes += 1;
    if(minutes > 60)
        hours += 1;

    timerText.innerText = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();
}