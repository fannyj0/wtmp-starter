const highnum = 20;
const lownum = 1;

let randomNumber = Math.floor(Math.random() * highnum) + lownum;
console.log("random numer " + randomNumber);

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
let startTime;
let endTime;

let checkGuess = () => {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    startTime = Date.now();
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    const endTime = Date.now();
    const totalTime = Math.trunc((endTime - startTime) / 1000);
    lastResult.textContent = 'Congratulations! You got it right! Number of your guesses: '  +guessCount + ' and time: ' + totalTime +'seconds';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    document.getElementById("timer").style.display = "none";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    document.getElementById("timer").style.display = "none";
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
};


guessSubmit.addEventListener('click', checkGuess);

let setGameOver = () => {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
};

let resetGame = () => {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * highnum) + lownum;
};

/*
let startTime = Math.floor(Date.now() / 1000); //Get the starting time (right now) in seconds

let startTimeCounter = () => {
    let now = Math.floor(Date.now() / 1000); // get the time now
    let diff = now - startTime; // diff in seconds between now and start
    let m = Math.floor(diff / 60); // get minutes value (quotient of diff)
    let s = Math.floor(diff % 60); // get seconds value (remainder of diff)
    m = checkTime(m); // add a leading zero if it's single digit
    s = checkTime(s); // add a leading zero if it's single digit
    document.getElementById("timer").innerHTML = m + ":" + s; // update the element where the timer will appear
    let t = setTimeout(startTimeCounter, 500); // set a timeout to update the timer
    document.getElementById("timer").style.display = "block";

};

function checkTime(i) {  // add zero in front of numbers < 10
    if (i < 10) {
      i = "0" + i;
    };
    return i;
}

function stopTimeCounter(){
  endTime = (startTimeCounter - Date.now());
  return document.getElementById("timer").innerHTML = endTime;
}


guessSubmit.addEventListener('click', startTimeCounter);

resetButton.addEventListener('click', startTimeCounter);

*/





