import React from 'react';
import { shallow } from 'enzyme';
import Home from './home';
import ProductList from './productList/productList'

describe('Test cases for home page', () => {
    it('test whether home component renders productList component', () => {
        const wrapped = shallow(<Home />);
        expect(wrapped.find(ProductList).length).toEqual(1);
    });

});