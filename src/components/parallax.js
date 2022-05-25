import React, { Component } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Link } from "react-router-dom";
import FlipCard1 from './FlipCard1';
import FlipCard2 from './FlipCard2';

import '../style/Parallax.css';

class ParallaxSection extends Component {
    render() {
        return (
            <>
                <Parallax pages={3} style={{ top: '0', left: '0' }}>

                    <ParallaxLayer offset={0} speed={0} style={{ backgroundColor: '#fcf8ffea' }} />
                    <ParallaxLayer offset={0} speed={0} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
                        <p className="parallax-P">Amazoon</p>
                    </ParallaxLayer>

                    <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#1aff1a' }} />
                    <ParallaxLayer offset={1} speed={1.5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-10">
                                    <p className="parallax-P parallax-new">Scopri i nostri prodotti</p>
                                    <hr className="hr-style1" />
                                </div>
                                <div className="col-2">
                                    <FlipCard1 />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 col-btn">
                                    <Link to="/Shop" type="button" className="btn btn-outline-success btn-items">Vai allo shop</Link>
                                </div>
                            </div>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer offset={2} speed={2} style={{ backgroundColor: '#1aff1a' }} />
                    <ParallaxLayer offset={2} speed={2.5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-2">
                                    <FlipCard2 />
                                </div>
                                <div className="col-10">
                                    <p className="parallax-P parallax-user1">Registrati e</p>
                                    <p className="parallax-P parallax-user2">unisciti a noi</p>
                                    <hr className="hr-style2" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 col-login">
                                    <Link to="/Login" type="button" className="btn btn-outline-success btn-login">Login</Link>
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