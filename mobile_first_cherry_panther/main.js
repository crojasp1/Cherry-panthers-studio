const navEmail = document.querySelector('.right-side__email');
const navDisplayMenu = document.querySelector('.nav__display-menu');
const cartproducts = document.querySelector('.selected-product');
const mainHeaderCardContainer = document.querySelector('.main-header__card-container');
const closeArrow = document.querySelector('.product-detail__close');

const navImage = document.querySelector('.navegation-bar__img');
const menuLeftItem = document.querySelector('.left-side__button');
const navMobileMenu = document.querySelector('.nav__mobile-menu');
const productDetail = document.querySelector('.product-detail ');




navImage.addEventListener('click', toggleSelectedItemsMenu);

navEmail.addEventListener('click', toggleEmailMenu);

menuLeftItem.addEventListener('click', toggleLeftItem);

/*closeArrow.addEventListener('click', closeProductDetail);*/

//Creamos el eventListener para escuchar las imagenes desde el container padre:
mainHeaderCardContainer.addEventListener('click', openProductDetail);


function toggleEmailMenu() {
  navDisplayMenu.classList.toggle('inactive');
}

function toggleLeftItem() {
  const isCartProductsClosed = cartproducts.classList.contains('inactive');
  productDetail.classList.add('inactive');

  if(!isCartProductsClosed){
    cartproducts.classList.add('inactive');

  }
    navMobileMenu.classList.toggle('inactive');

}

function toggleSelectedItemsMenu() {
  const isNavMobileMenuClosed = navMobileMenu.classList.contains('inactive');
  productDetail.classList.add('inactive');

  if(!isNavMobileMenuClosed){
    navMobileMenu.classList.add('inactive');
  }
  cartproducts.classList.toggle('inactive');
}

function openProductDetail(event) {
  if(event.target.nodename === "img" || "H3" || "p"){
  productDetail.classList.remove('inactive');
  navMobileMenu.classList.add('inactive');
  cartproducts.classList.add('inactive');

  }

}
function closeProductDetail() {
  productDetail.classList.add('inactive');
}

//API Internalización:

const formatPrice = (price)=>{
  const newPrice = new window.Intl.NumberFormat('en-En', {style: "currency", currency: "USD"}).format(price);

  return newPrice;
}
/* Se procede a crear lista de objetos para simular info en base de datos*/

const productos = [{nombre:"Mustang", tipo:"Deportivo", valor: 160000, descripcion: "Auto deportivo de lujo unico,", image: './assets/images/autoNaranjaPeque.jpg'},
                  {nombre:"GTR", tipo:"Clasico", valor: 190000, descripcion: "Auto clasico de dos puertas super potente", image: './assets/images/autoNegroPeque.jpg'},
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
  //image.addEventListener('click', openProductDetail);

  cardContainerImage.appendChild(image);

  const cardProductSpecification = document.createElement('div');
  cardProductSpecification.classList.add('card-container__product-specifications');

  const specificationName = document.createElement('h3');
  specificationName.innerText = producto.nombre;

  const specificationType = document.createElement('p');
  specificationType.innerText = producto.tipo;

  const specificationPrice = document.createElement('p');
  specificationPrice.innerText = formatPrice(producto.valor);

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

/*Se crea con la misma lista de objetos la vista de los detalles del producto

<div class="product-detail__container">
  <img src="./assets/images/autoNaranjaPeque.jpg" alt="Imagen del producto">
  <span class="product-detail__close"><i class="fa-solid fa-circle-xmark"></i></span>
  <p>Tipo de producto</p>
  <h2>Nombre del producto</h2>
  <div class="product-detail__specifications">
    <p>$ 69000</p>
    <p>Pedir por wapp <i class="fa-brands fa-whatsapp"></i></p>
  </div>
  <p>Informacion de los productos</p>

  <div class="product-detail__boton-compra">

    <div class="product-detail__añadir-articulo">
      <p>$ 69000</p>
      <input type="submit" value="Añadir articulo">
  </div>
</div>
</div>
*/


    const productDetailContainer = document.createElement('div');
    productDetailContainer.classList.add('product-detail__container');

    const productDetailImage = document.createElement('img');
    productDetailImage.setAttribute('src', producto.image);
    productDetailImage.setAttribute('alt', 'Imagen del producto');

    const productDetailClose = document.createElement('span');
    productDetailClose.classList.add('product-detail__close');

    const closeIcon = document.createElement('i');
    /*closeIcon.classList.add('fa-solid fa-circle-xmark');*/

    productDetailClose.append(closeIcon);

    const tipoDeProducto = document.createElement('p');
    tipoDeProducto.innerText = producto.tipo;

    const nombreProducto = document.createElement('h2');
    nombreProducto.innerText = producto.nombre;

    const productDetailSpecifications = document.createElement('div');
    productDetailSpecifications.classList.add('product-detail__specifications');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$ ' + producto.valor;
    const pedirWhatsApp = document.createElement('p');
    pedirWhatsApp.innerText = 'Pedir por WhatsApp';
    const whatsappIcon = document.createElement('i');
    /*whatsappIcon.classList.add('fa-brands fa-whatsapp')*/

    pedirWhatsApp.append(whatsappIcon);

    productDetailSpecifications.append(pedirWhatsApp, productPrice);


    const productInfo = document.createElement('p');
    productInfo.innerText = producto.descripcion;

   const botonCompra = document.createElement('div');
   botonCompra.classList.add('product-detail__boton-compra');

   const añadirArticulo = document.createElement('div');
   añadirArticulo.classList.add('product-detail__añadir-articulo');

   const precio = document.createElement('p');
   precio.innerText = '$ ' + producto.valor;

   const botonAñadir = document.createElement('input');
   botonAñadir.setAttribute('type', 'submit');
   botonAñadir.setAttribute('value', 'Añadir articulo');

   añadirArticulo.append(precio, botonAñadir);

   botonCompra.append(añadirArticulo);

   productDetailContainer.append(productDetailImage, productDetailClose, tipoDeProducto, nombreProducto, productDetailSpecifications, productInfo, botonCompra);

  productDetail.append(productDetailContainer);

