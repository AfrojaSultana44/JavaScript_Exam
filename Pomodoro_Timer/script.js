let minutes = 25;
let seconds = 0;
let timer;
let isTimerRunning = false;

function startTimer() {
  if (!isTimerRunning) {
    timer = setInterval(updateTimer, 1000);
    isTimerRunning = true;
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('resetBtn').style.display = 'inline';
  }
}

function updateTimer() {
  if (minutes === 0 && seconds === 0) {
    clearInterval(timer);
    isTimerRunning = false;
    document.getElementById('startBtn').style.display = 'inline';
    document.getElementById('resetBtn').style.display = 'none';
    alert('Pomodoro completed! Take a break.');
  } else {
    if (seconds === 0) {
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }

    document.getElementById('timer').innerText = `${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}`;
  }
}

function resetTimer() {
  clearInterval(timer);
  isTimerRunning = false;
  minutes = 25;
  seconds = 0;
  document.getElementById('timer').innerText = '25:00';
  document.getElementById('startBtn').style.display = 'inline';
  document.getElementById('resetBtn').style.display = 'none';
}
