// js/add-to-cart.js
document.addEventListener('DOMContentLoaded', () => {
  const addToCartButton = document.querySelector('.price-button-row button');

  if (!addToCartButton) return; // Only run on product pages with the button

  addToCartButton.addEventListener('click', () => {
    const product = {
      name: document.querySelector('.product-name').textContent,
      artist: document.querySelector('.artist').textContent,
      price: document.querySelector('.price').textContent,
      image: document.querySelector('.product-image img').src,
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Added to cart!');
  });
});
