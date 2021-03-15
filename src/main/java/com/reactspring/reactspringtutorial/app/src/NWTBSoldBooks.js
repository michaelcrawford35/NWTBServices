import React, { Component } from 'react';
import './NWTBApp.css'
import NWTBReactNavbar from "./NWTBReactNavbar";
import NWTBSoldBooksForm from "./NWTBSoldBooksForm";

class NWTBSoldBooks extends Component {
    render() {
        return (
            <div>
                <NWTBReactNavbar/>
                <div>
                    <NWTBSoldBooksForm/>
                </div>
            </div>
        );
    }
}

export default NWTBSoldBooks;