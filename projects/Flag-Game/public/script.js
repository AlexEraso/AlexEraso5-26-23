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
  "Afghanistan",
  "Armenia",
  "Azerbaijan",
  "Bahrain",
  "Bangladesh",
  "Bhutan",
  "Brunei",
  "Cambodia",
  "China",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Israel",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "North Korea",
  "South Korea",
  "Kuwait",
  "Kyrgystan",
  "Laos",
  "Lebanon",
  "Macao",
  "Malaysia",
  "Maldives",
  "Mongolia",
  "Myanmar",
  "Nepal",
  "Oman",
  "Pakistan",
  "Palestine",
  "Philippines",
  "Qatar",
  "Saudi Arabia",
  "Singapore",
  "Sri Lanka",
  "Syria",
  "Taiwan",
  "Tajikstan",
  "Thailand",
  "Timor Leste",
  "Turkmenistan",
  "United Arab Emirates",
  "Uzbekistan",
  "Vietnam",
  "Yemen",
  "Argentina ",
  "Bolivia",
  "Brazil",
  "Chile",
  "Colombia",
  "Ecuador",
  "Guyana",
  "Paraguay",
  "Peru",
  "Suriname",
  "Uruguay",
  "Venezuela",
  "Belize",
  "Costa Rica",
  "El Salvador",
  "Guatemala",
  "Honduras",
  "Nicaragua",
  "Panama",
  "Cuba",
  "Haiti",
  "Bahamas",
  "Barbados",
  "Saint Vincent",
  "Antigua and Barbuda",
  "Dominica",
  "Trinidad and Tobago",
  "Puerto Rico",
  "Jamaica",
  "Saint Lucia",
  "United States",
  "Canada",
  "Mexico",
  "Greenland",
  "Grenada",
  "Australia",
  "Papa New Guinea",
  "New Zealand",
  "Fiji",
  "Solomon Islands",
  "Micronesia",
  "Vanuatu",
  "Samoa",
  "Kiribati",
  "Tonga",
  "Marshall Islands",
  "Palau",
  "Tuvalu",
  "Nauru",


];

