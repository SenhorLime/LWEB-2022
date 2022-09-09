var dice1Image;
var dice2Image;
var dice3Image;
var dice4Image;

function start() {
  var button = document.getElementById("rollButton");

  button.addEventListener("click", rollDice, false);

  dice1Image = document.getElementById("dice1");
  dice2Image = document.getElementById("dice2");
  dice3Image = document.getElementById("dice3");
  dice4Image = document.getElementById("dice4");
}

function rollDice() {
  setImage(dice1Image);
  setImage(dice2Image);
  setImage(dice3Image);
  setImage(dice4Image);
}

function setImage(diceImg) {
  var diceValue = Math.floor(1 + Math.random() * 4);

  diceImg.setAttribute("src", "diceImg/dice" + diceValue + ".png");
  diceImg.setAttribute("alt", "dice image with " + diceValue + " spot(s)");
}

window.addEventListener("load", start, false);
