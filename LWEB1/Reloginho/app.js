function Hour() {
  let date = new Date();
  let hour = date.getHours();

  hour = hour < 10 ? "0" + hour : hour;

  hour = hour + ":"

  if(screen.width < 600){
    hour = hour
  }

  document.getElementById("hour").innerText = hour;

  let h = setTimeout(function () {
    Hour();
  }, 1000);
}
Hour();

function Minute() {
  let date = new Date();
  let minute = date.getMinutes();

  minute =  minute + ":"

  if(screen.width < 600){
    minute =  minute
  }

  document.getElementById("minute").innerText = minute;

  let m = setTimeout(function () {
    Minute();
  }, 1000);
}
Minute();

function Second() {
  let date = new Date();
  let second = date.getSeconds();

  second = second < 10 ? "0" + second : second;

  document.getElementById("second").innerText = second;

  let s = setTimeout(function () {
    Second();
  }, 1000);
}
Second();
