// Now instead of functions we will use Classes :-
// this = this points to the object which we generate.
class Cart {
    cartItems;              // cartItems = undefined;
    localStorageKey;

    constructor(localStorageKey)
    {
        this.localStorageKey = localStorageKey;
        this.loadFromStorage();
    }

    loadFromStorage() {
        this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));
      
        if (!this.cartItems) {
          this.cartItems = [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryOptionId: '1'
          }, {
            productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 1,
            deliveryOptionId: '2'
          }];
        }
    }

    addToCart(productId)
    {
        if (!this.cartItems) {
            loadFromStorage(); // Ensure cart is loaded
        }
        let matchItem;

        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchItem = cartItem;
            }
            });

        if(matchItem)
        {
            matchItem.quantity += 1;
        }
        else 
        {
            this.cartItems.push({
                productId : productId,
                quantity : 1,
                deliveryOptionId : '1'
            })
        }

        this.saveToStorage();
    }
    
    saveToStorage() {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
    }

}    
   
const oopCart = new Cart('cart-oop');      // oopCart = instance of the class 
const busCart = new Cart('cart-business');     // busCart = instance of the class 


console.log(oopCart);
console.log(busCart);
console.log(busCart instanceof Cart)
