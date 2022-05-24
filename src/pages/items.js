import React, { Component } from 'react'
import ItemList from '../components/itemList';
import '../style/items.css';

class Items extends Component {
    render() {
        return (
            <>
                <div className="App container-fluid">
                    <ItemList />
                </div>
                
            </>
        )
    }
};

export default Items;