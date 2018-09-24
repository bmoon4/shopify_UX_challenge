import React, { Component } from 'react';
import LoginWith from './LoginWith';

class LoginPanel extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            requestID: '',
            requestPW: '',
            loginToken: true,
            idToken: 0,
            pwToken: 0
        }
        this.requestIDChange = this.requestIDChange.bind(this);
        this.requestPWChange = this.requestPWChange.bind(this);
    }

    requestIDChange(event) {
        this.setState({
            requestID: event.target.value
        })
    }

    requestPWChange(event) {
        this.setState({
            requestPW: event.target.value,
        })
    }

    onSubmit() {
        let pw = this.state.requestPW;
        let id = this.state.requestID;

        if (pw.length === 0 || id.length === 0) {
            this.setState({
                loginToken: true,
                pwToken: 1,
                idToken: 1
            })
        }


        if (pw.length < 8 || pw.length > 24) {
            this.setState({
                loginToken: true,
                requestPW: '',
                pwToken: 1
            })
        }
        else {
            this.setState({
                loginToken: false,
                pwToken: 2
            })
        }
    }
    onSignOut() {
        this.setState({
            requestID: '',
            requestPW: '',
            loginToken: true,
            pwToken: 0,
            idToken: 0
        })
    }
    render() {
        return (
            <div >
                {this.state.loginToken === true &&
                    <React.Fragment>
                        <div className="customPadding">
                        </div>
                        <div className="loginPanel">
                            <ul >
                                <li><input type="text" name="requestID" placeholder="username" value={this.state.requestID} onChange={this.requestIDChange} /></li>
                                <li><input type="password" name="requestPW" placeholder="password" value={this.state.requestPW} onChange={this.requestPWChange} /></li>
                                <li><button className="loginButton" onClick={this.onSubmit.bind(this)}>login</button></li>
                            </ul>
                        </div>
                        <br /><br />
                        {this.state.pwToken === 1 &&
                            <p id="alert"> password must be between 8 and 24 characters</p>
                        }
                        <br /><br /><br /><br />
                        <input type="checkbox" /> remember me
                        <LoginWith />
                    </React.Fragment>
                }

                {(this.state.pwToken === 2) &&
                    <div className="congrats">
                        <br />
                        <h2>Congratulations</h2>
                        <p id="loggedIn">You have successfully logged in.</p>
                        <button className="signoutButton w3-button w3-round-xxlarge " onClick={this.onSignOut.bind(this)}>sign out</button>
                    </div>
                }
            </div>
        );
    }
}

export default LoginPanel;