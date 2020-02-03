/* Game cheat code */
/* document.addEventListener('keydown', event =>{
  console.log('keydown', event.key, event.keyCode);
  if(event.keyCode === 72 && event.keyCode === 69){
    alert('Welcome brother');
  }
}); */

/* x and y coordinates on mouse double clicks */
document.getElementById("jaa").ondblclick = function() {fun();};

const fun = () =>{
  document.querySelector('body').addEventListener('click', (event) => {
    let x = event.clientX;
    let y = event.clientY;
    const coords ='X: ' +x+ '\tY: ' +y;
    document.getElementById("demo").innerHTML = coords;
  });
};

/* element that reacts to touches but not clicks */
document.addEventListener('keydown', event =>{
  console.log('key pressed:', event.key, event.keyCode);
});

/* timer 15s browsing */
setTimeout(() => alert("Hurry up!"), 10000);

/* timer 15s idling */
