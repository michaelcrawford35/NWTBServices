import React, { Component } from 'react';
import './NWTBApp.css'
import NWTBNavbar from "./NWTBNavbar";
import NWTBSoldBooksForm from "./NWTBSoldBooksForm";

class NWTBSoldBooks extends Component {
    render() {
        return (
            <div>
                <NWTBNavbar/>
                <div>
                    <NWTBSoldBooksForm/>
                </div>
            </div>
        );
    }
}

export default NWTBSoldBooks;