import React, { Component } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Link } from "react-router-dom";
import FlipCard1 from './flipCard1';
import FlipCard2 from './flipCard2';

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
                    <ParallaxLayer offset={1} speed={1.5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-10">
                                    <p className="parallax-P parallax-new">Scopri i nostri prodotti</p>
                                </div>
                                <div className="col-2">
                                    <FlipCard1 />
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
                    <ParallaxLayer offset={2} speed={2.5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-2">
                                    <FlipCard2 />
                                </div>
                                <div className="col-10">
                                    <p className="parallax-P parallax-user1">Registrati e</p>
                                    <p className="parallax-P parallax-user2">unisciti a noi</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 col-login">
                                    <Link to="/Login" className="btn btn-login">Login</Link>
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