document.addEventListener("DOMContentLoaded", function() {
  let timer = document.getElementById('counter');
  let increment = document.getElementById('+').addEventListener('click', incrementTime);
  let decrement = document.getElementById('-').addEventListener('click', decrementTime);
  let pause = document.getElementById('pause').addEventListener('click', togglePause);
  let paused = false;

  let timerStart = setInterval(incrementTime, 1000);

  function togglePause() {
    console.log('PAUSE TOGGLE');
    if (!paused) {
      clearInterval(timerStart);
      paused = true;
    } else {
      timerStart = setInterval(incrementTime, 1000);
      paused = false;
    }
  }

  function incrementTime() {
    timer.innerHTML++;
  }

  function decrementTime() {
    timer.innerHTML--;
  }
});
