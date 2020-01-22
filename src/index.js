const coursesEn = ["Hamburger, cream sauce and poiled potates",
                "Goan style fish curry and whole grain rice",
                "Vegan Chili sin carne and whole grain rice",
                "Broccoli puree soup, side salad with two napas",
                "Lunch baguette with BBQ-turkey filling",
                "Cheese / Chicken / Vege / Halloum burger and french fries"];
const coursesFi = ["Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
                "Goalaista kalacurrya ja täysjyväriisiä",
                "vegaani Chili sin carne ja täysjyväriisi",
                "Parsakeittoa,lisäkesalaatti kahdella napaksella",
                "Lunch baguette with BBQ-turkey filling",
                "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"];

const menu = document.querySelector('.menu');
const langButton = document.querySelector('.lang');
const sortButton = document.querySelector('.sort');
const randomButton = document.querySelector('.random');
let finnish = true;

coursesFi.sort();
coursesEn.sort();

coursesFi.forEach(annos => {
  menu.innerHTML += '<li class="">' + annos + '</li>';
});



const changelang = () =>{
  menu.innerHTML = '';
  if (finnish){
    coursesEn.forEach(course => {
      menu.innerHTML += '<li class="">' +course + '</li>';
    });
    finnish = false;
  }else{
    coursesFi.forEach(annos => {
      menu.innerHTML += '<li class="">' + annos + '</li>';
    });
    finnish = true;
  };
};

const sortOrder = () =>{
  menu.innerHTML= '';
  if (finnish){
    coursesFi.reverse();
    coursesFi.forEach(annos => {
      menu.innerHTML += '<li class="">' + annos + '</li>';
    });
  }else{
    coursesEn.reverse();
    coursesEn.forEach(course => {
      menu.innerHTML += '<li class="">' +course + '</li>';
    });
  };
};

const randomCourse = () =>{
  const random = Math.floor(Math.random()*coursesFi.length);
  if(finnish){
    alert(coursesFi[random]);
  }else{
    alert(coursesEn[random]);
  }
};

langButton.addEventListener('click', changelang);
sortButton.addEventListener('click', sortOrder);
randomButton.addEventListener('click', randomCourse);


