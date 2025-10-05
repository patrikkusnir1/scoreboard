// score at the start of the game 
let homeScore = 0;
let guestScore = 0;
let intervalId;
let timer; // hold remaining time in seconds

// show initial values
document.getElementById("home-score").textContent = homeScore;
document.getElementById("guest-score").textContent = guestScore;
document.getElementById("timer").textContent = "48:00";

// Score functions

function homeAdd1() {
  homeScore += 1;
  document.getElementById("home-score").textContent = homeScore;
}

function homeAdd2() {
  homeScore += 2;
  document.getElementById("home-score").textContent = homeScore;
}

function homeAdd3() {
  homeScore += 3;
  document.getElementById("home-score").textContent = homeScore;
}

function guestAdd1() {
  guestScore += 1;
  document.getElementById("guest-score").textContent = guestScore;
}

function guestAdd2() {
  guestScore += 2;
  document.getElementById("guest-score").textContent = guestScore;
}

function guestAdd3() {
  guestScore += 3;
  document.getElementById("guest-score").textContent = guestScore;
}

function reset() {
  homeScore = 0;
  guestScore = 0;
  document.getElementById("guest-score").textContent = guestScore;
  document.getElementById("home-score").textContent = homeScore;
}

// Timer function
function startTimer(display) {
  intervalId = setInterval(function() {
    let minutes = parseInt(timer / 60, 10);
    let seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(intervalId); // stop at 00:00
    }
  }, 1000);
  }

  window.onload = function() {
    let display = document.getElementById("timer");
    timer = 60 * 48; // 60 minutes


    // start or resume
    document.getElementById("start").addEventListener("click", function () {
      if (!intervalId) {
        startTimer(display);
      }
    });

    // Stop or pause
    document.getElementById("stop").addEventListener("click", function () {
      clearInterval(intervalId);
      intervalId = null; // so we know it is stopped
    });
    document.getElementById("timer-reset").addEventListener("click", function () {
            clearInterval(intervalId);
            intervalId = null;
            timer = 60 * 48;
            display.textContent = "48:00";
          });
      };
  