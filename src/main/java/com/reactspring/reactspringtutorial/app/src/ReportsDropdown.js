import React, {useState} from "react";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";

const ReportsDD = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret className={"primary-bg nav-item dropdown-toggle ml-2"}>
                Reports
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem className={"nav-link"} href="/nw" disabled>Report Types Here (disabled)</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

export default ReportsDD;