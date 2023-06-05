import '@fortawesome/fontawesome-free/css/all.css';

export default function loadSocials() {
  const socials = document.createElement('div');
  socials.classList.add('socials');
  const facebook = document.createElement('span');

  facebook.classList.add('fab', 'fa-square-facebook', 'facebook');
  const twitter = document.createElement('span');
  twitter.classList.add('fa-brands', 'fa-square-twitter', 'twitter');
  const instagram = document.createElement('span');
  instagram.classList.add('fa-brands', 'fa-square-instagram', 'instagram');
  socials.appendChild(facebook);
  socials.appendChild(twitter);
  socials.appendChild(instagram);

  return socials;
}
