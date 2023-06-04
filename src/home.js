export default function loadHome() {
  const homePage = document.createElement('div');
  homePage.classList.add('homePage');
  homePage.textContent =
    'Welcome to Spicy Heaven! Our restaurant is a culinary haven that takes you on a flavorful journey. With a menu blending international cuisine and local inspiration, our skilled chefs create dishes bursting with bold spices. Our cozy and inviting home section offers a comfortable space for memorable dining experiences. Come and indulge in our fresh and delicious vegetarian and non-vegetarian options. Join us at Spicy Heaven, where every bite is paradise!';

  const hoursHeader = document.createElement('h3');
  hoursHeader.textContent = 'Hours';
  homePage.appendChild(hoursHeader);
  const hourContainer = document.createElement('div');
  const hours = [
    'Sunday:', '8am - 8pm',
    'Monday:', '6am - 6pm',
    'Tuesday:', '6am - 6pm',
    'Wednesday:', '6am - 6pm',
    'Thursday:', '6am - 6pm',
    'Friday:', '6am - 10pm',
    'Saturday:', '8am - 10pm',
  ];
  hours.forEach((e) => {
    const par = document.createElement('p');
    par.textContent = e;
    hourContainer.appendChild(par);
  });
  homePage.appendChild(hourContainer);

  return homePage;
}
