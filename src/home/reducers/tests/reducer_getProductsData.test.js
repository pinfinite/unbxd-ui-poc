import React from 'react';
import reducergetProductsData from '../reducer_getProductsData';
import appConstants from '../../constants';
let state = [];
const mockPayload = {
    data:{
        productsData:'product info'
    }
}
describe('test cases for get products data reducer', () => {
    it('should return initial state if the action type is unknown', () => {
        const redData = reducergetProductsData(state, { type: 'any', payload: 'any' });
        expect(redData).toEqual([]);
    });
    it('should return action payload if the action type is valid', () => {
        const redData = reducergetProductsData(state, { type: appConstants.GET_PRODUCT_DATA, payload: mockPayload });
        expect(redData.redProd).toEqual(['product info']);
    });
    it('should append array list to existing list of items in case state is not empty',()=>{
        const newState = {redProd:[]}
        const redData = reducergetProductsData(newState, { type: appConstants.GET_PRODUCT_DATA, payload: mockPayload });
        expect(redData.redProd).toEqual(['product info']);
    })
});
