import './css/style.css';
import './css/reset.css';
import loadHome from './home';

const content = document.querySelector('#content');

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
container.appendChild(loadHome());
