import React, { Component } from 'react';
import './NWTBApp.css'
import NWTBNavbar from "./NWTBNavbar";
import NWTBScheduleForm from "./NWTBScheduleForm";

class NWTBSchedule extends Component {
    render() {
        return (
            <div>
                <NWTBNavbar/>
                <div>
                    <NWTBScheduleForm/>
                </div>
            </div>
        );
    }
}

export default NWTBSchedule;