export const cart = []
 export function addToCart (productId) {
  let matchingItem;
  cart.forEach((item) =>{
    if(productId ===item.productId){
      matchingItem = item
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
