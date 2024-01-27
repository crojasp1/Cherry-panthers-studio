const navEmail = document.querySelector('.right-side__email');
const navDisplayMenu = document.querySelector('.nav__display-menu');
const navImage = document.querySelector('.navegation-bar__img');
const menuLeftItem = document.querySelector('.left-side__button');
const navMobileMenu = document.querySelector('.nav__mobile-menu');

navImage.addEventListener('click', toggleEmailMenu);
navEmail.addEventListener('click', toggleEmailMenu);

menuLeftItem.addEventListener('click', toggleLeftItem);

function toggleEmailMenu() {
navDisplayMenu.classList.toggle('inactive');
}

function toggleLeftItem() {
  navMobileMenu.classList.toggle('inactive');
}