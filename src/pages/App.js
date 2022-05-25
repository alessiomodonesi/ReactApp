import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './Login';
import Carrello from './Carrello';
import Shop from './Shop';
import Navbar from '../components/Navbar';
import ParallaxSection from '../components/Parallax';
//import Footer from '../components/footer';

import '../style/App.css';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <div className="App container-fluid d-flex justify-content-center">
            <Routes>
              <Route exact path="/" element={<ParallaxSection />} />
              <Route exact path="/Login" element={<Login />} />
              <Route exact path="/Shop" element={<Shop />} />
              <Route exact path="/Carrello" element={<Carrello />} />
            </Routes>
          </div>
          { /*<Footer />*/ }
        </BrowserRouter>
      </>
    );
  }
}
export default App;