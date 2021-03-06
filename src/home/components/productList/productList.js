import React, { Component } from 'react';
import ProductListItem from './productListItem/productListItem'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './productList.css';
import { getProductsData } from '../../actions';
import appConstants from '../../constants';
class ProductList extends Component {
    constructor(props) {
        super(props);
        this.productCount = appConstants.PROD_COUNT; // for loading the initial no of divs
        this.productLimitReached = false; // is to check if the max limit of the product count was reached
        this.productMaxCount = 0; // to track the max product count
    }

    renderProducts() {
        if (!this.props.productsData || this.props.productsData.length == 0) {
            return <div></div>  // in case of null data for product list
        }

        this.productMaxCount = this.props.productsData.count; // setting the max product count
        return this.props.productsData.redProd.map((prodData) => { // iterating over the list of products
            return (
                <div key={prodData.id}>
                    <ProductListItem productListData={prodData} />
                </div>

            )
        })
    }

    renderLoaderDiv() {
        if (!this.productLimitReached) { //loader needs to be shown only when there are more products to be shown
            return (
                <div className="loader" key={this.productCount}></div>
            )
        }
        return (<div></div>);
    }

    render() {
        return (
            <div >
                <div className="row" id="productList"> {this.renderProducts()}</div>

                {this.renderLoaderDiv()}
            </div>
        )
    }

    componentWillMount() {
        //initial call to get products
        this.props.getProductsData(this.productCount);
    }

    isBottom(el) {
        //method to check if the bottom of the page was reached
        const loader = document.querySelector(".loader");
        return window.innerHeight + window.scrollY >= document.body.offsetHeight - (loader.clientHeight / 2);
    }

    componentDidMount() {
        //registering an event listener when the component mounted
        document.addEventListener('scroll', this.debounce(this.trackScrolling, 1000));
    }

    componentWillUnmount() {
        //unregistering the event listener when the component unmounted
        document.removeEventListener('scroll', this.trackScrolling);
    }

    debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    trackScrolling = () => {

        if (this.isBottom((document.querySelector('#productList'))) && !this.productLimitReached) { //if the botton is reached and there is more to display
            this.productCount = this.productCount + appConstants.PROD_COUNT; // updating the no of products required
            this.props.getProductsData(this.productCount); //make a get call to fetch products

            if (this.productCount >= this.productMaxCount) { // if the count increases above the limit 
                this.productLimitReached = true;
                document.removeEventListener('scroll', this.trackScrolling);
            }

        }
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getProductsData: getProductsData
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        productsData: state.getProductsData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);