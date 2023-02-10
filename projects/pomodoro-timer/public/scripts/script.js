

let nIntervalId;

function startTimer() {
  document.getElementById("thing").innerHTML = "start timer";
};

function stopTimer() {
    document.getElementById("thing").innerHTML = "stop timer";
};

function fiveminutetimer(){
    var sec = 300;
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function twentyfivetimer(){
    var sec = 1500;
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function count () {
    setInterval(myTickFunc, 1000);
    elapsedMs += 1000;
    if (elapsedMs >= 5000) {doReverse = true;}
};

document.getElementById("start").addEventListener("click", );
document.getElementById("stop").addEventListener("click", );

p.querySelector('#counter').textContent = `${counter}`;


