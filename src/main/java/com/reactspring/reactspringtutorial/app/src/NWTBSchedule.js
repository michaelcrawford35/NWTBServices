import React, { Component } from 'react';
import './NWTBApp.css'
import NWTBReactNavbar from "./NWTBReactNavbar";
import NWTBScheduleForm from "./NWTBScheduleForm";

class NWTBSchedule extends Component {
    render() {
        return (
            <div>
                <NWTBReactNavbar/>
                <div>
                    <NWTBScheduleForm/>
                </div>
            </div>
        );
    }
}

export default NWTBSchedule;