document.addEventListener("DOMContentLoaded", function() {
  let timer = document.getElementById('counter');
  let pauseButton = document.getElementById('pause');
  let buttonArr = document.getElementsByClassName('disable');
  document.getElementById('+').addEventListener('click', incrementTime);
  document.getElementById('-').addEventListener('click', decrementTime);
  document.getElementById('pause').addEventListener('click', togglePause);
  document.getElementById('<3').addEventListener('click', addLike);

  let paused = false;

  let timerStart = setInterval(incrementTime, 1000);

  function togglePause() {
    if (!paused) {
      clearInterval(timerStart);
      paused = true;
      pauseButton.innerHTML = 'resume';
      // DISABLE ALL OTHER BUTTONS
      for (let i = 0; i < buttonArr.length; i++) {
        buttonArr[i].disabled = true;
      }
    } else {
      timerStart = setInterval(incrementTime, 1000);
      paused = false;
      pauseButton.innerHTML = 'pause';
      // ENABLE ALL OTHER BUTTONS
      for (let i = 0; i < buttonArr.length; i++) {
        buttonArr[i].disabled = false;
      }
    }
  }

  function incrementTime() {
    timer.innerHTML++;
  }

  function decrementTime() {
    timer.innerHTML--;
  }

  function addLike() {
    // if within this document we can get an element with the id of this number
    // then add a like to the associated number
    let num = timer.innerHTML;
    let newContent = `Number ${num} has ${likeNum} likes.`;
    let likeNum = 1;

    let newLi = document.createElement('li');
    let newContent = document.createTextNode(newContent);

    // otherwise create a new element with that number and add a like to it
  }
});
