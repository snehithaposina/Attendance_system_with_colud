let cartItems = [];
let total = 0;

function addToCart(productName, price) {
  cartItems.push({ name: productName, price: price });
  total += price;

  const cartItemsElement = document.getElementById('cartItems');
  const totalPriceElement = document.getElementById('totalPrice');

  cartItemsElement.innerHTML = '';
  cartItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsElement.appendChild(listItem);
  });

  totalPriceElement.textContent = `$${total.toFixed(2)}`;
}
