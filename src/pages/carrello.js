import React, { Component } from 'react'
import AnimatingBox from '../components/AnimatingBox';
import '../style/Carrello.css';

class Carrello extends Component {
    render() {
        return (
            <>
                <div className="App container-fluid d-flex justify-content-center">
                    <div className="col-4">
                        <div className="row row-title text-center">
                            <h1 className="h-title">Carrello</h1>
                        </div>
                        <div className="row row-animating">
                            <AnimatingBox />
                        </div>
                    </div>
                </div>
            </>
        )
    }
};
export default Carrello;