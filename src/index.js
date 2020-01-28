const meals =
[
    {name: 'Lingonberry jam', price: 4.00},
    {name: 'Mushroom and bean casserole', price: 5.50},
    {name: 'Chili-flavoured wheat', price: 3.00},
    {name: 'Vegetarian soup', price: 4.80},
    {name: 'Pureed root vegetable soup with smoked cheese', price: 8.00}
];


let textfield;
let output;
let submit;

const setup = () =>{
  noCanvas();
  textfield = select("#input");
  //textfield.changed(newText);
  output = select('#output');
  submit = select("#submit");
  submit.mousePressed(newText);
};

const newText = () =>{
  const s = textfield.value();
  const r = /[A-ZÖÄÅ]{1}[a-zöäå]{4, 64}[,\/\W\-]/;
  //const r = new RegExp ('[A-ZÖÄÅ]{1}[a-zöäå]{4, 64}[,\/\W\-]');
  document.getElementById("output").innerHTML = r.test(s);
};
/*
const valid = () => {   //ei toimi??
  const r = /^[A-ZÖÄÅ]{1}[a-zöäå]{4, 64}\W\d$/;
  name.test(r);
  return true;
};
*/
let sortedMeals = meals.sort((a, b) => {
  return a.price - b.price;
});
console.log('Sorted meals', sortedMeals);

const filrered = meals.filter(price => price < 5); //ei toimi
console.log('Filtered meals', filrered);

/*
const filter = (array, test) =>{
  let passed = [];
  for(let element of array){
    if(test(element)){
      passed.push(element);
    }
  }
  return passed;
};
console.log(filter(meals, price => price < 5));
*/

const raised = meals.map((price) => price * 1.15); //ei toimi
console.log('Raised meals', raised);

/*      //näyttää hinnat, mut ei korota niitä
const map = (array, transform) =>{
  let mapped = [];
  for(let element of array){
    mapped.push(transform(element));
  }
  return mapped;
};
let raised = meals.filter(s => s.price * 1.15);
console.log('Price raised 15%', map(raised, s => s.price));
*/
const sum = meals.reduce((acc, price) => acc + price); //ei toimi
console.log('Whole menu', sum);

  //Antaa NaN
const reduce = (array, combine, start) =>{
  let current = start;
  for(let element of array){
    current = combine(current, element);
  }
  return current;
};
console.log(reduce([meals].price, (a, b) => a + b, 0));

