import React, { Component } from 'react'
import Chain1 from '../components/Chain1'
//import Chain2 from '../components/Chain2'
//import Chain3 from '../components/Chain3'
//import ItemList from '../components/ItemList';
import '../style/Shop.css';

class Shop extends Component {
    render() {
        return (
            <>
                <div className="App container-fluid">
                    { /*<div className="row row-title text-center">
                        <h1>Shop</h1>
                    </div>*/ }
                    <div className="row">
                        <div className="col-12">
                            <Chain1 />
                        </div>
                        { /*<div className="col-4">
                            <Chain2 />
                        </div>
                        <div className="col-4">
                            <Chain3 />
                        </div>*/ }
                    </div>
                </div>
            </>
        )
    }
};

export default Shop;