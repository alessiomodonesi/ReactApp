import React, { Component } from 'react'
import '../style/box.css';

class Box extends Component {
    render() {
      return (
          <div className="col">
              <div className="box">
                  <img src={this.props.box.image} className="box-img" alt="..." />
                  <div className="box-body">
                      <h5 className="box-nome">{this.props.box.nome}</h5>
                      <p className="box-prezzo">{this.props.box.prezzo} €</p>
                      <div className="row justify-content-around">
                          <button className="btn btn-primary btn-compra">Compra</button>
                          <br></br>
                          <button className="btn btn-primary btn-carrello">Aggiungi al carrello</button>
                      </div>
                  </div>
              </div>
          </div>
      );
    }
  }
  export default Box;