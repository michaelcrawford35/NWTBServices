import React, { Component } from 'react';
import './NWTBApp.css'
import NWTBReactNavbar from "./NWTBReactNavbar";
import NWTBPrevBooksForm from "./NWTBPrevBooksForm";

class NWTBPrevBooks extends Component {
    render() {
        return (
            <div>
                <NWTBReactNavbar/>
                <div>
                    <NWTBPrevBooksForm/>
                </div>
            </div>
        );
    }
}

export default NWTBPrevBooks;