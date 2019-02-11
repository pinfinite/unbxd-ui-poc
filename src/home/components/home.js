import React,{Component} from 'react';
import ProductList from './productList/productList';
import './home.css';
export default class Home extends Component{
    render(){
        return(
         <div className="container" id="parent">
           <ProductList />
         </div>
        );
    }
}