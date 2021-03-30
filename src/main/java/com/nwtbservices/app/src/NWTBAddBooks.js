import React, { Component } from 'react';
import NWTBNavbar from "./NWTBNavbar";
import NWTBAddBooksForm from './NWTBAddBooksForm';
class NWTBAddBooks extends Component {
    render() {
        return (
            <div>
                <NWTBNavbar/>
                <div>
                    <NWTBAddBooksForm/>
                </div>
            </div>
        );
    }
}

export default NWTBAddBooks;