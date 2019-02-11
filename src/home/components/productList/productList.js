import React,{Component} from 'react';
import ProductListItem from './productListItem/productListItem'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './productList.css';
import {getProductsData} from '../../actions';
import appConstants from '../../constants';
class ProductList extends Component{
    constructor(props){
        super(props);
        this.productCount = appConstants.PROD_COUNT;
    }

    renderProducts(){
        if(!this.props.productsData){
            return <div></div>
        }
        return this.props.productsData.data.map((prodData)=>{
           return(
              <ProductListItem key={prodData.id} productListData={prodData}/>
           )
        })
    }

    render(){
      
        return(
            <div>
                {this.renderProducts()}
            </div>
        )
    }

    componentWillMount(){
        console.log("calling rest");
        this.props.getProductsData(this.productCount);
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
       getProductsData:getProductsData
    },dispatch);
}

function mapStateToProps(state){
    return{
        productsData:state.getProductsData
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);