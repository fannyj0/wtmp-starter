import LunchMenu from './assets/Lunchlist.json';
// Test
console.log('lunch menu object', LunchMenu);


const coursesEn = [];
const coursesFi = [];

for (let i in LunchMenu.courses){
  coursesFi.push(LunchMenu.courses[i].title_fi);
  coursesEn.push(LunchMenu.courses[i].title_en);
}

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


