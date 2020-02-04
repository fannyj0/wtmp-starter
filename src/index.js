/* Game cheat code */
/* document.addEventListener('keydown', event =>{
  console.log('keydown', event.key, event.keyCode);
  if(event.keyCode === 72 && event.keyCode === 69){
    alert('Secret unlocked');
  }
}); */

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
  if(fun === true){
  console.log("hurry up!");
  }
};
setTimeout(timer, 5000);

/* timer 15s idling */
/* setTimeout(() => alert("Hurry up!"), 5000);
 */
