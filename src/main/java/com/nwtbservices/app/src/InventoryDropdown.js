import React, {useState} from "react";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";

const InventoryDD = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret className={"primary-bg nav-item dropdown-toggle ml-2"}>
                    Inventory
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem className={"nav-link"} href="maintenance">Maintenance</DropdownItem>
                    <DropdownItem className={"nav-link"} href="/addbooks">Add Books</DropdownItem>
                    <DropdownItem className={"nav-link"} href="/querybooks">Query Book</DropdownItem>
                    <DropdownItem className={"nav-link"} href="/changebookdisposition">Change Book Disposition</DropdownItem>
                    <DropdownItem className={"nav-link"} href="/replace">Replace Barcode</DropdownItem>
                    <DropdownItem className={"nav-link"} href="/courseQuery">Query Course</DropdownItem>
                    <DropdownItem className={"nav-link"} href="/courseMessage">Course Message</DropdownItem>
                    <DropdownItem className={"nav-link"} href="/changebcy">Change Book Code/Year</DropdownItem>
                </DropdownMenu>
            </Dropdown>
    );
}

export default InventoryDD;