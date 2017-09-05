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

function makeButton() {
  $('div[class="col col-xs-12 col-md-6 col-lg-4"]').append(`<button name='item'>Add to Cart</button>`)
};

$('button[name=\'item\']').on('click', function() {
  let itemID = this.id;
  addToCart(itemID);
});

function addToCart(itemID) {
  let item = availItems[itemID];
  shoppingCart.push(item);
  console.log(shoppingCart);
  MakeCart();
};

function MakeCart() {

  let cartTotal = 0
  let cart = $('.cart');
  cart.empty();
  if (shoppingCart.length !== 0) {
    cart.append('<ul name=\'cartList\'>');
    let cartList = $('ul[name=\'cartList\'')
    for (item in shoppingCart) {
      console.log(item);
      cartList.append(`<li cart_id='${item}'>${shoppingCart[item].name} --- ${shoppingCart[item].price}</li> <button id="${item}" name="remove" style="display: inline;" type="button" class="remove btn btn-primary">remove</button>`);
      cartTotal += shoppingCart[item].price;
    }
    $('button[name=\'remove\']').on('click', function() {
      console.log(this.id);
      delete shoppingCart[this.id];
      MakeCart();
    });
    cart.append(`<h4>Subtotal $${cartTotal.toFixed(2)}</h4>`);
    let cartTax = cartTotal*0.1;
    cart.append(`<p>Tax (10.0%): $${cartTax.toFixed(2)}</p>`);
    cartTotal += cartTax;
    cart.append(`<h3>Total: $${cartTotal.toFixed(2)}<h3>`);
    cart.append(`<button id='checkout_button'>Check Out</button>`);
    $('#checkout_button').on('click', function() {
      checkOut();
    });
  } else {
    cart.append(`<h3>Shopping Cart Empty</h3>`);
  }
};

makeButton();
MakeCart();

function checkOut() {
  alert("Check it out!")
}

function removeItem(itemID) {
  shoppingCart.splice(itemID, 1);
  MakeCart();
}