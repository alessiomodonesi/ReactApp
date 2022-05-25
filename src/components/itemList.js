import React, { Component } from 'react'
import Box from './Box';
import item from '../images/items/restock.png';

class ItemList extends Component {
    state = {
        boxes : [
            { id : 0, nome: "Item", prezzo: 10, image: item},
            { id : 1, nome: "Item", prezzo: 10, image: item},
            { id : 2, nome: "Item", prezzo: 10, image: item},
            { id : 3, nome: "Item", prezzo: 10, image: item},
            { id : 4, nome: "Item", prezzo: 10, image: item},
            { id : 5, nome: "Item", prezzo: 10, image: item},
            { id : 6, nome: "Item", prezzo: 10, image: item},
            { id : 7, nome: "Item", prezzo: 10, image: item},
        ]
    }
  render() {
    return (
        <div className="row">
            { this.state.boxes.map(box => (
                <Box
                    key={box.id}
                    box={box}
                />
            
            ))}
        </div>
    );
  }
}
export default ItemList;