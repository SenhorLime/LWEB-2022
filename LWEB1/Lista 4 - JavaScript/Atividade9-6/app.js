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
}

function rollDice() {
  var diceValue;

  for (var i = 0; i <= 12; i++) {
    diceValue = Math.floor(1 + Math.random() * 6);

    tallyRolls(diceValue);
    setImage(i, diceValue);

    totalDice++;
  }

  updateFrequencyTable();
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

function setImage(diceNumber, diceValue) {
  var diceImg = document.getElementById("dice" + diceNumber);

  diceImg.setAttribute("src", "dice" + diceValue + ".png");
  diceImg.setAttribute("alt", "dice with " + diceValue + "spot(s)");
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

function formatPercent(value) {
    value *= 100;
    return value.toFixed(2);
}

window.addEventListener("load", start, false);
