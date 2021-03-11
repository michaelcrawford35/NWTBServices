import React, {useState} from "react";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";

const UserDD = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret className={"primary-bg nav-item dropdown-toggle"}>
                User Options
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem header>User Type will go here</DropdownItem>
                <DropdownItem className={"nav-link"} href="/nw">Change Password</DropdownItem>
                <DropdownItem className={"nav-link"} href="/">Logout</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

export default UserDD;