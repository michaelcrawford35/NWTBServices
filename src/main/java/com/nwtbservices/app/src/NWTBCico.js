import React, { Component } from 'react';
import './NWTBApp.css'
import NWTBNavbar from "./NWTBNavbar";
import NWTBCicoForm from './NWTBCicoForm'

class NWTBCico extends Component {
    render() {
        return (
            <div>
                <NWTBNavbar/>
                <div>
                    <NWTBCicoForm/>
                </div>
            </div>
        );
    }
}

export default NWTBCico;