import SodexoData from './modules/sodexo-data';
import FazerData from './modules/fazer-data';

let lang = 'fi';

/**
 * Sorts an array alphapetically
 *
 * @param {Array} courses - Menu array
 * @param {Array} order - 'asc' or 'desc'
 * @returns {Array} sorted menu
 */
const sortCourses = (courses, order = 'asc') => {
  let sortedMenu = courses.sort();
  if (order === 'desc') {
    sortedMenu.reverse();
  }
  return sortedMenu;
};

/**
 * Renders html list items from menu data
 *
 * @param {string} restaurant - name of the selector/restaurant
 * @param {Array} menu - menu data
 */
const renderMenu = (restaurant, menu) => {
  const list = document.querySelector('#' + restaurant);
  list.innerHTML = '';
  for (const item of menu) {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
  }
};

/**
 * Picks a random course item from an array
 *
 * @param {Array} courses
 * @returns {string} course
 */
const pickRandomCourse = courses => {
  const randomIndex = Math.floor(Math.random() * courses.length);
  return courses[randomIndex];
};
const displayRandomCourse = () => {
  alert('Sodexo: '+ pickRandomCourse(SodexoData.getDailyMenu(lang)) + '\n'+ 'Fazer: '+ pickRandomCourse(FazerData.getDailyMenu(lang)));
};

const switchLanguage = () => {
  if (lang === 'fi') {
    lang = 'en';
  } else {
    lang = 'fi';
  }
  renderMenu('sodexo', SodexoData.getDailyMenu(lang));
  renderMenu('fazer', FazerData.getDailyMenu(lang));
};

const renderSortedMenu = () => {
  renderMenu('sodexo', sortCourses(SodexoData.getDailyMenu(lang)));
  renderMenu('fazer', sortCourses(FazerData.getDailyMenu(lang)));
};

const init = () => {
  renderMenu('sodexo', SodexoData.getDailyMenu('fi'));
  renderMenu('fazer', FazerData.getDailyMenu('fi'));
  document.querySelector('#switch-lang').addEventListener('click', switchLanguage);
  document.querySelector('#sort-menu').addEventListener('click', renderSortedMenu);
  document.querySelector('#pick-dish').addEventListener('click', displayRandomCourse);
};

init();

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

const getJsonMenu = async (menuUrl, useProxy = false) => {
  let response;
  try {
      response = await fetch(`${useProxy ? proxyUrl : ''}${menuUrl}`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }
  } catch (error){
    console.log('fetch menu error', error.message);
  }
  let repos = await response.json();
  return repos;
};
getJsonMenu('https://www.sodexo.fi/ruokalistat/output/weekly_json/152')
.then(data => console.log('sodexo', data));
getJsonMenu('https://www.fazerfoodco.fi/modules/json/json/Index?costNumber=3208&language=fi')
.then(data => console.log('fazer', data));
