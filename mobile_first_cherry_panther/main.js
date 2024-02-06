const navEmail = document.querySelector('.right-side__email');
const navDisplayMenu = document.querySelector('.nav__display-menu');
const cartproducts = document.querySelector('.selected-product');
const mainHeaderCardContainer = document.querySelector('.main-header__card-container')

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

/* Se procede a crear lista de objetos para simular info en base de datos*/

const productos = [{nombre:"Mustang", tipo:"Deportivo", valor: 160000, descripcion: "Auto deportivo de lujo unico,", image: './assets/images/autoNaranjaPeque.jpg'},
                  {nombre:"GTR", tipo:"Clasico", valor: 190000, descripcion: "Auto clasico de dos puertas super potente", image: './assets/images/autoNegroPeque.jpg'},
                  {nombre:"Ferrari", tipo:"Elegante", valor: 210000, descripcion: "Auto de gran valoracion con busnas prestaciones", image: './assets/images/autoRojoPeque.jpg'}];


                /*<div class="main-header__card-container">
                  <div class="card-container__product">
                    <div class="card-container__image">
                      <img src="./assets/images/autoNaranjaPeque.jpg" alt="Imagen del producto">
                    </div>
                    <div class="card-container__product-specifications">
                      <h3>Nombre del producto</h3>
                      <p>Tipo</p>
                      <p>COP 340000</p>
                      <p>Descripcion</p>
                    </div>
                  </div>   
                  */               
for (producto of productos){
  const cardContainerProduct = document.createElement('div');
  cardContainerProduct.classList.add('card-container__product');

  const cardContainerImage = document.createElement('div');
  cardContainerImage.classList.add('card-container__image');

  const image = document.createElement('img');
  image.setAttribute('src', producto.image);

  cardContainerImage.appendChild(image);

  const cardProductSpecification = document.createElement('div');
  cardProductSpecification.classList.add('card-container__product-specifications');

  const specificationName = document.createElement('h3');
  specificationName.innerText = producto.nombre;

  const specificationType = document.createElement('p');
  specificationType.innerText = producto.tipo;

  const specificationPrice = document.createElement('p');
  specificationPrice.innerText = 'COP ' + producto.valor;

  const cardDescription = document.createElement('p');
  cardDescription.innerText = producto.descripcion;

  cardProductSpecification.appendChild(specificationName);
  cardProductSpecification.appendChild(specificationType);
  cardProductSpecification.appendChild(specificationPrice);
  cardProductSpecification.appendChild(cardDescription);

  cardContainerProduct.appendChild(cardContainerImage);
  cardContainerProduct.appendChild(cardProductSpecification);

  mainHeaderCardContainer.appendChild(cardContainerProduct);
}