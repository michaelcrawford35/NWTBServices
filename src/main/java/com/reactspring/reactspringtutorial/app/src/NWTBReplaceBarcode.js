import React, { Component } from 'react';
import './NWTBApp.css'
import NWTBReactNavbar from "./NWTBReactNavbar";
import NWTBReplaceBarcodeForm from './NWTBReplaceBarcodeForm'


class NWTBReplaceBarcode extends Component {
    render() {
        return (
            <div>
                <NWTBReactNavbar/>
                <div>
                    <NWTBReplaceBarcodeForm/>
                </div>
            </div>
        );
    }
}

export default NWTBReplaceBarcode;