import {products} from '../data/products.js';

export let cart = JSON.parse(localStorage.getItem('cart'))

if(!cart){
  cart = [
    {
    productId : 'ab-123',
    quantity  : 3,
    deliveryOptionId : '1'
  },{
    productId : 'ab-hp-laptop',
    quantity  : 2,
    deliveryOptionId : '2'
  }
  ]
}


// function to store cart items is local storage
function saveToStorage (){
  localStorage.setItem('cart',JSON.stringify(cart))
}
// add to cart
 export function addToCart (productId) {
  let matchingItem;
  cart.forEach((CartItem) =>{
    if(productId ===CartItem.productId){
      matchingItem = CartItem
    };
  });

  if(matchingItem){
    matchingItem.quantity += 1;
  } else {
    // this is single cart cart feartue which add one by one
    cart.push({
      productId,
      quantity : 1,
      deliveryOptionId : '1'
     });
  }
  saveToStorage()
};
// deleted cartItems gonna store in the new cart
export function removeFromCart (productId){
  const newCart = [];
  cart.forEach((cartItem) =>{
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });
  cart = newCart;
   saveToStorage()
} 
