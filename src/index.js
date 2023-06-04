import './css/style.css';
import './css/reset.css';
import loadHome from './home';
import loadMenu from './menu';

const content = document.querySelector('#content');
const page = document.createElement('div');
page.classList.add('page');
const container = document.createElement('div');
const restaurantName = document.createElement('h1');
const menu = document.createElement('div');
const menuOptions = ['Home', 'Menu', 'Contact'];
menuOptions.forEach((option) => {
  const el = document.createElement('button');
  el.textContent = option;
  menu.appendChild(el);
});
menu.classList.add('menu');

restaurantName.textContent = 'Spicy Heaven';
container.classList.add('container');
container.appendChild(restaurantName);
container.appendChild(menu);
content.appendChild(container);
page.appendChild(loadHome());
container.appendChild(page);

const homeButton = document.querySelector('.menu>button:nth-child(1)');
homeButton.addEventListener('click', () => {
  page.innerHTML = '';
  page.appendChild(loadHome());
});
const menuButton = document.querySelector('.menu>button:nth-child(2)');
menuButton.addEventListener('click', () => {
  page.innerHTML = '';
  page.appendChild(loadMenu());
});
