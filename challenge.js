document.addEventListener("DOMContentLoaded", function() {
  const ref = {};
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


  function addLike () {

    let num = timer.innerHTML;

    if (ref.hasOwnProperty(num)) {ref[num]++}
    else {ref[num] = 1}

    x = getElementById("likes")
    x.innerHTML = ref

    //ABOVE CODE CORRECTLY POPULATES OUR REF OBJECT WHICH HOLDS KEY (TIMER NUMBER) - VALUE (NUMBER OF LIKES) PAIRS


    //BELOW CODE WAS PARTIAL ATTEMPT TO CREATE NEW LINES IN HTML
    // // create a new div element
    // var newDiv = document.createElement("div");
    // // and give it some content
    // var newContent = document.createTextNode(`Number ${num} has ${likeNum} likes.`);
    // // add the text node to the newly created div
    // newDiv.appendChild(newContent);
    //
    // // add the newly created element and its content into the DOM
    // var currentDiv = document.getElementById("likes");
    // document.body.insertBefore(newDiv, currentDiv);
  }


});
