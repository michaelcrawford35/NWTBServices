import React, { Component } from 'react';
import NWTBNavbar from "./NWTBNavbar";
import NWTBChangeBookDispositionForm from './NWTBChangeBookDispositionForm'
class NWTBChangeBookDisposition extends Component {
    render() {
        return (
            <div>
                <NWTBNavbar/>
                <div>
                    <NWTBChangeBookDispositionForm/>
                </div>
            </div>
        );
    }
}

export default NWTBChangeBookDisposition;