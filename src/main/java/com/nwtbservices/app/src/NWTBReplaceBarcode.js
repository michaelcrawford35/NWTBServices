import React, { Component } from 'react';
import './NWTBApp.css'
import NWTBNavbar from "./NWTBNavbar";
import NWTBReplaceBarcodeForm from './NWTBReplaceBarcodeForm'


class NWTBReplaceBarcode extends Component {
    render() {
        return (
            <div>
                <NWTBNavbar/>
                <div>
                    <NWTBReplaceBarcodeForm/>
                </div>
            </div>
        );
    }
}

export default NWTBReplaceBarcode;