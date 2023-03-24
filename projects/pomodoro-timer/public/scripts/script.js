let timer = -1; // timer's id, initialize to invalid
var onbreak = false; // are we on break? (25 min vs 5 min)
var sec = 1500; // timer seconds remaining
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
                if (onbreak) {
                    onbreak = false;
                    sec = 1500;
                } else {
                    onbreak = true;
                    sec = 300;
                }
                //clearInterval(timer);
                stopTimer();
            }
        }, 1000);
    }
}

function stopTimer() {
    console.log("stopTimer()");
    clearInterval(timer);
    timer = -1; // set back to invalid timer id
};

function forward() {
    console.log("forward")
    if (onbreak) {
        sec = 1500;
        onbreak = false
    } else {
        sec = 300
        onbreak = true
    }
}



document.getElementById("start").addEventListener("click", () => { startTimer(); });
document.getElementById("stop").addEventListener("click", () => { stopTimer(); });
document.getElementById("Forward").addEventListener("click", () => { forward() });

//p.querySelector('#counter').textContent = `${counter}`;