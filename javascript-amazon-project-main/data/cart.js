import {products} from '../data/products.js';

export const cart = [
  {
  productId : 'ab-123',
  quantity  : 1
},{
  productId : 'ab-hp-laptop',
  quantity  : 2
},{
  productId : 'bc2847e9-5323-403f-b7cf-57fde044a955',
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
}
