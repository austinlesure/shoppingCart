const availItems = [
  {
    name: 'Some Item',
    imgURL: 'https://www.http://lorempixel.com/250/250/',
    description: 'Blah Blah Blah',
    price: 9.99
  },
  {
    name: 'Some Other Item',
    imgURL: 'https://www.placecage.com/250/250',
    description: 'Durr Durr Durr',
    price: 11.99
  }
];

let shoppingCart = [];

$('button[name=\'item\']').on('click', function() {
  let itemID = this.id;
  addToCart(itemID);
});

$('button[name=\'remove\'').on('click', function() {
  console.log('Clicky!')
});

function addToCart(itemID) {
  let item = availItems[itemID];
  shoppingCart.push(item);
  console.log(shoppingCart);
  MakeCart();
};

function MakeCart() {
  console.log('Clickaroo!');
  let cartTotal = 0
  let cart = $('.cart');
  cart.empty();
  let cartList = cart.append($('ul'));
  cartList.append('<li>Hello!</li>')
  for (item in shoppingCart) {
    cartList.append(`<li>${shoppingCart[item].name}</li><li>${shoppingCart[item].price}</li>`);
    cartTotal += shoppingCart[item].price;
  }
  cart.append(`<h4>Subtotal $${cartTotal.toFixed(2)}</h4>`);
  let cartTax = cartTotal*0.1;
  cart.append(`<p>Tax (10.0%): $${cartTax.toFixed(2)}</p>`);
  cartTotal += cartTax;
  cart.append(`<h3>Total: $${cartTotal.toFixed(2)}<h3>`)
};
