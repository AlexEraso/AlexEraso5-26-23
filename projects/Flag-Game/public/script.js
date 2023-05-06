//Function that doesn't allow user to click button more than once
let score = 0;
function disableButtons() {
  const input = document.getElementsByClassName("input");
  for (let i = 0; i < input.length; i++) {
    //input[i].removeEventListener('click', click);
    input[i].disabled = true;
  }
}

function enableButtons() {
  const input = document.getElementsByClassName("input");
  for (let i = 0; i < input.length; i++) {
    //input[i].removeEventListener('click', click);
    input[i].disabled = false;
  }
}

//Function that changes the color based on the button Id, correct = green, error = red. Also hides the next button, when clicked, it reloads the page, probably won't keep.
function click(event) {
  const input = event.target;
  var red = document.getElementsByClassName("red");
  if (input.classList.contains("correct")) {
    score = +1;
    input.classList.add("green");
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("next").addEventListener("click", function () {
      input.classList.remove("green");
      document.getElementById("next").style.visibility = "hidden";

      for (let i = 0; i < red.length; i++) {
        red[i].classList.remove("red");
      }
      //window.location.reload();
      turn();
    });
    disableButtons();
  } else {
    input.classList.add("red");
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("next").addEventListener("click", function () {
      input.classList.remove("green");
      document.getElementById("next").style.visibility = "hidden";

      for (let i = 0; i < red.length; i++) {
        red[i].classList.remove("red");
      }
      //window.location.reload();
      turn();
    });
    disableButtons();
  }
}
//
//
//
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementsByClassName("input");
  for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("click", click);
  }
});

//Switch Between Flags Randomly after reloading page
//Based off of: https://www.peachpit.com/articles/article.aspx?p=2239154&seqNum=10

window.onload = chooseFlag;

var AllCountries = [
  "Italy",
  "China",
  "Spain",
  "Colombia",
  "Argentina",
  "Vietnam",
  "Albania",
  "Andorra",
  "Austria",
  "Belarus",
  "Belgium",
  "Bosnia",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czechia",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Georgia",
  "Greece",
  "Hungary",
  ""
];

var Flags = {
  Italy: { url: "https://tinyurl.com/fdramphs" },
  China: { url: "https://tinyurl.com/38jm6rwt" },
  Spain: { url: "https://tinyurl.com/5dwjpmn5" },
  Colombia: { url: "https://tinyurl.com/5n6e8at7" },
  Argentina: { url: "https://tinyurl.com/34zxasp5" },
  Vietnam: { url: "https://tinyurl.com/34hyech4" },
  Albania: { url: "https://tinyurl.com/2s2jwa39" },
  Andorra: { url: "https://tinyurl.com/4h6b4cy2" },
  Austria: { url: "https://tinyurl.com/2p8a3h8d" },
  Belarus: { url: "https://tinyurl.com/3ampzfxz" },
  Belgium: { url: "https://tinyurl.com/5c4j376a" },
  Bosnia: { url: "https://tinyurl.com/yvd3dbpe" },
  Bulgaria: { url: "https://tinyurl.com/49t2fm96" },
  Croatia: { url: "https://tinyurl.com/35kxckzs" },
  Cyprus: { url: "https://tinyurl.com/2p8ujxfa" },
  Czechia: { url: "https://tinyurl.com/2c36xtkr" },
  Denmark: { url: "https://tinyurl.com/mrndrwcm" },
  Estonia: { url: "https://tinyurl.com/33w5ds3h" },
  Findland: { url: "https://tinyurl.com/5n6c6njz" },
  France: { url: "https://tinyurl.com/4vy5b5a6" },
  Germany: { url: "https://tinyurl.com/2xz62zze" },
  Georiga: { url: "https://tinyurl.com/24xtvvp8" },
  Greece: { url: "https://tinyurl.com/5n83bnhf" },
  Hungary: {url: "https://tinyurl.com/2p9et2ar"},


};
function getRandomCountryIndex(countryArray) {
  return Math.floor(Math.random() * countryArray.length); // country name
}

// Countries remaining in this game
var RemainingCountries = AllCountries.slice(); // copy all countries

//
// data source
// array of flag objects
//   flag object = url to flag image, country name
//
// four buttons, 3 incorrect, 1 correct, randomized
// after button is clicked
//   show correct / incorrect by changing button color(s)
//   show Next button
//   adjust score
//  * remember which flag was just used
//

function getIncorrectCountries(selectedCountry) {
  var countries = AllCountries.toSpliced(
    AllCountries.indexOf(selectedCountry),
    1
  );
  var selected = [];
  for (var i = 0; i < 3; i++) {
    var idx = getRandomCountryIndex(countries);
    selected.push(countries[idx]);
    countries.splice(idx, 1); // remove from the array
  }

  return selected;
}

function turn() {
  document.getElementById("score").innerHTML = `Score: ${score}`;
  // each turn
  //   pick a flag from the list
  var countryIndex = getRandomCountryIndex(RemainingCountries);
  var correctCountry = RemainingCountries[countryIndex];
  document.getElementById("myCountry").src = Flags[correctCountry].url;
  console.log("Selected index " + countryIndex + " which is " + correctCountry);
  RemainingCountries.splice(countryIndex, 1); // remove from remaining countries
  var incorrectCountries = getIncorrectCountries(correctCountry);
  console.log("Incorrect countries are: " + incorrectCountries);

  var correctButtonIdx = Math.floor(Math.random() * 3); // random 0 - 3
  console.log("Correct button index is " + correctButtonIdx);

  var countryButtons = document.querySelectorAll("input.button"); // all buttons of class button

  var incorrectCt = 0;
  for (let i = 0; i < 4; i++) {
    if (i == correctButtonIdx) {
      countryButtons[i].value = correctCountry;
      countryButtons[i].classList.add("correct");
    } else {
      countryButtons[i].value = incorrectCountries[incorrectCt];
      incorrectCt++;
    }
  }

  enableButtons();

  //   assign country name to correct button
  //   assign random country names to remaining button (make sure not to use the same name twice, remember selected indexes again)
  //   wait for button to be clicked
}

//Turn this into objects rather than an Array. Have the country name and have the url attatched.

//For some reason, when I change "var myPicture = new Array ("https://tinyurl.com/2hbxcsbs","https://tinyurl.com/38jm6rwt");" to "var myFlag = ["https://tinyurl.com/2hbxcsbs", "https://tinyurl.com/38jm6rwt", ];" it doesn't load the image, so I'm just going to keep it how it was until I figure out why.
//First url is italy, second is China, third is Spain, fourth is Colombia, fifth is Argentina, sixth is Vietnam

function chooseFlag() {
  //var randomNum = Math.floor(Math.random() * myPicture.length);
  //document.getElementById("myCountry").src = myPicture[randomNum];
  turn();
}

//This link might help https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
