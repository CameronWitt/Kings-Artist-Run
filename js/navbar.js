// js/navbar.js
document.addEventListener('DOMContentLoaded', () => {
  // CART COUNT HANDLING
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  let cartCount = document.querySelector('.cart-count');

  if (!cartCount) {
    cartCount = document.createElement('span');
    cartCount.className = 'cart-count';
    document.querySelector('.nav-right').appendChild(cartCount);
  }

  cartCount.textContent = cart.length;

  // MENU TOGGLE FOR MOBILE NAV
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    // Optional: close menu on link click (mobile UX)
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }
});
