const coursesEn = [];
const coursesFi = [];


const menu = document.querySelector('.menu');
const langButton = document.querySelector('.lang');
const sortButton = document.querySelector('.sort');
const randomButton = document.querySelector('.random');
let finnish = true;

coursesFi.sort();
coursesEn.sort();


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

const myv = 'Hello';

export {changelang, sortOrder, randomCourse};
