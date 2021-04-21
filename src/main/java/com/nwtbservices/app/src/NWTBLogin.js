import React, { Component } from 'react';
import './NWTBApp.css'
import './NWTBLogin.css'
import NWTBNavbar from "./NWTBNavbar";
import NWTBLoginForm from "./NWTBLoginForm";

//TODO: Add flavor to own component
class NWTBLogin extends Component {
    render() {
        return (
            <div>
                <NWTBNavbar/>
                <h1>Please Log In</h1>
                <h5>NWTBS Login Page</h5>
                <NWTBLoginForm/>
            </div>
        );
    }
}

export default NWTBLogin;