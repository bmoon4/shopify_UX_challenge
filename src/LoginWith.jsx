import React, { Component } from 'react';
import logofacebook from "./logo-facebook.svg";
import logogoogle from "./logo-google.svg";
import logotwitter from "./logo-twitter.svg";
class LoginWith extends Component {
    state = {}
    render() {
        return (
            <div className="loginWith">
                <p>or login with</p>
                <a href="#"><img src={logogoogle} alt="google" height="20px" /></a> &nbsp;&nbsp;
                <a href="#"><img src={logofacebook} alt="facebook" height="20px" /></a> &nbsp;&nbsp;
                <a href="#"><img src={logotwitter} alt="twitter" height="20px" /></a> &nbsp;&nbsp;
            </div >
        );
    }
}

export default LoginWith;