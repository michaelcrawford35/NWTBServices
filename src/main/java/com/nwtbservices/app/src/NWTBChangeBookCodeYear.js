import React, { Component } from 'react';
import './NWTBApp.css'
import NWTBNavbar from "./NWTBNavbar";
import NWTBChangeBookCodeYearForm from './NWTBChangeBookCodeYearForm'


class NWTBChangeBookCodeYear extends Component {
    render() {
        return (
            <div>
                <NWTBNavbar/>
                <div>
                    <NWTBChangeBookCodeYearForm/>
                </div>
            </div>
        );
    }
}

export default NWTBChangeBookCodeYear;