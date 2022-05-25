import React, { Component } from 'react'
import '../style/Login.css';

class Login extends Component {
    render() {
        return (
            <>
                <div className="App container-fluid d-flex justify-content-center">
                    <div className="col-4">
                        <div className="row row-title text-center">
                            <h1>Login</h1>
                        </div>
                        <div className="row row-login">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Email/Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                    />
                                </div>
                                <button type="button" className="btn btn-outline-success btn-accedi" onClick="">Accedi</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
};

export default Login;