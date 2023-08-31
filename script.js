document.addEventListener('DOMContentLoaded', function () {
    const products = [
      { id: 1, name: 'T-Shirt', price: 25, description: '100% Cotton' },  // Price is now a number for easier calculations
      { id: 2, name: 'Jeans', price: 50, description: 'Skinny fit' },
      { id: 3, name: 'Jacket', price: 100, description: 'Waterproof' },
      // Add more...
    ];
  
    // Initialize an empty cart
    let cart = [];
  
    // Render products
    const productList = document.getElementById('product-list');
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');
  
    function calculateTotalPrice() {
      return cart.reduce((total, item) => total + item.price, 0);
    }
  
    function renderCart() {
      cartList.innerHTML = '';
      cart.forEach((cartItem) => {
        const li = document.createElement('li');
        li.textContent = `${cartItem.name} - $${cartItem.price}`;
        cartList.appendChild(li);
      });
  
      // Update total price
      const totalPrice = calculateTotalPrice();
      totalPriceElement.textContent = `$${totalPrice}`;
    }
  
    products.forEach((product) => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
        <h2>${product.name}</h2>
        <p>Price: $${product.price}</p>
        <p>Description: ${product.description}</p>
        <button>Add to Cart</button>
      `;
  
      const addToCartButton = productDiv.querySelector('button');
      addToCartButton.addEventListener('click', () => {
        cart.push(product);
        renderCart();
      });
  
      productList.appendChild(productDiv);
    });
  
    // Initialize with an empty cart
    renderCart();
  });
  