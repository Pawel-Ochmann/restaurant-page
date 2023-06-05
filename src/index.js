import './css/style.css';
import './css/reset.css';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';
import loadSocials from './socials';

const content = document.querySelector('#content');
const page = document.createElement('div');
const socialsContainer = document.createElement('div');
socialsContainer.appendChild(loadSocials());
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
container.appendChild(socialsContainer);
container.appendChild(restaurantName);
container.appendChild(menu);
content.appendChild(container);
page.appendChild(loadHome());
container.appendChild(page);

function toggleActiveClass() {
  const buttons = document.querySelectorAll('.menu>button');
  buttons.forEach((e) => {
    e.classList.remove('activeButton');
    this.classList.add('activeButton');
  });
}

const homeButton = document.querySelector('.menu>button:nth-child(1)');
homeButton.addEventListener('click', () => {
  page.innerHTML = '';
  page.appendChild(loadHome());
  toggleActiveClass.call(homeButton);
});
const menuButton = document.querySelector('.menu>button:nth-child(2)');
menuButton.addEventListener('click', () => {
  page.innerHTML = '';
  page.appendChild(loadMenu());
  toggleActiveClass.call(menuButton);
});

const contactButton = document.querySelector('.menu>button:nth-child(3)');
contactButton.addEventListener('click', () => {
  page.innerHTML = '';
  page.appendChild(loadContact());
  toggleActiveClass.call(contactButton);
});
