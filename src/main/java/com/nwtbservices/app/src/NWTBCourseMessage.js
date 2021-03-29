import React, { Component } from 'react';
import './NWTBApp.css'
import NWTBNavbar from "./NWTBNavbar";
import NWTBCourseMessageForm from './NWTBCourseMessageForm'

class NWTBCourseMessage extends Component {
    render() {
        return (
            <div>
                <NWTBNavbar/>
                <div>
                    <NWTBCourseMessageForm/>
                </div>
            </div>
        );
    }
}

export default NWTBCourseMessage;