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
    score = score + 1;
    input.classList.add("green");
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("next").addEventListener("click", function () {
      input.classList.remove("green");
      input.classList.remove("correct");
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
  "Iceland",
  "Ireland",
  "Italy",
  "Kosovo",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Moldova",
  "Monaco",
  "Montenegro",
  "Netherlands",
  "North Macedonia",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "Russia",
  "San Marino",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Turkey",
  "Ukraine",
  "United Kingdom",
  "Vatican City",
  "Algeria",
  "Angola",
  "Benin",
  "Botswana",
  "Burkina Faso",
  "Burundi",
  "Cape Verde",
  "Cameroon",
  "Central Africa Republic",
  "Chad",
  "Comoros",
  "DRC",
  "Congo",
  "Ivory Coast",
  "Djibouti",
  "Egypt",
  "Equatorial Guinea",
  "Eritrea",
  "Eswatini",
  "Ethiopia",
  "Gabon",
  "Gambia",
  "Ghana",
  "Guinea",
  "Guinea Bissau",
  "Kenya",
  "Lesotho",
  "Liberia",
  "Libya",
  "Madagascar",
  "Malawi",
  "Mali",
  "Mauritana",
  "Mauritius",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Niger",
  "Nigeria",
  "Rwanda",
  "Sao Tome and Principie",
  "Senegal",
  "Seychelles",
  "Sierra Leone",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Sudan",
  "Tanzania",
  "Togo",
  "Tunisia",
  "Uganda",
  "Zambia",
  "Zimbabwe",
];

var Flags = {
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
  Hungary: { url: "https://tinyurl.com/2p9et2ar" },
  Iceland: { url: "https://tinyurl.com/34srv2vf" },
  Ireland: { url: "https://tinyurl.com/yckn89zb" },
  Italy: { url: "https://tinyurl.com/fdramphs" },
  Kosovo: { url: "https://tinyurl.com/mp2je653" },
  Latvia: { url: "https://tinyurl.com/4d754v4e" },
  Liechtenstein: { url: "https://tinyurl.com/bddsfkp9" },
  Lithuania: { url: "https://tinyurl.com/d6eksst6" },
  Luxembourg: { url: "https://tinyurl.com/mr4c8c9m" },
  Malta: { url: "https://tinyurl.com/yz4mah6a" },
  Moldova: { url: "https://tinyurl.com/yp24vrsa" },
  Monaco: { url: "https://tinyurl.com/muzupftx" },
  Montenegro: { url: "https://tinyurl.com/4zc9vz27" },
  Netherlands: { url: "https://tinyurl.com/ymx2wfh3" },
  North_Macedonia: { url: "https://tinyurl.com/yckksjtc" },
  Norway: { url: "https://tinyurl.com/58kd7t7n" },
  Poland: { url: "https://tinyurl.com/588h35zj" },
  Portugal: { url: "https://tinyurl.com/y2mjccbf" },
  Romania: { url: "https://tinyurl.com/2tbf392j" },
  Russia: { url: "https://tinyurl.com/7ye3k5vp" },
  San_Marino: { url: "https://tinyurl.com/5c33u3kh" },
  Serbia: { url: "https://tinyurl.com/26phvaps" },
  Slovakia: { url: "https://tinyurl.com/3b6e7cwt" },
  Slovenia: { url: "https://tinyurl.com/3k7962hf" },
  Spain: { url: "https://tinyurl.com/y2c5fjzs" },
  Sweden: { url: "https://tinyurl.com/2p8mmbpr" },
  Switzerland: { url: "https://tinyurl.com/nmtjp4jz" },
  Turkey: { url: "https://tinyurl.com/bdtedzxd" },
  Ukraine: { url: "https://tinyurl.com/2ejuv62k" },
  United_Kingdom: { url: "https://tinyurl.com/4pcttt4k" },
  Vatican_City: { url: "https://tinyurl.com/yzh76vzw" },
  Algeria : {url : "https://tinyurl.com/356exkrs"},
  Angola : {url : "https://tinyurl.com/3p74e5p3"},
  Benin : {url : "https://tinyurl.com/43s4epp9"},
  Botswana : {url : "https://tinyurl.com/ypwp3tjx"},
  Burkina_Faso: { url: "https://tinyurl.com/4zk9u46n" },
  Burundi: { url: "https://tinyurl.com/munn4xwc" },
  Cape_Verde: { url: "https://tinyurl.com/32d286a7" },
  Cameroon: { url: "https://tinyurl.com/2ubh2a4m" },
  Central_African_Republic: { url: "https://tinyurl.com/mr499ckb" },
  Chad: { url: "https://tinyurl.com/u7pudvfm" },
  Comoros: { url: "https://tinyurl.com/5cnbcncw" },
  DRC: { url: "https://tinyurl.com/yc8jfray" },
  Congo: { url: "https://tinyurl.com/mp9wda9a" },
  Ivory_Coast: { url: "https://tinyurl.com/27jkysfz" },
  Djibouti: { url: "https://tinyurl.com/mtmmpc4r" },
  Egypt: { url: "https://tinyurl.com/ykpvfdx8" },
  Equatorial_Guinea: { url: "https://tinyurl.com/yy2879wf" },
  Eritrea: { url: "https://tinyurl.com/yhv3nupn" },
  Eswatini: { url: "https://tinyurl.com/mrxnrb9k" },
  Ethiopia: { url: "https://tinyurl.com/4anbu2st" },
  Gabon: { url: "https://tinyurl.com/ayypjxjy" },
  Gambia: { url: "https://tinyurl.com/39fnsh4x" },
  Ghana: { url: "https://tinyurl.com/34srv2vf" },
  Guinea: { url: "https://tinyurl.com/4284hnwb" },
  Guinea_Bissau: { url: "https://tinyurl.com/33sx9hf9" },
  Kenya: { url: "https://tinyurl.com/3aad4xyw" },
  Lesotho: { url: "https://tinyurl.com/3p4r683m" },
  Liberia: { url: "https://tinyurl.com/9khr2y6e" },
  Libya: { url: "https://tinyurl.com/4pz2xnpx" },
  Madagascar: { url: "https://tinyurl.com/2j635s82" },
  Malawi: { url: "https://tinyurl.com/2yfy8eaj" },
  Mali: { url: "https://tinyurl.com/3tdrhv6t" },
  Mauritana: { url: "https://tinyurl.com/defmbv9z" },
  Mauritius: { url: "https://tinyurl.com/dpvc36uv" },
  Morocco: { url: "https://tinyurl.com/44e79syj" },
  Mozambique: { url: "https://tinyurl.com/4y7crssy" },
  Namibia: { url: "https://tinyurl.com/9v54nk74" },
  Niger: { url: "https://tinyurl.com/mssk7mtp" },
  Nigeria: { url: "https://tinyurl.com/2p8kwpbp" },
  Rwanda: { url: "https://tinyurl.com/ymts9xzz" },
  Sao_Tome_and_Principe: { url: "https://tinyurl.com/5h9k359y" },
  Senegal: { url: "https://tinyurl.com/mrwxcevy" },
  Seychelles: { url: "https://tinyurl.com/4bv3jd65" },
  Sierra_Leone: { url: "https://tinyurl.com/bdf6snuf" },
  Somalia: { url: "https://tinyurl.com/4cf8yyvs" },
  South_Africa: { url: "https://tinyurl.com/3b2ejynf" },
  South_Sudan: { url: "https://tinyurl.com/2tx385eb" },
  Sudan: { url: "https://tinyurl.com/y8kajpwx" },
  Tanzania: { url: "https://tinyurl.com/2rtcahnh" },
  Togo: { url: "https://tinyurl.com/49mrkbwf" },
  Tunisia: { url: "https://tinyurl.com/yc7ammhc" },
  Uganda: { url: "https://tinyurl.com/2ecnb46w" },
  Zambia: { url: "https://tinyurl.com/bdhe5a88" },
  Zimbabwe: { url: "https://tinyurl.com/4yc45mr5" },
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