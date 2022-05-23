import React, { Component } from 'react'
import '../style/login.css';

class Login extends Component {
    render() {
        return (
            <>
                <div className="App container-fluid">
                    <br /><h2 className="h-title">Login</h2><hr />
                    <div className="col-3">
                        <div className="row">
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
                                <button type="submit" className="btn btn-primary btn-accedi">Accedi</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
};

export default Login;