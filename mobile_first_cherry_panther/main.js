const navEmail = document.querySelector('.right-side__email');
const navDisplayMenu = document.querySelector('.nav__display-menu');
const cartproducts = document.querySelector('.selected-product');


const navImage = document.querySelector('.navegation-bar__img');
const menuLeftItem = document.querySelector('.left-side__button');
const navMobileMenu = document.querySelector('.nav__mobile-menu');

navImage.addEventListener('click', toggleSelectedItemsMenu);

navEmail.addEventListener('click', toggleEmailMenu);

menuLeftItem.addEventListener('click', toggleLeftItem);


function toggleEmailMenu() {
  navDisplayMenu.classList.toggle('inactive');
}


function toggleLeftItem() {
  const isCartProductsClosed = cartproducts.classList.contains('inactive');

  if(!isCartProductsClosed){
    cartproducts.classList.add('inactive');
  }
  navMobileMenu.classList.toggle('inactive');

}

function toggleSelectedItemsMenu() {
  const isNavMobileMenuClosed = navMobileMenu.classList.contains('inactive');
  if(!isNavMobileMenuClosed){
    navMobileMenu.classList.add('inactive');
  }
  cartproducts.classList.toggle('inactive');
}