const meals =
[
    {name: 'Lingonberry jam', price: 4.00},
    {name: 'Mushroom and bean casserole', price: 5.50},
    {name: 'Chili-flavoured wheat', price: 3.00},
    {name: 'Vegetarian soup', price: 4.80},
    {name: 'Pureed root vegetable soup with smoked cheese', price: 8.00}
];

/* //////////////////// Huvikseen ///////////////////////*/
let textfield;
let output;
let submit;

const newText = () =>{
  const s = textfield = document.querySelector("#input").value;
  const r = /^[A-ZÖÄÅ]{1}[a-zöäå,A-ZÖÄÅ/0-9()-\s]{4,64}$/;
  document.getElementById("output").innerHTML = r.test(s);
};

const setup = () =>{
  textfield = document.querySelector("#input");
  output = document.querySelector('#output');
  submit = document.querySelector("#submit");
  submit.onclick = function() {newText();};
};
setup();

// 1. kohta
meals.forEach( food => {
  const r = /^[A-ZÖÄÅ]{1}[a-zöäå,A-ZÖÄÅ/0-9()-\s]{4,64}$/;
  const test = r.test(food.name);
  if(!test){
    console.log(food.name + ' is not valid');
  }else{
    console.log('All names are valid');
  }
});

//2. kohta: sort
let sortedMeals = meals.sort((a, b) => {
  return a.price - b.price;
});
console.log('Sorted meals', sortedMeals);

//3. kohta: filter
const filrered = meals.filter(e => e.price < 5);
console.log('Filtered meals', filrered);

//4. kohta: map
const raised = meals.map(n => (n.price * 1.15).toFixed(2));
console.log('Raised meals', raised);

//5. kohta: reduce
const sum = meals.reduce((a, b) => ({price: a.price + b.price}));
console.log('Whole menu', sum);
