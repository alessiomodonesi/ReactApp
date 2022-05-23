import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/login';
import Carrello from './pages/carrello';
import Items from './pages/items';
import Navbar from './components/navbar';
import ParallaxSection from './components/parallax'
//import Footer from './components/footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <div className="App container-fluid">
            <Routes>
              <Route exact path="/" element={<ParallaxSection />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/items" element={<Items />} />
              <Route exact path="/carrello" element={<Carrello />} />
            </Routes>
          </div>
          { /*<Footer />*/ }
        </BrowserRouter>
      </>
    );
  }
}
export default App;