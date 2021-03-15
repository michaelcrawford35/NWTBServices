import React, { Component } from 'react';
import './NWTBApp.css'
import NWTBReactNavbar from "./NWTBReactNavbar";
import NWTBCicoForm from './NWTBCicoForm'

class NWTBCico extends Component {
    render() {
        return (
            <div>
                <NWTBReactNavbar/>
                <div>
                    <NWTBCicoForm/>
                </div>
            </div>
        );
    }
}

export default NWTBCico;