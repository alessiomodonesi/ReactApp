import React, { Component } from 'react'
import '../style/Box.css';

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
                          <button type="button" className="btn btn-outline-success btn-acquista">Acquista</button>
                          <br></br>
                          <button className="btn btn-primary btn-carrello">Carrello</button>
                      </div>
                  </div>
              </div>
          </div>
      );
    }
  }
  export default Box;