var Flags = {
  //Europe
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
  //Africa
  Algeria: { url: "https://tinyurl.com/356exkrs" },
  Angola: { url: "https://tinyurl.com/3p74e5p3" },
  Benin: { url: "https://tinyurl.com/43s4epp9" },
  Botswana: { url: "https://tinyurl.com/ypwp3tjx" },
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
  //Asia
  Afghanistan: { url: "https://cdn.britannica.com/40/5340-004-B25ED5CF/Flag-Afghanistan.jpg" },
  Armenia: { url: "https://cdn.britannica.com/11/4711-004-1504C169/Flag-Armenia.jpg" },
  Azerbijan: { url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAkFBMVEUAteJQni/vM0D///8AvOv6ISr4JkE9pC7vLjzvKTjvMT7vLDruHC7uIDHuFiruECb+9PX70NL8293zb3f95ebxVmDyZm7ze4L+7/D0g4n2m6DzdXzyanL5xMf70dPtABT1k5nwQ07wSVT5vcH3o6jxXWbtAAj0iY/72NrxUlzvOUX5x8n3qKz4s7b3rbH84eMwX1lWAAADrklEQVR4nO3ba2+iQBSAYVf2wgzDoEJrdVuLtV1t7eX//7v1UhGtYt2z2TmbvM+HpklpQt4MMMDQagEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPxFXyHQ+gaBVlsfGyfGJLG1oXfkNG35rHFp+yIfDPKHp9SZOPT+nKArn/Hjct6J3nW6wztvVI9BTfmMn75Fe4rSpYoD6skX+7KzH281Boc+Cb1vR6nJl971drNddefz+WxZtLhIQ+/dMVry+cFOuue87d2SHw8mUVR6pQewjnw2e6nFm+VZmmx6WZOmZdRV2k9FPuvntZGXZ3vnOmuy5zedV2AV+bKbbb2JMx83sOnjJNbYT0M+97ytV2aHK8XtvsYptIJ85nJb76c7tpW1T+tfVFUMn8+a7XRvcHqGklxqmgWGz+e2F91Xf3rzrKPpJBg8X3xX1Xv7xOwkuY4GB64toQTP5yZVvoemw9Ks/5hOotF6jMYaKobOZ21V76bp0DXDy+V00LrFhk+LQZr4i3sF/ULnM2WV77Hpmho/RL08M6a/nNyYJLscRT8VXENC5/O97ZmvecNRFBX92+5yy1/54r+K7B/tYpPA+VYH4/uEuflYTFazw2Jdevmjr+DYDZ0vyat84xOXXb/7QOtKw+ALnc8MNzk6p3LUSi9NNQy+0PnSatoyO3q7tmbNbf1J/tWtikcwgfO57qbHS9P9mk2cGXTrgy+aTWMXvmDofNUJ7bUhX+zym+ijbj8NPXcJnM8XmxbPx/PFD1cH4q1cB+7H6BMJnW+0aTHh3Hc+rrwizPtEkuuqB3cd57O+6sE97x9ws02+Hk9czsfzPpHa0+Y5T5vPx7sOkdqbtoI3bedzr1W/z7zn9bzn3WHT7SqDPqsMzsYaFxl3X7sXO7bCyuaqur3TkK+dba++R9f3vSSKTnkVFfmsrz2MOrS61LO6tMnu2ube7tpm58rFXE9lPSX5FvORaf1xSuf1er2y3vtx/yaK7pXWU5Ovnd7Noh2dXnc+euO7jk+Ks/7BN0Kd6f65UBE9+RYTwGxQ7McrSq/oHu0DTflWX1QOd76ofOSLyrPEfM8r9T99Tf4dAq0fEGh9gQD5RMgnQj4R8omQT4R8IuQTIZ8I+UTIJ0I+EfKJkE+EfCLkEyGfCPlEyCdCPhHyiZBPhHwi5BMhnwj5RMgnQj4R8omQT4R8IuQTIZ8I+UTIJ0I+EfKJkE+EfCLkEyGfCPlEyCdCPhHyiZBPhHwi5BMhnwj5RMgnQj6R30k1BoaZ0xT8AAAAAElFTkSuQmCC" },
  Bahrain: { url: "https://cdn.britannica.com/67/5767-004-E0FF7201/Flag-Bahrain.jpg" },
  Bangladesh: { url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAe1BMVEUAak70KkEAbU/7JkD4KEEAbk/6J0H+JEAAaU7YNUN0V0rIPESLUUjBP0VpWUraNEPtLEGpR0bQOUQqZU2PUEi3QkXjMELoLkKlSEefSkceZU1iW0tRX0u9QEVVXktuWEpCYUyEUkl8VUmXT0icTkhGYEymSEevRUZgW0uxzhtoAAADw0lEQVR4nO3d23aiMBQGYNmJRBQV0VJF7Xnavv8TTlCpbaeztgeSdMP/XXlp/pVsAoSk1wMAAAAAAAAAAAAAAAAAAAD4gir9vd3v0H/oV7F5lOt0Nk6KTCujdFYk41m6LpHTjk1hvcozo1SstY727K9YKZPlq3Wv4zERzRcjbeI6mu90bHS+mHc3JRqkiVL/i+cjJqWStOxkSLTZxmw+dUrx9q5zIdF9Yk7L55CSSe47FVJ/UpwV0D6kYtIP/cd9oYfzetAxpOmfTvQkGtxcFNA+pJtB+0OiYRRfGFAljoatz2hsrgioYsaD0G1wiTbZNV3o0JGyTXs7Uj+9uAp9pk3a1ksb3Vw7yGpm29J+lKuGEooilYRujAuD4voydBQX7Sva5W0TZehI35ahm9SwphOyGWXtymhQNJ1Q1Y/aNNZo2nxCNqNpe65rNGqyUh/Fo7Zk1F82NR/6zry2Yw5J964Sshm14znb3EUdqul56OY1wE2p/oioBSWbVs3ddvxErcRn9OA2IZvRQ+gmXsntMKtIH2r06O5qVjOPsjNyHlAldCOvQTM30+qv1KvgblS6rtWHjOTez9Kbj05k79XexHajgZ+EbEZSu5HrWeOR3Plj5imhKMpCN/VCQ/dzopoZhm7sRSh3PbE+0rnIkTb3VYkqSuJDEVp4jWghsBtR4m+c2ZGWCIzI08y6puS9VaMnzxE9ietGtPU5zuxIk7dYhPzNG/duxUU09zdv3DPiLvtDv6XIFiNpE2xa+rrLr8VLYSONRn6rta3X0l7wk4PVMkxEhbSIfFdrW4yERVT6j8gIm1/fBYjoLnSjzzPxfc23A20SutFn8X2HtotI1l0apQEiSmVF9BwgomdZEb0EiOgFEbUsIgw0Dso1Cxd9HqaOLNyAsHAby6IAA01WKcIjNR4ezLLweJ+Hl0QsvGpk4YU1C8seWFg8w8MSLBYW8rGwHJSHRcUsLE3n4QMHHj6T4Xj82ErW+6FP8MkeCx9+8vD5MMvPR+jxTG4n6mErAx42xOBhWxUeNudhYYsnnuONwiQ+J/oHtptjYdNCnsOtL5ft2PoSG6ieAtvw8rCZMw9bgvOwsTwPxxOcAIdcsHBUCg8H7vBwbNMpGjj8K3QTXMMRcjwcRHiCy4+zTLpxnGWlP5niUFQOTXC0Los2W40DmhlnHPPdjSL9ExwWfwrb/PdVnhmlYq3rqOyvWCmT5av3XsfzOSCicp3OxkmRRcoonRXJeJauS0I8X1Clv7f7HfoPAQAAAAAAAAAAAAAAAAAAgCh/AQzVR+UJST1GAAAAAElFTkSuQmCC" },
  Bhutan: { url: "https://cdn.britannica.com/79/6479-004-BDDD1FE1/flag-dragon-image-Bhutan-design.jpg" },
  Brunei: { url: "https://cdn11.bigcommerce.com/s-lvtmj4gso4/images/stencil/original/products/513/1180/brunei_flag-Brunei-Variation__91521.1658438961.jpg" },
  Cambodia: { url: "https://cdn.britannica.com/27/4027-004-B57F84E9/Flag-Cambodia.jpg" },
  China: { url: "https://cdn.britannica.com/90/7490-004-BAD4AA72/Flag-China.jpg" },
  India: { url: "https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" },
  Indonesia: { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/255px-Flag_of_Indonesia.svg.png" },
  Iran: { url: "https://cdn.britannica.com/22/1722-004-EAD033D8/Flag-Iran.jpg" },
  Iraq: { url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAACqCAMAAABVlWm8AAAAbFBMVEXNESUAAAD///8Bez3dX21UVFQShEqZyrH6/Pt9u5ugzrd4uZgNgUaIwaRSpXtcqoIjjVfu9vIxlGK/3s7n8+2x18T0+ffW6uBxtZKn0bzs9fHc7eQskV5FnnHM5dhlr4lJoHSRxqvF4dMbiFHJsck5AAADKklEQVR4nO3a7ZaaMBSGUWtaAoIokQ8FlVHu/x4nQRhBCcw4kSrn3T+6kJUqj0AQ2tkMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXs5f2mZz2tBPG/ppQz9t6KcN/bS9cj/fPP8z/kN/3Puywd1+b9xvjN+/5a2XdrHTjdy411HzubMKn7A1o/fnrEibr23GxE6zb+XANFELZ/kdOcxzE+ObM3K/vWKMHZq5sp+xU/dgHswdRy6crYXqZ6ywTW/QuP1l/noTNFfJNeI+K4uSSDBPMDkHco9V/dpT5WGj9tu+bNi3T2PV73aMXRyEE8hvQS56rO43PweO2V/mi/RmpVzn9P+9a7/xw3/M/vjQkT/UHy6n0l/mH4Lb1f3958KfSH8gbmf+i97+yGMT6S/zPzrmr95+ebmYRn+4l1vvd22+vj+eTn+4vs+vjgVtfygm05+p/FVr4yNhncpvQNd/LNhU+rNCbnreXJOo2YCVdz6a/p2Mfv/+8mKfqPzWrWxosYtI11+eMO/eH/tqB2fW3S/ck9r55QVBu//d9++XB7nq36hbnmWL+iW0i9X6Cfafq5vZY3W/tmGdorm2n++ZZb1pf5J/1YgH+3k95A37l+oWp7qyf1z6M7eLE7T7w6/7olju+j3Xzn+GHwEZ7s88dYd/OmdpEMi73Zz3uPZvg6iI6reI1FcYqdmRc/mn4PzaH2a5MLvBpo//bffRrlH1s+YVYtk1sOpXzD4DMd2fPdq/rt8hH+g3+wzM+PzvP9jPjtUbDPX7RjfXeP/i0f76IjDU7909QvkN4/0/OgGa/fXE1jmDNPpZ1Pv5P2S8P1W7yPom2WzXy/UE4HYNlCf9sl7mvZ//Q8b71c+d4/CwV/GM+a88ktPI/I+1JzDdL89Sr9z9h6Gn+q/BbH8o9/7+cvT7mn/UezFG+8Pc39aHvZ2ZfOeneeX//zEG9NOGftrQTxv6aUM/bbN/tM3+0IZ+2tBPG/ppQz9t6KcN/bShnzb004Z+2tBPG/ppQz9t6KcN/bShnzb004Z+2tBPG/ppQz9t6KcN/bShnzb004Z+2tBPG/ppo97/Cbx1z3uIgMUpAAAAAElFTkSuQmCC" },
  Israel: { url: "https://cdn.britannica.com/53/1753-004-03582EDA/Flag-Israel.jpg" },
  Japan: { url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/800px-Flag_of_Japan.svg.png" },
  Jordan: { url: "https://a-z-animals.com/media/2023/01/iStock-1309094429.jpg" },
  Kazakhstan: { url: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg" },
  North_Korea: { url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAAB/CAMAAAAXZuQgAAAAe1BMVEXtHCcCT6L////5ur3V4vDuKzXtIi3//PzvMDrwP0juJjDtHyr4pKnyW2P5tLj96+z83uDvNT/7zM/+9/fwQ0z70tXzZGz1foT+8PH3nKH83+HxUFj2jZPzaXD1fIL1goj6xMf4qq/yWWH2kJXxSVH0b3b4qa32j5T5ubwQzQlSAAADq0lEQVR4nO2ca3eiMBCGs2FBQIsooLReUHtZ//8vXEAuubHaPUJOZ+b50pbEc+Y9zCQzk1T2CzfMtgGWIf24If24If24If24If24If24If24If24If24Qa//N24Yxw16/Q5uGEEQBEEQBEH8P/P0sF9EjhMt9od0btuaifGPTl4XFXFc/8ido2/bpul4cWZtUVUU7W8z58W2XdOwyYSiMgiEP7KNbdvGJ3DEmnrJ2FL8+xTYtm9kjonUU1gwtpAeJEfbFo6JGyk9lQtjF+VRFNq2cjT8TNG6LPe9+VJ5mEHdCVZvitLK/dUAKIlXti0dBT9WhVbuX+6G2uMYogd4a01n7lUD81wbWHu2rX0+mptz/nUbOesjr3ZtHYGDLpI36c5meAgMrrrKd+5fRoYeAHzp2rX32Ri8n5/bQUMAAIuAYGaQ2Pm4KQBmoDJh0xtOukQvTAzDC5v2PpmV6fVH/biaFtcOACgL2hv08UM/btoceGHP3mejZ36i+w8EQGzP3ieT8sL1wtCVkMo8dSz03IKDWQG3ZUb7zZTePXEOphVwLb05//zOJza5vED+bG517/nhxkb4Wn/gbUybJsRrdr/447H5adMmmQGpAtNuyX9oSyu6zQDIArjr97TT3WXQF/rDuymsGx+xwbO8c8hxEetEIAcicnnz+o+onu+lRBlIE0Bp8GXp0MRA6Q8Def87WRVPtuZ5n2oWDCT+U64Smc679RoZyPrvadXv2jRN6w9D2f+Zdu5hzAMKdRaU/E9vbxgde6VFydR2jsVWEZaZp6mng2DqP3UBHEiD1QAAsvwxrf8zICyQZ8Hp/yhvdsD91QAA1P+T+7/7fsB3xIpIapNC6v+yL1FZn/9W1Y5QEUnrBKT+v3T+08V1W+30FZGwTsA6/xHP/96bR6su4ctare/9LFjnf+L5b9MFOwinvm1z9KN7Au38t28C3LLaUDkQjm56u0wZSOkv0Aqu3f9DOxF6q4vdNgCAeX9Fe/+ncv+t4Tx0tp93AQDx/g9zs8b9fUdXX1GlAnUAxNCC/8Yqrt1/Z7gK0yx6F/aHg73/V3pAGQJBYboL0PKeAr7/Wa76UaLfApRYJ4Dv/zLt/rcG7PvfTL3/r+LAynqNbNQ+T+/8QBr+97g4pv3/erFt13T4x6t06TO/HmHu+cOg/v8/giAIgiAI4gdg+wvYLIP++/9sG2AZ9N//afsLWC1D+nFD+nFD+nFD+nFD+nFD+nFD+nFD+nFD+nFD+nHzF7gDZ38DyIxVAAAAAElFTkSuQmCC" },
  South_Korea: { url: "https://cdn.britannica.com/49/1949-004-8818300C/Flag-South-Korea.jpg" },
  Kuwait: { url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAV1BMVEUAej3OESb///8AAAAAbR/KAAClpaUAfT7TESfXEigAeDzKESWfDR0AYDAANhsAXi9YBxAAMxlaBxAAOBwAWy4AcC2tqayjrazGAA6cDR1TBg8EAABeCBFpTMLGAAAC0UlEQVR4nO3bWXIaQRBF0WqXJ3mQhGR53v86HahxAE0NmfUq4CPv3QEnXiQNSOk5fUg0XM4P+I2Xc959AnC0vO8rfoO98jHA0fIhLuBQ//kY4FD5GAP0d8KXdzwDestnMUBn53xcQGd5G8+Ani74Mp+CHV3yMUBHJb58zwU0VuTjLdhahS/fcwEt1fgYoKk6HxfQUIOPt+B+TT4uYK82HwPs1OPjAjbr8jHAVgY+BljPwsczYDUbHwOsZOTjApYz8zHAUnY+BljIw8cX0Re5+BjgNicfF/A8Lx/PgGf5+biAJw3wcQGPDfHlZy7g2hgfAzw0yscFfG2YjwHuE/j4JUTjY4AiX/gLKPJFH6DMF/tTsM6X87e4fjP4Av9F9BS+uF/DTOKLOsBZfEEv4Dy+kAOcyBfxAk7ly7uXt6GazJe/vwnVbL73t35B1w0+Kfik4JOCTwo+Kfik4JOCTwo+Kfik4JOCTwo+Kfik4JOCTwo+Kfik4JOCTwo+Kfik4JOCTwo+Kfik4JOCTwo+Kfik4JOCTwo+Kfik4JOCTwo+Kfik4JOCTwo+Kfik4JOCTwo+Kfik4JOCTwo+KfikZvP9uPULum6T+R5/vgvVXL4vd0usZvI9fv5465dz7Sby/Yo2vWUiX8DpLfP4wl29tTl8v0NOb5nEF/HqrU3ge1qCTm+ZwPcn6NVbU/n+Rr16ayJf6OktIt9T7OktGl/06S0KH9NbBD6mt2+Qj+mtjfExvUMjfJE/Zmzy88X+mLHJzcfVO83Lx/TO8vExvU0uPqa3zcEX89eMdnY+plfIysf0ihn5mF45Ex9vuLUsfEyvWp+Pq9eoy8f0WnX4mF67Nh/T69TiY3rdGnxMr1+Vj2c9SzU+pmeqzMfVM1bkY3rWCnxcPXuXfEzP0ZaPq+cqMT2lxPSUEtNTOvLxhjtQYnpKiaunlJieUmJ6SonpKaXg/xYk9g+mVhIB1qpEwQAAAABJRU5ErkJggg==" },
  Kyrgystan: { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/255px-Flag_of_Kyrgyzstan.svg.png" },
  Laos: { url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAdVBMVEXOESYAKGj////RECSuFzcAKWsAAFkAAFwAJmcAI2YAHGMAFGAADV4AGGEAE2AAIWXy9Pegp7syR3qRmbEAB13f4ulhbpLs7vKDjKfJzdgYMm1SYYlzfp3W2eL5+vxseJlHV4MQL2yor8EeOHFCU4G7wM46TX0oBggjAAAC5UlEQVR4nO3d3VKjQBRF4XhmhiYQxAiYGP81+v6POGJSZU1OOyaB2m3p+m688aJrFYGGNJ3JBAAAAAAAAAAAAAAAAAAAAAAAOL+wa/IbuyZ/sGtygl008Wji0cSjiUcT76s0yXupB7GVvEleV7OQhXr1tKpf/86qOnmatE3yKoSr5rk7s42z7rm5CqGaJh1VwiZ5EVbNjXk3zSoUCY+WdE3KcB0Lss1yHcpkI0vVpGqb2w+L9G6btko0tjRN6mz5/yJvVZZZnWR0KZrk7XrxaZHeYt2mOK0kaDLN5nsV6c2zBJcgfZPipNs7iVn3+v9q8ibl+oAivbX8AqRuMrs4MInZxUw8RnGT2d3BSczuxFG0TU4PP0rejpRT6SilTYr7o5KY3UtPtMom04cjk5g9KC/JwiZ5dshF+F9dJpy8CZuEx6OTmD0G3UB1TepjTyYb97p7H1mTPNvvHucjC92nR9akbAYlMWtk81lVk7wamMSsVB0oqian+98Lf2SumrmpmrSDk5i1orGKmlTLEZosRQ8jRU0GTNfedZlmsJom0/MRkpida2b4mibl8DNsb665HGuajPLRkX14JE3yYpQkZppvByVNiuMeJXl3kucokiYjnU5UJxRJk/ZypCaXkmmbpEkYdkv8biF5iiJpko2UxExy4VE0yevRmkgWMSmaTJ9Ga/L0bZqMM7PvSWb3kiYvozV5+TZNOE6cnPOJw3UngvmJxzzW437H477Y4/mJx3O2iLGex2oWXPDc3uP7HY/vAT2+L/ZYV+Cx/sSTrVMqBzf5duuUWM8WwbrHCNbHRrCO2mO9fQTvZUTw/k5EyXteHu8DRvDeaATvF0fwHnoE+xVE7L2vRfdj9rU4Yf+TuCr7dJ+c7Gftk9NjP6WIvAgP7LvluP3Zbjb7s6Xdto59/LzkTbbY7/Fro4lHE48mHk08mnj8DoLH72V4/K6Kl/qnbgAAAAAAAAAAAAAAAAAAAAAA+Ir+Ancwop73no07AAAAAElFTkSuQmCC" },
  Lebanon: { url: "https://cdn.britannica.com/73/2073-004-E54934AE/Flag-Lebanon.jpg" },
  Macao: { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Flag_of_Macau.svg/255px-Flag_of_Macau.svg.png" },
  Malaysisa: { url: "https://cdn.britannica.com/31/4031-004-82B0F3A9/Flag-Malaysia.jpg" },
  Maldives: { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Maldives.svg/2560px-Flag_of_Maldives.svg.png" },
  Mongolia: { url: "https://cdn.britannica.com/56/2756-004-54509464/Flag-Mongolia.jpg" },
  Myanmar: { url: "https://cdn.britannica.com/34/4034-004-B478631E/Flag-Myanmar.jpg" },
  Nepal: { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/1200px-Flag_of_Nepal.svg.png" },
  Oman: { url: "https://www.state.gov/wp-content/uploads/2018/08/Oman-Flag.gif" },
  Pakistan: { url: "https://cdn.britannica.com/46/3346-004-D3BDE016/flag-symbolism-Pakistan-design-Islamic.jpg" },
  Palestein: { url: "https://cdn.britannica.com/74/84674-004-C0E414EA/Flag-Palestinian-Authority-Palestine.jpg" },
  Philippines: { url: "https://cdn.britannica.com/73/3473-004-6E573BFA/Flag-Philippines.jpg" },
  Qatar: { url: "https://www.state.gov/wp-content/uploads/2018/08/Qatar-Flag.gif" },
  Saudi_Arabia: { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1280px-Flag_of_Saudi_Arabia.svg.png" },
  Singapore: { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/1200px-Flag_of_Singapore.svg.png" },
  Sri_Lanka: { url: "https://cdn.britannica.com/13/4413-004-3277D2EF/Flag-Sri-Lanka.jpg" },
  Syria: { url: "https://cdn.britannica.com/50/4550-004-7B368E09/Flag-Syria.jpg" },
  Taiwan: { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/640px-Flag_of_the_Republic_of_China.svg.png" },
  Tajikstan: { url: "https://www.worldatlas.com/img/flag/tj-flag.jpg" },
  Thailand: { url: "https://cdn.britannica.com/38/4038-004-111388C2/Flag-Thailand.jpg" },
  Timor_Leste: { url: "https://cdn.britannica.com/60/72760-050-4F87197C/Flag-of-East-Timor.jpg" },
  Turkmenistan: { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Turkmenistan.svg/2560px-Flag_of_Turkmenistan.svg.png" },
  United_Arab_Emirates: { url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAACACAMAAADzok/sAAAAIVBMVEX/AAAAcy////8AAABVonRUVFTAHAz/Pz/AAADVKB3VFRVVusOnAAAAsklEQVR4nO3PyQ2AMBAEsHCGpP+CqQH2gUbYHbi1mnPJVuz7fx0o8vf39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f3z+bv7+/v/87Ys1X/fc3m7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7++fzd/f39/f3/+5eWSr/q8tm7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/fzZ/f39/f/8//m8wasZBHv/7pwAAAABJRU5ErkJggg==" },
  Uzbekistan: { url: "https://cdn.britannica.com/47/7247-004-44F420D7/Flag-Uzbekistan.jpg" },
  Vietnam: { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2000px-Flag_of_Vietnam.svg.png" },
  Yemen: { url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAPFBMVEUAAAD////OESfNEicGBgb+//v+/f/EGSrQFirODCXp6enQCyXw8O/9/Pzo6eX///zo5+z29vbOFivIEiZzMpT+AAABuUlEQVR4nO3bS04CURBA0QftBxFBcf97FaIkNNd59+CcFVRuJTWrsWPmfD6P3bTdvm0nbr5vTfhziaLJo2na/Tbh5q7J0ttZiWuIW5OlZ1kNTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0qd8m10fa96U/WFfjWmI7Xnk0DhvmDmO/+Vh6iFX52OzH8fTMvdNxfL4w9zmOS+9ldY6Xe8LcXpPQpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qT242vpEVbnazwN5hT5jyqPnjQJTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNKlLEx79AAJ0/2huSCRaAAAAAElFTkSuQmCC" },
  //South America
  Argentina: { url: "https://i.ebayimg.com/images/g/dtoAAMXQiNdRcUIj/s-l500.jpg" },
  Bolivia: { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Bolivia_%28state%29.svg/2560px-Flag_of_Bolivia_%28state%29.svg.png" },
  Brazil: { url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png" },
  Chile: { url: "https://static.vecteezy.com/system/resources/previews/002/431/835/original/illustration-of-the-chile-flag-free-vector.jpg" },
  Colombia: { url: "https://cdn.britannica.com/68/7668-004-08492AB7/Flag-Colombia.jpg" },
  Ecuador: { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/2560px-Flag_of_Ecuador.svg.png" },
  Guyana: { url: "https://cdn.britannica.com/06/1106-004-F6772F48/Flag-Guyana.jpg" },
  Paraguay: { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Flag_of_Paraguay_%281842-1954%29.svg/2560px-Flag_of_Paraguay_%281842-1954%29.svg.png" },
  Peru: { url: "https://www.state.gov/wp-content/uploads/2018/08/peru-flag.gif" },
  Suriname: { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/255px-Flag_of_Suriname.svg.png" },
  Uruguay: { url: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg" },
  Venezuela: { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Venezuela_%281930%E2%80%932006%29.svg/220px-Flag_of_Venezuela_%281930%E2%80%932006%29.svg.png" },
  //Central American 
  Belize: { url: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg" },
  Costa_Rica: { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/255px-Flag_of_Costa_Rica.svg.png" },
  El_Salvador: { url: "https://cdn.britannica.com/10/7210-004-65DAD2F0/Flag-El-Salvador.jpg" },
  Guatemala: { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/2000px-Flag_of_Guatemala.svg.png" },
  Honduras: { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/255px-Flag_of_Honduras.svg.png" },
  Nicaragua: { url: "https://cdn.britannica.com/19/7219-004-8AB96369/Flag-Nicaragua.jpg" },
  Panama: { url: "https://www.crwflags.com/fotw/images/p/pa.gif" },
  Cuba: { url: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg" },
  Haiti: { url: "https://www.state.gov/wp-content/uploads/2018/08/haiti-flag.gif" },
  Bahamas: { url: "https://media.istockphoto.com/id/1141056337/vector/bahamas-flag-icon-in-flat-style-national-sign-vector-illustration-politic-business-concept.jpg?s=612x612&w=0&k=20&c=-x70qZmoW9wLU56d9ui4tlGKSdDvvUtu3PQT6tK5MEM=" },
  Barbados: { url: "https://cdn.britannica.com/08/5108-004-FD58C8EF/Flag-Barbados.jpg" },
  Saint_Vincent: { url: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg" },
  Antigua_and_Barbuda: { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Antigua_and_Barbuda.svg/800px-Flag_of_Antigua_and_Barbuda.svg.png" },
  Dominica: { url: "https://cdn.britannica.com/12/5112-050-2A5C6946/Flag-Dominica.jpg" },
  Trinidad_and_Tobago: { url: "https://cdn.britannica.com/28/5128-004-2809EB66/Flag-Trinidad-and-Tobago.jpg" },
  Puerto_Rico: { url: "https://cdn.britannica.com/30/5130-004-7653391E/Flag-Puerto-Rico.jpg" },
  Jamaica: { url: "data:image/png;base64,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" },
  Saint_Lucia: { url: "https://www.state.gov/wp-content/uploads/2018/08/saintlucia-flag.gif" },
  //North America
  United_States: { url: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" },
  Canada: { url: "https://www.worldatlas.com/img/flag/ca-flag.jpg" },
  Mexico: { url: "https://mexicanappetizersandmore.com/wp-content/uploads/2016/07/Mexico_flag-3.jpg" },
  Grenada: { url: "https://cdn.shopify.com/s/files/1/0399/6198/5173/products/grenada_tnnew_1400x.jpg?v=1591628744" }, //needs fixing
  Greenland: { url: "data:image/png;base64,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" },
  //Oceania https://www.worldometers.info/geography/how-many-countries-in-oceania/
  Australia: { url: "https://pixelz.cc/wp-content/uploads/2018/11/australia-flag-uhd-4k-wallpaper-768x432.jpg" },
  Papa_New_Guinea: { url: "https://cdn.shopify.com/s/files/1/0690/6812/8571/products/papua-new-guinea-flag__56795.1639690374.1280.1280.jpg?v=16733910612" },
  New_Zealand: { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/800px-Flag_of_New_Zealand.svg.png" },
  Fiji: { url: "https://cdn.britannica.com/86/3286-004-ADA8C1B4/Flag-Fiji.jpg" },
  Solomon_Islands: { url: "https://cdn.shopify.com/s/files/1/0690/6812/8571/products/solomon-islands-flag__15114.1639690376.1280.1280.jpg?v=1673391412" },
  Micronesia: { url: "data:image/jpeg;base64,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" },
  Vanuatu: { url: "https://m.media-amazon.com/images/I/51oU5ex1bWL.jpg" },
  Samoa: { url: "https://cdn.shopify.com/s/files/1/0690/6812/8571/products/western-samoa-flag__21795.1639690375.1280.1280_grande.jpg?v=1673391211" },
  Kiribati: { url: "https://cdn.britannica.com/88/3288-004-1F9FDA41/Flag-Kiribati.jpg" },
  Tonga: { url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAwFBMVEXCAAD////CAAHDBga/AAD///3//P7BAASuMDL6//////q5AADeqqj+//////yzAADivLv66eq/SUzqwr+uAADIAAGkAAD/+vW6Q0XlrKf519DToqKpAAD2///KAACeAADt//////L3//j/+f/s3NvMn5f58/LjurT75eHgvbL56uHmu7766t741tf/0c/mm5mlOTqUAADwpKjCRkHlrqboqqvqw7PwvrjeiojwrbDfy8KqQkCxO0TqrqOpMjW1IyGJj75UAAAEtklEQVR4nO3dDVPbNgDGcctISiVVdrtYCd3s0JBtbShj7XjZW9d+/281O2wlxiIkebYFz8//Do4jic/+nWKDbEwiDpsyworn8qinJU+Cz8nelab1p6fCl/axp8OXHJpi55o1Jt/eJc0qk2/fksZvHz5vrBaVVd1H5pW2Sut9+HpYuufoU1b5b7+J9N33C5vtuKz+8iV77vuUr8yLMu/kTl7quTaGfBu3WHnj34SQhPu5t9Vce/JtzJt697bM09H90vzstdUmslMk3xpfteLrHixDcVYpVQ3l0LEvn9deLV3oLi9/KbSpOPo2l2VGvIhtcc1nGxDyke/xyAdFPijyQZEPinxQ5IMiHxT5oMgHRT6obfiU9spam33JKmF1zSe7y3NnRmVKZGtZU5lswxT0/5zPnypzfwZPV96/kzG+c6+t8utlwmgdOy8yDD6l6k2vKt/6ZlWZ6Ogr3mpv25P1un65F+2XD4jPe/vDxcXF1+0uLn7MI3yT8+l0Op+2mk9Vpe1Q+Yyx7ydFXpbl5K+PcnJSFkWeRvjSsjypnzNZ78OH50LNh8rnF/NL6VyY3RVkSIJzo+7yjlySpy5xa9XP/sno08Hy6fllSNpnhEJwSXqURpYXZrLBXWuUF9eVHuyRV3lxnIYI1ZaNQvFKDHffVx84yfdA5IMiHxT5oLbmi/yMt2Xk4+h7IPJBkQ+KfFDkg+KRF2rL33llmsjWnIGUMolc3tfMLEjXvuLUzfIh89Udy1HrzRtmMbrV8lYPrT8aXJJfGTHYyXrzuubrTE6lIxebrG/opGtbzNy194OdrK837zIk7Qk/KUN8BDrnjo5c6+3rkvKVGO7oszY7dqP2SAtp7RQ705a4PJ21D9NOlldCDHa2WU3FxzKXeXFX7opJmceWN5Nl6VxRtJ58ci2GO1kvdDW+GS/H690slz//UkRGX/nrePyu9dTx8ubmrNKDffOK6Dla/+BFGirygocPHAPg68ZrXG4jHxT5oMgHRT4o8kGRD4p8UOSDIh8U+aDIB0U+KPJBkQ+KfFDkg/pX+AT5Nm9xZirxxiXd26GW56c6I98jW6y08b/9/lW3j2dmYTed2SCfEF4JdRr9I8lpphfG8BZgm/lMlmXNn0neT9R0mnyPZbLmBqURJeONVuR7pMwbr2139HmrKzOwm2+q3cuU98pmppOqx5+uH9s+IbRdmKv+8unDZqanvebbY/T9kwk7X4g/ohccPfkavmeH7dOzT5/ef54dWmKvGr6QHvSG56G5HjXpL1+td8hVkM2/6nD93fcddW6//J92e6Fv5L4IPWjFJ9P0oOOvv33ho98+kQ+KfFDkgyIfFPmgyAdFPijyQZEPinxQ5IMiHxT5oMgHRT4o8kGRD4p8UOSDIh8U+aDIB0U+KPJBkQ+KfFDkgyIfFPmgyAdFPijyQZEPinxQ5IMiHxT5oMgHRT4o8kGRD4p8UOSDIh8U+aDIB0U+KPJBkQ+KfFDkgyIfFPmgyAdFPijyQZEPinxQ5IMiHxT5oMgHRT4o8kGRD4p8UOSDuuOj3+7VajXfii5lO7ZCW/Gl5Nu9v0ff6r7Nh16Z/tWQrfZ98tBr0tfkLZ9svmK7tTKr+RjQn82ksg6JxSZ8AAAAAElFTkSuQmCC" },
  Marshall_Islands: { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_the_Marshall_Islands.svg/255px-Flag_of_the_Marshall_Islands.svg.png" },
  Palau: { url: "https://cdn.britannica.com/49/3349-004-6152ED8A/Flag-Palau.jpg" },
  Tuvalu: { url: "https://cdn.britannica.com/03/3303-004-C17F03F9/Flag-Tuvalu.jpg" },
  Nauru: { url: "https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Nauru.svg" },
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