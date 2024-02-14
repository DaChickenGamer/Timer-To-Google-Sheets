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

let cookies = "";

const timer = setInterval(TimerIncrement, 1000)


window.onload = LoadCookies;
window.onbeforeunload = UpdateCookies;

function LoadCookies()
{
    console.log(document.cookie)
    if(document.cookie != null){
        cookies = document.cookie;
        let cookieArray = cookies.split(";");

        let timeArray = cookieArray[0].split("=")[1].split(":");
        hours = parseInt(timeArray[0]);
        minutes = parseInt(timeArray[1]);
        seconds = parseInt(timeArray[2]);
        UpdateTimer();
    }
    else{
        ResetTime();
        UpdateTimer();
    }
}
function UpdateCookies()
{
    const d = new Date();
    let daysToExpire = 365;
    d.setTime(d.getTime() + (daysToExpire * 24*60*60*1000));
    let expires = "expires="+ d.toUTCString();

    document.cookie = "currentTime=" + GetCurrentTime() + "; " + expires;
}

function ResetCookies()
{
    document.cookie = null;
}
function GetCurrentTime()
{
    return FormatTime(hours, minutes, seconds);
}
function UpdateTimer()
{
    timerText.innerText = FormatTime(hours, minutes, seconds);
}
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
    UpdateCookies();
    timerStarted = false;
}
function ResetTime()
{
    seconds = 0;
    minutes = 0;
    hours = 0;

    secondsText = "0" + seconds.toString();
    minutesText = "0" + minutes.toString();
    hoursText = "0" + hours.toString();
}
function ClearTimer()
{
    ResetCookies();
    timeStorage[currentRecord] = FormatTime(hours, minutes, seconds);
    currentRecord += 1;
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
