<script src="/scripts/script.js" type="module"></script>

let nIntervalId;

function startTimer() {

};

function stopTimer() {
clearInterval(nIntervalId)
nIntervalId = null;
};

function fiveMins() {

};

function twentyMins() {

};

function setInterval () {
    setInterval(myTickFunc, 1000);
    elapsedMs += 1000;
    if (elapsedMs >= 5000) {doReverse = true;}
};

document.getElementById("start").addEventListener("click", );
document.getElementById("stop").addEventListener("click", );

p.querySelector('#counter').textContent = `${counter}`;

function timer(){
    var sec = 30;
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}
