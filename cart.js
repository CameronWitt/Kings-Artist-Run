document.addEventListener('DOMContentLoaded', () => {
  const cartRight = document.querySelector('.cart-right');
  const purchaseButton = document.querySelector('.purchase-button');

  if (cartRight) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartRight.innerHTML = '';

    let totalPrice = 0;

    cart.forEach((item, index) => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'cart-item';

      // Add a remove button 'x' for each item
      itemDiv.innerHTML = `
        <button class="remove-item" title="Remove item">&times;</button>
        <img src="${item.image}" alt="${item.name}">
        <div class="item-info">
          <div class="item-name">${item.name}</div>
          <div class="item-artist">${item.artist}</div>
        </div>
        <div class="item-price">${item.price}</div>
      `;

      cartRight.appendChild(itemDiv);

      const priceNum = parseFloat(item.price.replace(/[^\d.-]/g, ''));
      totalPrice += priceNum;

      // Attach click listener for removing this item
      itemDiv.querySelector('.remove-item').addEventListener('click', () => {
        // Remove item from cart array by index
        cart.splice(index, 1);
        // Update localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        // Re-render cart
        location.reload();
      });
    });

    if (cart.length === 0) {
      cartRight.innerHTML = '<p>Your cart is empty.</p>';
    } else {
      cartRight.appendChild(document.createElement('hr')).className = 'total-divider';

      const totalDiv = document.createElement('div');
      totalDiv.className = 'cart-total';
      totalDiv.innerHTML = `
        <span>Total:</span>
        <strong>$${totalPrice.toFixed(2)} AUD</strong>
      `;
      cartRight.appendChild(totalDiv);
    }
  }

  if (purchaseButton) {
    purchaseButton.addEventListener('click', (e) => {
      e.preventDefault();

      const inputs = document.querySelectorAll('.cart-left input');
      let valid = true;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          valid = false;
          input.style.borderColor = 'red';
        } else {
          input.style.borderColor = '';
        }
      });

      if (valid) {
        localStorage.removeItem('cart');
        window.location.href = 'confirmation.html';
      } else {
        alert('Please fill out all required fields.');
      }
    });
  }
});

document.querySelectorAll('.info-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const expanded = button.getAttribute('aria-expanded') === 'true';

    button.setAttribute('aria-expanded', !expanded);
    button.textContent = button.textContent.replace(expanded ? '▲' : '▼', expanded ? '▼' : '▲');

    content.classList.toggle('open');
  });
});
