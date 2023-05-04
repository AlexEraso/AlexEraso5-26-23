//Function that doesn't allow user to click button more than once

function done() {
  const input = document.getElementsByClassName('input');
  for (let i = 0; i < input.length; i++) {
    input[i].removeEventListener('click', click);
  }
}

//Function that changes the color based on the button Id, correct = green, error = red. 
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

//Switch Between Flags Randomly after reloading page 
//Based off of: https://www.peachpit.com/articles/article.aspx?p=2239154&seqNum=10

window.onload = chooseFlag;

var myPicture = new Array ("https://tinyurl.com/fdramphs", "https://tinyurl.com/38jm6rwt");

//For some reason, when I change "var myPicture = new Array ("https://tinyurl.com/2hbxcsbs","https://tinyurl.com/38jm6rwt");" to "var myFlag = ["https://tinyurl.com/2hbxcsbs", "https://tinyurl.com/38jm6rwt"];" it doesn't load the image, so I'm just going to keep it how it was until I figure out why. 
//First url is italy, second is China

function chooseFlag() {
     var randomNum = Math.floor(Math.random() * myPicture.length);
     document.getElementById("myCountry").src = myPicture[randomNum];
}