import React, { Component } from 'react';
import logoacmestack from "./logo-acmestack.svg";

class AcmeStack extends Component {
    render() {
        return (
            <div className="AcmeStack">
                <h1>AcmeStack</h1>
                <img src={logoacmestack} className="App-logo" alt="logo" height="50px" />
            </div>
        );
    }
}

export default AcmeStack;