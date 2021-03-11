import React, {Component} from "react";
import { Button, Navbar } from 'reactstrap';
import NW_Logo from './nwlogo-crop.svg';
import InvDD from './InventoryDropdown';
import PatronDD from './PatronDropdown';
import ReportsDD from "./ReportsDropdown";
import UserDD from "./UserDropdown";

export default class NWTBReactNavbar extends Component {
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
        return <Navbar className={"navbar navbar-expand-lg navbar-dark primary-bg"}>
            <img className={"navbar-brand"} src={NW_Logo} alt='Northwest Missouri State Logo' height="40"/>
            <Button className={"primary-bg nav-item ml-2"} href={"/nw"}>Home</Button>
            <InvDD/>
            <PatronDD/>
            <ReportsDD/>
            <div className={"ml-auto"}>
                <UserDD/>
            </div>
        </Navbar>
    }
}