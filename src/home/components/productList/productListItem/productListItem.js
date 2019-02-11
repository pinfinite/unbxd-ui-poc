import React, { Component } from 'react';

import './productListItem.css';

export default class ProductListItem extends Component {
    render() {
        return (

            <div className="col-xs-12 col-md-4 col-sm-4 col-lg-4">
                <div className="productListItem">
                    <div>{this.props.productListData.id}</div>
                    <div>{this.props.productListData.name}</div>
                    <div>{this.props.productListData.desc}</div>
                </div>
            </div>
        )
    }
}

