const timer = document.querySelector("h2#timer");

function getTimer() {
    const date = new Date();
    const christmas = new Date("2021-12-25,00:00:00");
    const timeLeft = (christmas.getTime() - date.getTime())/1000;
    const sec = String(Math.floor(timeLeft)%60).padStart(2, "0");
    const min = String(Math.floor(timeLeft/60)%60).padStart(2, "0");
    const hour = String(Math.floor(timeLeft/(60*60))%24).padStart(2, "0");
    const day = String(Math.floor(timeLeft/(60*60*24)));
    clock.innerText = `${day}d ${hour}h ${min}m ${sec}s`;
}

getTimer();
setInterval(getTimer, 1000);