import React, {useState} from "react";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";

const PatronDD = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret className={"primary-bg nav-item dropdown-toggle ml-2"}>
                Patron
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem className={"nav-link"} href="/cico">Check In/Check Out</DropdownItem>
                <DropdownItem className={"nav-link"} href="/schedule">Patron Schedule</DropdownItem>
                <DropdownItem className={"nav-link"} href="/prevbooks">Patrons Previous Books</DropdownItem>
                <DropdownItem className={"nav-link"} href="/soldbooks">Patrons Sold Books</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

export default PatronDD;