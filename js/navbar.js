// js/navbar.js
document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  let cartCount = document.querySelector('.cart-count');

  if (!cartCount) {
    cartCount = document.createElement('span');
    cartCount.className = 'cart-count';
    document.querySelector('.nav-right').appendChild(cartCount);
  }

  cartCount.textContent = cart.length;
});