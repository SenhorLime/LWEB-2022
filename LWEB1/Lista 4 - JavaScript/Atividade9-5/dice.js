// Declaração e inicialização de variaveis
var dice1Image;
var dice2Image;
var dice3Image;
var dice4Image;

// Inicio da função
function start() {
  var button = document.getElementById("rollButton");

  button.addEventListener("click", rollDice, false);

  dice1Image = document.getElementById("dice1");
  dice2Image = document.getElementById("dice2");
  dice3Image = document.getElementById("dice3");
  dice4Image = document.getElementById("dice4");
}// FIm da função

// Inicio da função
function rollDice() {
  // Definindo a imagem
  setImage(dice1Image);
  setImage(dice2Image);
  setImage(dice3Image);
  setImage(dice4Image);
}// Fim da função

// Inicio da função
function setImage(diceImg) {
  // Sorteia um numero aleatorio para a face do dado
  var diceValue = Math.floor(1 + Math.random() * 6);

  diceImg.setAttribute("src", "diceImg/dice" + diceValue + ".png");
  diceImg.setAttribute("alt", "dice image with " + diceValue + " spot(s)");
}

window.addEventListener("load", start, false);
