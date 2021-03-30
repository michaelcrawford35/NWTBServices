import React, { Component } from 'react';
import NWTBNavbar from "./NWTBNavbar";
import NWTBMaintenanceForm from './NWTBMaintenanceForm'
class NWTBMaintenance extends Component {
    render() {
        return (
            <div>
                <NWTBNavbar/>
                <div>
                    <NWTBMaintenanceForm/>
                </div>
            </div>
        );
    }
}

export default NWTBMaintenance;