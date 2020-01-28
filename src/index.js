/*Best algorithm would be binary algorithm where the computer first asks 50 and
then if it is too high then 25 and so on halving it, or if it's too low it asks
75 and adds more to it*/

import {StartGame, checkGuess, resetGame} from './modules/guess-game';

StartGame();


const testGamePlay = () => {
  let guessCounter = 0;
  let myGuess = 50;
  let gameOver = false;
  while(!gameOver){
    //console.log(myGuess);
    let correctGuess = checkGuess(myGuess);
    guessCounter ++;
    if(correctGuess === 0){
      gameOver = true;
      resetGame();
    }else if (correctGuess < 0){
      //myGuess += 25; //too low, ask 75
      myGuess++;
    }else{
      //myGuess -= 25; //too high, ask 25
      myGuess--;
    }
  }
  return guessCounter;
};
//testGamePlay();

let DONE = RIGHT = 0, HIGH = 1, LOW = -1;

const compGuess = (low, high) =>{
  let g = Math.floor((low + high) / 2);
  let result = getResult(g);
  switch (result){
    case RIGHT:
      return DONE;
    case LOW:
      return compGuess(g + 1, high);
    case HIGH:
      return compGuess(low, g - 1);
  }
};


let guessCounts = [];
for(let i=0; i<10; i++){
  guessCounts.push(testGamePlay());
}
console.log('guess counts', guessCounts);
//guessCounts.length; arrayn koko

let maxGuessCount = Math.max(...guessCounts);
console.log(maxGuessCount);

