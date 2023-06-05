export default function loadSocials() {
  const socials = document.createElement('div');
  socials.classList.add('socials');
  const facebook = document.createElement('i');

  facebook.classList.add('fa-brands');
  facebook.classList.add('fa-square-facebook');
  //   const twitter = document.createElement('span');
  //   twitter.classList.add('fa-brands fa-square-twitter');
  //   const instagram = document.createElement('span');
  //   instagram.classList.add('fa-brands fa-square-instagram');
  socials.appendChild(facebook);
  //   socials.appendChild(twitter);
  //   socials.appendChild(instagram);

  return socials;
}
