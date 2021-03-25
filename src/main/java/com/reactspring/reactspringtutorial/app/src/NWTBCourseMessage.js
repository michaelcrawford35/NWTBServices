import React, { Component } from 'react';
import './NWTBApp.css'
import NWTBReactNavbar from "./NWTBReactNavbar";
import NWTBCourseMessageForm from './NWTBCourseMessageForm'

class NWTBCourseMessage extends Component {
    render() {
        return (
            <div>
                <NWTBReactNavbar/>
                <div>
                    <NWTBCourseMessageForm/>
                </div>
            </div>
        );
    }
}

export default NWTBCourseMessage;