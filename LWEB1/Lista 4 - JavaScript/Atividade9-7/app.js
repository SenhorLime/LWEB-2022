// Declaração e inicialização de variaveis
var pointDice1Img;
var pointDice2Img;
var rollDice1Img;
var rollDice2Img;
var messages;
var playButton;
var rollButton;
var diceRolling;

var myPoint;
var dice1Value;
var dice2Value;

// Inicio da função
function startGame() {
  diceRolling = document.getElementById("diceRolling");
  pointDice1Img = document.getElementById("pointDice1");
  pointDice2Img = document.getElementById("pointDice2");
  rollDice1Img = document.getElementById("rollDice1");
  rollDice2Img = document.getElementById("rollDice2");
  messages = document.getElementById("messages");
  playButton = document.getElementById("play");
  rollButton = document.getElementById("roll");

  rollButton.disabled = true;
  setImage(pointDice1Img);
  setImage(pointDice2Img);
  setImage(rollDice1Img);
  setImage(rollDice2Img);

  myPoint = 0;
  firstRoll();
}// Fim da função

// Incio da função
function firstRoll(){
  var sumOfDice = rollDice();

  switch(sumOfDice){
    case 7: case 11:
      messages.innerHTML = "You win!!! Click play to play again";
      break;

    case 2: case 3: case 12:
      messages.innerHTML = "Sorry. You lose. Click Play to play again.";
      break;

    default:
      myPoint = sumOfDice;
      setImage(pointDice1Img, dice1Value);
      setImage(pointDice2Img, dice2Value);
      messages.innerHTML = "Roll Again!";
      rollButton.disabled = false;
      playButton.disabled = true;
      break;
  }
}// Fim da função

// Inicio da função
function rollAgain(){
  var sumOfDice = rollDice();

  if(sumOfDice == myPoint){
    messages.innerHTML = "You win!!! Click play to play again";
    rollButton.disabled = true;
    playButton.disabled = false;
  }else if(sumOfDice == 7){
    messages.innerHTML = "Sorry. You lose. Click Play to play again.";
    rollButton.disabled = true;
    playButton.disabled = false;
  }
}// Fim da função

// Inicio da função
function rollDice(){
  diceRolling.play();

  dice1Value = NaN;
  dice2Value = NaN;
  showDice();

  dice1Value = Math.floor(1 + Math.random() * 6);
  dice2Value = Math.floor(1 + Math.random() * 6);

  return dice1Value + dice2Value;
}// Fim da função

// Inicio da função
function showDice(){
  setImage(rollDice1Img, dice1Value);
  setImage(rollDice2Img, dice2Value);
}// Inicio da função

// Inicio da função
function setImage(diceImg, diceValue){
  if(isFinite(diceValue)){
    diceImg.src = "diceAssets/dice" + diceValue + ".png";
  }else{
    diceImg.src = "diceAssets/blank.png";
  }
}// Fim da função

// Inicio da função
function start(){
  var playButton = document.getElementById("play");
  playButton.addEventListener("click", startGame, false);

  var rollButton = document.getElementById("roll");
  rollButton.addEventListener("click", rollAgain, false);

  var diceSound = document.getElementById("diceRolling");
  diceSound.addEventListener("ended", showDice, false);
}// Fim da função

window.addEventListener("load", start, false);