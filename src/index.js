import './css/style.css';
import testImage from './images/testImage.jpg';

const content = document.querySelector('#content');
console.log(content);
const mainHeader = document.createElement('h1');
mainHeader.textContent = 'Welcome to our restaurant!';
const secondaryHeader = document.createElement('h2');
secondaryHeader.textContent = 'This is the secondary Header!';
const container = document.createElement('div');
container.classList.add('container');
const firstImage = new Image();
firstImage.src = testImage;

container.appendChild(firstImage);
content.appendChild(mainHeader);
content.appendChild(secondaryHeader);
content.appendChild(container);
