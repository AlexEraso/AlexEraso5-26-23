let timer = -1; // timer's id, initialize to invalid (-1)
var onbreak = false; // are we on break? (25 min vs 5 min)
var sec = 1500; // timer seconds remaining
var counter = 0;
// return sec in mm:ss string format
function toMinSecStr(sec) {
    var date = new Date(0);
    date.setSeconds(sec);
    return date.toISOString().substring(14, 19); // sec = 1500, return "25:00"
}

// starting condition: onbreak = false, duration = 1500s
// click start -> run timer w/ 1500s
// click stop -> stop timer, remember seconds remaining
// timer expires -> set to next timer state (onbreak = !onbreak), set duration (onbreak = 300s, else 1500s)

function startTimer() {
    console.log("startTimer()");

    // check to see if timer has not been created (timer id is invalid)
    if (timer == -1) {
        timer = setInterval(function () {
            document.getElementById('safeTimerDisplay').innerHTML = toMinSecStr(sec);
            sec--;
            // timer expired
            if (sec < 0) {
                //clearInterval(timer);
                resetSeconds();
                stopTimer();
            }
        }, 1000);
    }
}

function resetSeconds() {
    console.log("resetSeconds()");
    if (onbreak) {
        // we just finished a break
        sec = 1500;
        onbreak = false;
    } else {
        // finished a work interval
        counter += 1;
        if (counter % 5 == 0) {
            sec = 1200;
        } else {
            sec = 300;
        }
        onbreak = true;
    }
    document.getElementById('safeTimerDisplay').innerHTML = toMinSecStr(sec);
}

function stopTimer() {
    console.log("stopTimer()");
    clearInterval(timer);
    timer = -1; // set back to invalid timer id
};

function forward() {
    console.log("forward")
    // short circuit the timer
    resetSeconds();
    stopTimer();
}

document.getElementById("start").addEventListener("click", () => { startTimer(); });
document.getElementById("stop").addEventListener("click", () => { stopTimer(); });
document.getElementById("Forward").addEventListener("click", () => { forward(); });
