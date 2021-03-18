import React, { Component } from 'react';
import './NWTBApp.css'
import NWTBReactNavbar from "./NWTBReactNavbar";

//TODO: Add flavor to own component
class NWTBHome extends Component {
    render() {
        return (
            <div>
                <NWTBReactNavbar/>
                <h1>Welcome!</h1>
                <h5>NWTBS Alpha v1.0</h5>
            </div>
        );
    }
}

export default NWTBHome;