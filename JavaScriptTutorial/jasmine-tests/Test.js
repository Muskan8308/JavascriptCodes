import formatCurrency from "../TestingB.js";

describe('test suite : formatCurrency', ()=> {
    it('converts cents into dollars', () => {
        expect(formatCurrency(2025)).toEqual('20.25');
    });

    it('works with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('rounds upto the nearest cent', ()=>{
        expect(formatCurrency(2000.5)).toEqual('20.01');
    })
});