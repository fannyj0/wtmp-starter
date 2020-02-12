import SodexoLunchMenu from '../assets/sodexo.json';

console.log(SodexoLunchMenu.courses);

let coursesEn = [];
let coursesFi = [];

/**
 * Extract courses from Sodexo's json object to menu arrays
 *
 * @param {Object} sodexoDailyMenu
 */
const parseDailyMenu = (sodexoDailyMenu, lang) => {
  const courses = Object.values(sodexoDailyMenu);
  let dailyMenu = [];
  for (const course of courses){
    if (lang === 'fi'){
      dailyMenu.push(course.category + ": " + course.title_fi);
    }else{
        dailyMenu.push(course.title_en);
    }
  }
  return dailyMenu;
};

const getDailyMenu = (lang, weekDay = 0) =>{
  return parseDailyMenu(SodexoLunchMenu.courses, lang);
};

const SodexoData = {getDailyMenu};

export default SodexoData;
