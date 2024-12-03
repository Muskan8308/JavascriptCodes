import {addToCart, cart} from '../Cart.js';

describe('Test suite : Add to Cart', () => {
    it('adds an existing product in the cart', ()=> {
        
    })

    it('adds a new product in the cart', ()=> {

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([])
        })

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
    })
})


