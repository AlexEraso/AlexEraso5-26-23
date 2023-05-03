//Makes it so that you can't click the button multiple times

function done() {
  const input = document.getElementsByClassName('input');
  for (let i = 0; i < input.length; i++) {
    input[i].removeEventListener('click', click);
  }
}

//Changes the color of the buttons based on the class, correct or error. Then done makes it so you can't click more than once 

function click(event) {
  const input = event.target;
  if (input.id === 'correct') {
    input.classList.add('green');
    done();
  } else {
    input.classList.add('red');
    document.getElementById('correct').classList.add('green');
    done();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementsByClassName('input');
  for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('click', click);
  }
});

//Switch Between Flags Randomly
window.onload = chooseFlag;

var myFlag = new Array("https://tinyurl.com/2hbxcsbs","https://tinyurl.com/38jm6rwt");

function chooseFlag() {
     var randomNum = Math.floor(Math.random() * myFlag.length);
     document.getElementById("myFlag").src = myFlag[randomNum];
};