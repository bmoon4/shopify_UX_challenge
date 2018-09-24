import React, { Component } from 'react';
import logoacmestack from "./logo-acmestack.svg";

class AcmeStack extends Component {
    render() {
        return (
            <div className="AcmeStack">
                <h2>AcmeStack</h2>
                <img src={logoacmestack} className="App-logo" alt="logo" height="50px" />
            </div>
        );
    }
}

export default AcmeStack;