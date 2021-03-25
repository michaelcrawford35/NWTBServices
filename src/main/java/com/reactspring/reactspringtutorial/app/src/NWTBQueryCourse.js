import React, { Component } from 'react';
import './NWTBApp.css'
import NWTBReactNavbar from "./NWTBReactNavbar";
import NWTBQueryCourseForm from './NWTBQueryCourseForm'


class NWTBQueryCourse extends Component {
    render() {
        return (
            <div>
                <NWTBReactNavbar/>
                <div>
                    <NWTBQueryCourseForm/>
                </div>
            </div>
        );
    }
}

export default NWTBQueryCourse;