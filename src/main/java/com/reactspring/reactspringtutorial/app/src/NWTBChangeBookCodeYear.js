import React, { Component } from 'react';
import './NWTBApp.css'
import NWTBReactNavbar from "./NWTBReactNavbar";
import NWTBChangeBookCodeYearForm from './NWTBChangeBookCodeYearForm'


class NWTBChangeBookCodeYear extends Component {
    render() {
        return (
            <div>
                <NWTBReactNavbar/>
                <div>
                    <NWTBChangeBookCodeYearForm/>
                </div>
            </div>
        );
    }
}

export default NWTBChangeBookCodeYear;