import React, { Component } from "react";
import Home from "./Home"
import AcmeStack from "./AcmeStack"

class App extends Component {
    render() {
        return (
            <div className="container" >
                <Home />
                <AcmeStack />
            </div >
        );
    }
}

export default App;