import loadSocials from './socials';

export default function contactPage() {
  const contact = document.createElement('div');
  contact.classList.add('contactPage');
  const contactHeader = document.createElement('h3');
  contactHeader.textContent = 'Contact';
  contact.appendChild(contactHeader);
  const adress = document.createElement('adress');
  const adressArray = ['Spicy Heaven', 'Grabiszyńska 10/99', '53-501 Wrocław'];
  adressArray.forEach((e) => {
    const par = document.createElement('p');
    par.textContent = e;
    adress.appendChild(par);
  });
  contact.appendChild(adress);
  const map = document.createElement('iframe');
  map.src =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5011.003884863561!2d17.001470723383235!3d51.09919859559758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc210afde9bd7%3A0xdeb81955584d6ca2!2sGrabiszy%C5%84ska%20100%2C%2053-437%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1685903661438!5m2!1spl!2spl';
  map.loading = 'lazy';
  contact.appendChild(map);
  const tel = document.createElement('div');
  tel.classList.add('telContainer');
  const telIcon = document.createElement('span');
  telIcon.classList.add('material-symbols-outlined');
  telIcon.textContent = 'call';
  const telNumber = document.createElement('p');
  telNumber.textContent = '999 999 999';
  tel.appendChild(telIcon);
  tel.appendChild(telNumber);
  contact.appendChild(tel);
  contact.appendChild(loadSocials());

  return contact;
}
