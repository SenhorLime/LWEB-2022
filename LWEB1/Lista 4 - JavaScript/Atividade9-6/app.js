// Declaração e inicialização de variaveis
var frequency1 = 0;
var frequency2 = 0;
var frequency3 = 0;
var frequency4 = 0;
var frequency5 = 0;
var frequency6 = 0;
var totalDice = 0;
var completeRoll;

// Inicio da função
function start() {
  var button = document.getElementById("rollButton");

  button.addEventListener("click", rollDice, false);
}// Final da função

// Inicio da função
function rollDice() {
  // Declaração da variavel
  var face;

  // Inicio do for
  for (var i = 1; i <= 12; i++) {
    // Gera um numero aleatorio que define a face do lado
    face = Math.floor(1 + Math.random() * 6);

    tallyRolls(face);

    setImage(i, face);

    completeRoll = totalDice++;
  }// Final do for

  updateFrequencyTable();
}// Fim do for

// Inicio da função
function tallyRolls(face) {
  // Inicio do switch
  switch (face) {
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
  }// Fim do switch
}// Fim da função

// Inicio da função
function setImage(diceNumber, face) {
  // Define qual face do dado vai aparecer
  var diceImg = document.getElementById("dice" + diceNumber);

  diceImg.setAttribute("src", "diceImg/dice" + face + ".png");
  diceImg.setAttribute("alt", "dice with " + face + "spot(s)");
}// Fim da função

// Inicio da função
function updateFrequencyTable(totalDice) {
  // Define como a tabela de frequencia deve aparecer
  var tableDiv = document.getElementById("tableValue");

  tableDiv.innerHTML =
    "<tr><td>1</td><td>" +
    frequency1 +
    "</td><td>" +
    formatPercent(frequency1 / completeRoll) +
    "</td></tr>" +
    "<tr><td>2</td><td>" +
    frequency2 +
    "</td><td>" +
    formatPercent(frequency2 / completeRoll) +
    "</td></tr>" +
    "<tr><td>3</td><td>" +
    frequency3 +
    "</td><td>" +
    formatPercent(frequency3 / completeRoll) +
    "</td></tr>" +
    "<tr><td>4</td><td>" +
    frequency4 +
    "</td><td>" +
    formatPercent(frequency4 / completeRoll) +
    "</td></tr>" +
    "<tr><td>5</td><td>" +
    frequency5 +
    "</td><td>" +
    formatPercent(frequency5 / completeRoll) +
    "</td></tr>" +
    "<tr><td>6</td><td>" +
    frequency6 +
    "</td><td>" +
    formatPercent(frequency6 / completeRoll) +
    "</td></tr>";
}// Fim da função

// Inicio da função
function formatPercent(value){
  value *= 100;
  return value.toFixed(2);
}// Fia da função

window.addEventListener("load", start, false);