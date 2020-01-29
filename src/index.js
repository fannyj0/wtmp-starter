import LunchMenu from './assets/Lunchlist.json';
// Test
console.log('lunch menu object', LunchMenu);

import {changelang, sortOrder, randomCourse} from './modules/Sodexodata.js';


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

langButton.addEventListener('click', changelang);
sortButton.addEventListener('click', sortOrder);
randomButton.addEventListener('click', randomCourse);
