import React, { Component } from 'react';

import './NWTBNavbar.css';
import nwlogo from './nwlogo-crop.svg';

export default class NWTBNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand">
                <img src={nwlogo} height="40"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/nw">Home</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Inventory</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Maintenance</a>
                            <a className="dropdown-item" href="#">Add Books</a>
                            <a className="dropdown-item" href="#">Query Book</a>
                            <a className="dropdown-item" href="#">Change Book Disposition</a>
                            <a className="dropdown-item" href="#">Replace Barcode</a>
                            <a className="dropdown-item" href="#">Query Course</a>
                            <a className="dropdown-item" href="#">Course Message</a>
                            <a className="dropdown-item" href="#">Change Book Code/Year</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Patron</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Check In/Check Out</a>
                            <a className="dropdown-item" href="#">Patron Schedule</a>
                            <a className="dropdown-item" href="#">Patron's Previous Books</a>
                            <a className="dropdown-item" href="#">Patron's Sold Books</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Reports</a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Supervisor</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Change Password</a>
                            <a className="dropdown-item" href="#">Logout</a>
                        </div>
                    </li>
                </ul>
            </div>

        </nav>
    }
}