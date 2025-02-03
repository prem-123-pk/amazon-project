import {products} from '../data/products.js';

export let cart = [
  {
  productId : 'ab-123',
  quantity  : 3
},{
  productId : 'ab-hp-laptop',
  quantity  : 2
}
]
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
      productId : productId,
      quantity : 1
     });
  }
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
} 
