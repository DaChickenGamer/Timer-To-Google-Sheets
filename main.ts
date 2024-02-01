const timerText = document.getElementById("timer");

let spreedsheetID = "";
let googleSheetsApikey = "";

let timerStarted = false;

let seconds = 0;
let minutes = 0;
let hours = 0;

let secondsText = "";
let minutesText = "";
let hoursText = "";

let timeStorage = {};
let currentRecord = 0;

const timer = setInterval(TimerIncrement, 1000)

function FormatTime(hours, minutes, seconds)
{
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

    return hoursText + ":" + minutesText + ":" + secondsText;
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
    timeStorage[currentRecord] = FormatTime(hours, minutes, seconds);
    currentRecord += 1;

    seconds = 0;
    minutes = 0;
    hours = 0;

    secondsText = "0" + seconds.toString();
    minutesText = "0" + minutes.toString();
    hoursText = "0" + hours.toString();

    timerText.innerText = hoursText + ":" + minutesText + ":" + secondsText;
}
function PrintData()
{
    if (document.getElementById("printedData"))
    {
        document.getElementById("printedData").remove();
    }

    const displayInfoBody = document.createElement("div")
    displayInfoBody.setAttribute("id", "printedData")
    document.body.appendChild(displayInfoBody);
    for (let timeStorageKey in timeStorage) {
        const displayInfoText = document.createElement("h3");
        displayInfoText.innerText = "[" + timeStorageKey + "]" + ": " + timeStorage[timeStorageKey];
        displayInfoBody.appendChild(displayInfoText);
    }

}

function TimerIncrement()
{
    if (timerStarted == false)
        return;
    seconds += 1;

    if (seconds > 59)
    {
        seconds -= 60;
        minutes += 1;
    }
    if (minutes > 59)
    {
        minutes -= 60;
        hours += 1;
    }

    timerText.innerText = FormatTime(hours, minutes, seconds);
}

function UpdateSpreadSheet()
{

}
