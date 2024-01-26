const navEmail = document.querySelector('.right-side__email');
const navDisplayMenu = document.querySelector('.nav__display-menu');
const navImage = document.querySelector('.navegation-bar__img');

navImage.addEventListener('click', toggleEmailMenu);
navEmail.addEventListener('click', toggleEmailMenu);

function toggleEmailMenu() {
navDisplayMenu.classList.toggle('inactive');
}
console.log("js funciona");