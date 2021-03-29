import React, { Component } from 'react';
import './NWTBApp.css'
import NWTBNavbar from "./NWTBNavbar";
import NWTBPrevBooksForm from "./NWTBPrevBooksForm";

class NWTBPrevBooks extends Component {
    render() {
        return (
            <div>
                <NWTBNavbar/>
                <div>
                    <NWTBPrevBooksForm/>
                </div>
            </div>
        );
    }
}

export default NWTBPrevBooks;