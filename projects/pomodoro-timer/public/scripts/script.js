

//let nIntervalId;
let timer;

function fiveminutetimer(){
    var sec = 300;
    timer = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function twentyfivetimer(){
    var sec = 1500;
    timer = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function startTimer() {
    document.getElementById("thing").innerHTML = "start timer";

    // if not on break
    twentyfivetimer();

    // if on break
    fiveminutetimer();
  };
  
  function stopTimer() {
      document.getElementById("thing").innerHTML = "stop timer";
      console.log("stopTimer()");
      // get the current timer's id
      // call clearInterval() on that timer id
  };
  
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);

//p.querySelector('#counter').textContent = `${counter}`;


