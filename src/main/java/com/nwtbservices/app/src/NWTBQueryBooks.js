import React, { Component } from 'react';
import NWTBNavbar from "./NWTBNavbar";
import NWTBQueryBooksForm from './NWTBQueryBooksForm'
class NWTBQueryBooks extends Component {
    render() {
        return (
            <div>
                <NWTBNavbar/>
                <div>
                    <NWTBQueryBooksForm/>
                </div>
            </div>
        );
    }
}

export default NWTBQueryBooks;