var dice1Image;
var dice2Image;
var dice3Image;
var dice4Image;
var dice5Image;
var dice6Image;
var dice7Image;
var dice8Image;
var dice9Image;
var dice10Image;
var dice11Image;
var dice12Image;

var frequency1 = 0;
var frequency2 = 0;
var frequency3 = 0;
var frequency4 = 0;
var frequency5 = 0;
var frequency6 = 0;
var totalDice = 0;

function start() {
  var button = document.getElementById("rollButton");

  button.addEventListener("click", rollDice, false);

  dice1Image = document.getElementById("dice1");
  dice2Image = document.getElementById("dice2");
  dice3Image = document.getElementById("dice3");
  dice4Image = document.getElementById("dice4");
  dice5Image = document.getElementById("dice5");
  dice6Image = document.getElementById("dice6");
  dice7Image = document.getElementById("dice7");
  dice8Image = document.getElementById("dice8");
  dice9Image = document.getElementById("dice9");
  dice10Image = document.getElementById("dice10");
  dice11Image = document.getElementById("dice11");
  dice12Image = document.getElementById("dice12");
}

function rollDice() {
  setImage(dice1Image);
  setImage(dice2Image);
  setImage(dice3Image);
  setImage(dice4Image);
  setImage(dice5Image);
  setImage(dice6Image);
  setImage(dice7Image);
  setImage(dice8Image);
  setImage(dice9Image);
  setImage(dice10Image);
  setImage(dice11Image);
  setImage(dice12Image);
}

function setImage(diceImg) {
  var diceValue = Math.floor(1 + Math.random() * 6);

  diceImg.setAttribute("src", "diceImg/dice" + diceValue + ".png");
  diceImg.setAttribute("alt", "dice image with " + diceValue + " spot(s)");
}

function tallyRolls(diceValue) {
  switch (diceValue) {
    case 1:
      frequency1++;
      break;

    case 2:
      frequency2++;
      break;

    case 3:
      frequency3++;
      break;

    case 4:
      frequency4++;
      break;

    case 5:
      frequency5++;
      break;

    case 6:
      frequency6++;
      break;
  }
}

function updateFrequencyTable() {
  var tableDiv = document.getElementById("frequencyTableDiv");

  tableDiv.innerHTML =
    "<table>" +
    "<caption>Dice Rolling Frequency</caption>" +
    "<thead><th>Face</th> <th>Frequency</th>" +
    "<th>Percent</th></thead>" +
    "<tbody><tr><td>1</td><td>" +
    frequency1 +
    "</td><td>" +
    formatPercent(frequency1 / totalDice) +
    "</td></tr>" +
    "<tr><td>" +
    frequency2 +
    "</td><td>" +
    formatPercent(frequency2 / totalDice) +
    "</td></tr>" +
    "<tr><td>" +
    frequency3 +
    "</td><td>" +
    formatPercent(frequency3 / totalDice) +
    "</td></tr>" +
    "<tr><td>" +
    frequency4 +
    "</td><td>" +
    formatPercent(frequency4 / totalDice) +
    "</td></tr>" +
    "<tr><td>" +
    frequency5 +
    "</td><td>" +
    formatPercent(frequency5 / totalDice) +
    "</td></tr>" +
    "<tr><td>" +
    frequency6 +
    "</td><td>" +
    formatPercent(frequency6 / totalDice) +
    "</td></tr>" +
    "</tbody></table>";
}


window.addEventListener("load", start, false);

console.log(frequency6);