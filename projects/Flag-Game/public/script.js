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
  Belize: { url: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg" },
  Costa_Rica: { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/255px-Flag_of_Costa_Rica.svg.png" },
  El_Salvador: { url: "https://cdn.britannica.com/10/7210-004-65DAD2F0/Flag-El-Salvador.jpg" },
  Guatemala: { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/2000px-Flag_of_Guatemala.svg.png" },
  Honduras: { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/255px-Flag_of_Honduras.svg.png" },
  Nicaragua: { url: "https://cdn.britannica.com/19/7219-004-8AB96369/Flag-Nicaragua.jpg" },
  Panama: { url: "https://www.crwflags.com/fotw/images/p/pa.gif" },
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