import React, { Component } from 'react'
import { Link } from "react-router-dom";

import logo from '../images/navbar/logo.png';
import user from '../images/navbar/user.png';
import carrello from '../images/navbar/carrello.png'
import items from '../images/navbar/items.png'

import '../style/navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark sticky-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand mb-0 h1">
            <img src={logo} alt="..." className="nav-logo" />
          </Link>
          <div className="navbar-nav">
            <div className="row">
              <div className="col">
                <Link to="/login" className="nav-link">
                  <img src={user} alt="..." className="nav-user" />
                </Link>
              </div>
              <div className="col">
                <Link to="/items" className="navbar-link">
                  <img src={items} alt="..." className="nav-item" />
                </Link>
              </div>
              <div className="col">
                <Link to="/carrello" className="nav-link">
                  <img src={carrello} alt="..." className="nav-carrello" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav >
    );
  }
}
export default Navbar;