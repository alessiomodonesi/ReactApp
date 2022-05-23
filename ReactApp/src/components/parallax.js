import React, { Component } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Link } from "react-router-dom";

import items from '../images/e-commerce.jpg';
import signup from '../images/signup.jpg';
import '../style/parallax.css';

class ParallaxSection extends Component {
    render() {
        return (
            <>
                <Parallax pages={3} style={{ top: '0', left: '0' }}>

                    <ParallaxLayer offset={0} speed={0} style={{ backgroundColor: '#fcf8ffea' }} />
                    <ParallaxLayer offset={0} speed={0} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
                        <p className="parallax-P">Amazoon</p>
                    </ParallaxLayer>

                    <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#cd72fc' }} />
                    <ParallaxLayer offset={1} speed={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-10">
                                    <p className="parallax-P parallax-new">Scopri i nostri prodotti</p>
                                </div>
                                <div className="col-2">
                                    <img src={items} className="items-img" alt="..." />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 col-btn">
                                    <Link to="/items" className="btn btn-items">Vai allo shop</Link>
                                </div>
                            </div>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer offset={2} speed={2} style={{ backgroundColor: '#cd72fc' }} />
                    <ParallaxLayer offset={2} speed={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-2">
                                    <img src={signup} className="signup-img" alt="..." />
                                </div>
                                <div className="col-10">
                                    <p className="parallax-P parallax-user1">Accedi alla pagina</p>
                                    <p className="parallax-P parallax-user2">e unisciti a noi</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 col-login">
                                    <Link to="/Login" className="btn btn-login">Accedi</Link>
                                </div>
                            </div>
                        </div>
                    </ParallaxLayer>

                </Parallax>
            </>
        );
    }
}
export default ParallaxSection;