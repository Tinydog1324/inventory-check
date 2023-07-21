function decreaseQuantity(product) {
    var quantityElement = document.getElementById(product + '-quantity');
    var quantity = parseInt(quantityElement.innerText);

    if (quantity > 0) {
      quantity--;
      quantityElement.innerText = quantity;

      if (quantity === 0) {
        sendEmail(product);
      }
    } else {
      alert('Error: Quantity cannot be negative.');
    }
  }

  function increaseQuantity(product) {
    var quantityElement = document.getElementById(product + '-quantity');
    var quantity = parseInt(quantityElement.innerText);
    quantity++;
    quantityElement.innerText = quantity;
  }

  function sendEmail(product) {
    var productName = '';
    if (product === 'oranges') {
      productName = 'Oranges';
    } else if (product === 'apples') {
      productName = 'Apples';
    } else if (product === 'bananas') {
      productName = 'Bananas';
    }

    // Simulating email by displaying an alert message
    alert('Email sent: ' + productName + ' are out of stock!');
  }


  