document.addEventListener('DOMContentLoaded', function() {
  let cart = []; // Array para almacenar los productos del carrito de nuestra página

  const banner = document.getElementById('banner');
  if (banner) {
      const text = banner.getAttribute('data-text');
      let i = 0;
      function typeWriter() {
          if (i < text.length) {
              banner.innerHTML += text.charAt(i);
              i++;
              setTimeout(typeWriter, 100);
          }
      }
      typeWriter();
  }

  const foroItems = document.querySelectorAll('.foro-item');
  foroItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
          item.style.backgroundColor = 'rgba(0, 255, 255, 0.2)';
      });
      item.addEventListener('mouseleave', () => {
          item.style.backgroundColor = '';
      });
  });

  const addToCartButtons = document.querySelectorAll('.offer-card .btn-primary');
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function(e) {
          e.preventDefault(); // Solo para los botones "Comprar"
          console.log('Botón de compra clickeado');
          const productCard = this.closest('.offer-card');
          const productName = productCard.querySelector('.card-title').innerText;
          const productPrice = productCard.querySelector('.card-text').innerText.split(' ').pop(); // Obtener el precio con descuento
          const product = { name: productName, price: productPrice };
          cart.push(product);
          alert(`${productName} ha sido añadido al carrito.`);
          updateCart();
      });
  });

  const cartButton = document.getElementById('carrito');
  const cartDropdown = document.getElementById('cartDropdown');

  cartButton.addEventListener('click', function(e) {
      e.preventDefault(); 
      console.log('Carrito clickeado');
      displayCartItems();
      cartDropdown.classList.toggle('show');
  });

  function displayCartItems() {
      cartDropdown.innerHTML = '';
      if (cart.length === 0) {
          cartDropdown.innerHTML = '<li>No tienes productos en el carrito.</li>';
      } else {
          cart.forEach((item, index) => {
              const listItem = document.createElement('li');
              listItem.innerHTML = `${item.name} - ${item.price} <button data-index="${index}">Eliminar</button>`;
              listItem.querySelector('button').addEventListener('click', function() {
                  removeItemFromCart(index);
              });
              cartDropdown.appendChild(listItem);
          });
      }
  }


  function removeItemFromCart(index) {
      cart.splice(index, 1); 
      updateCart();
      displayCartItems(); 
  }

  function updateCart() {
      const cartCounter = document.querySelector('#carrito i');
      cartCounter.textContent = ` (${cart.length})`;
  }

  const userProfileForm = document.getElementById('userProfileForm');
  if (userProfileForm) {
      userProfileForm.addEventListener('submit', function(e) {
          e.preventDefault();
          showNotification('Perfil actualizado con éxito', 'success');
      });
  }

  const logoutButton = document.getElementById('cerrarSesion');
  if (logoutButton) {
      logoutButton.addEventListener('click', function() {
          localStorage.removeItem('currentUser');
          window.location.href = 'index.html';
      });
  }

  const newsletterForm = document.getElementById('subscriptionForm');
  
  newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = document.getElementById('newsletterEmail').value;

      const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail|hotmail)\.com$/;
      
      if (emailPattern.test(emailInput)) {
          alert("Suscripción enviada, ¡En NexusGamer te mantendremos informado 24/7!");
      } else {
          alert("Por favor, ingresa una dirección de correo válida (Gmail o Hotmail).");
      }
  });
});