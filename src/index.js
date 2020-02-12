/* Game cheat code */
document.addEventListener('keydown', event =>{
  console.log('keydown', event.key, event.keyCode);
  if(event.keyCode === 72){
    alert('Secret unlocked');
  }
});

const cheat = (word) =>{
  let keyPresses = new Array(word.length);
  document.addEventListener('keypress', event =>{
    keyPresses.shift();
    keyPresses.push(event.key);
    if (keyPresses.join('').toLowerCase() === word.toLowerCase()){
      alert("Correct cheat code");
    }
  });
};
cheat('Hello');

/* const map = {};
onkeydown = onkeyup = (e) =>{
  e = e || event;
  map[e.keyCode] = e.type == 'keydown';
  if(map[72] && map[69] && map[76] && map[76] && map[79]){
    alert('Hello');
  }
};

test.innerHTML = '';
let i, l = map.lenght;
for(i = 0; i<l; i++){
  if(map[i]){
    Element.innerHTML += '<hr>' +i;
  }
} */



/* x and y coordinates on mouse double clicks */
document.getElementById("test").ondblclick = () => {fun();};

const fun = () =>{
  document.querySelector('body').addEventListener('dblclick', (event) => {
    let x = event.clientX;
    let y = event.clientY;
    //console.log('X: ' +x+ '\tY: ' +y);

    /* näkyy html */
    const coords ='Mouse coordinates: X: ' +x+ '\tY: ' +y;
    document.getElementById("demo").innerHTML = coords;
  });
};

/* element that reacts to touches but not clicks */
  document.addEventListener('keydown', event =>{
    console.log('key pressed:', event.key, event.keyCode);
  });


/* timer 15s browsing */
const timer = () =>{
  setTimeout(() => {
    alert('hurry up!');
  }, 15000);
};
timer();

/* timer 15s idling */
const timer2 = (duration) =>{
  let timer;
  const resetTimer = (event) =>{
    clearTimeout(timer);
    timer = setTimeout(() =>{
      alert('do something');
    },duration * 1000);
};
resetTimer();

document.addEventListener('keypress', resetTimer);
document.addEventListener('mousemove', resetTimer);
};
timer2(15);
