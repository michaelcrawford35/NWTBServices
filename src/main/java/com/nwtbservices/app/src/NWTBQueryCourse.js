import React, { Component } from 'react';
import './NWTBApp.css'
import NWTBNavbar from "./NWTBNavbar";
import NWTBQueryCourseForm from './NWTBQueryCourseForm'


class NWTBQueryCourse extends Component {
    render() {
        return (
            <div>
                <NWTBNavbar/>
                <div>
                    <NWTBQueryCourseForm/>
                </div>
            </div>
        );
    }
}

export default NWTBQueryCourse;