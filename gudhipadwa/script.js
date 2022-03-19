const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsE1 = document.getElementById('mins');
const secondsE1 = document.getElementById('seconds');


const newYear = "2 apr 2022"
function countdown() {
    const newYeardate = new Date(newYear);
    const currentdate = new Date();
    const totalseconds = (newYeardate - currentdate) / 1000;
    
    const days = Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds/3600)%24;
    const mins = Math.floor(totalseconds/60)%60;
    const seconds = Math.floor(totalseconds)%60;

    daysE1.innerHTML = formatTime (days);
    hoursE1.innerHTML = formatTime (hours);
    minsE1.innerHTML = formatTime (mins);
    secondsE1.innerHTML = formatTime (seconds);
    // <button onclick="location.href = 'www.yoursite.com';" id="myButton" class="float-left submit-button" >Home</button>

}
function formatTime (time) {
    return time < 10 ? (`0${time}`) : time;
}
countdown();
setInterval(countdown,1000)

function diwali() {
    window.location.href = "../diwali/diwali.html";
}
function dasara() {
    window.location.href = "../dasara/dasara.html";
}
function chrismus() {
    window.location.href = "../chrismus/chrismus.html";
    
}
function gudhipadwa() {
    window.location.href = "../index.html";
}
function ramjan() {
    window.location.href = "../ramjan/ramjan.html";
}

