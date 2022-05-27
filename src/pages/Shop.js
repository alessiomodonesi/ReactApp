import React, { Component } from 'react'
import Chain1 from '../components/Chain1'
import Chain2 from '../components/Chain2'
import Chain3 from '../components/Chain3'
import Chain4 from '../components/Chain4'
//import ItemList from '../components/ItemList';
import '../style/Shop.css';

class Shop extends Component {
    render() {
        return (
            <>
                <div className="App container-fluid">
                    <div className="row row-shop">
                        <div className="col-3">
                            <Chain1 />
                        </div>
                        <div className="col-3">
                            <Chain2 />
                        </div>
                        <div className="col-3">
                            <Chain3 />
                        </div>
                        <div className="col-3">
                            <Chain4 />
                        </div>
                    </div>
                </div>
            </>
        )
    }
};

export default Shop;