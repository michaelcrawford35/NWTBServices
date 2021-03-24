import React from 'react';
import { useHistory } from 'react-router-dom';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const NWTBChangeBookCodeYearForm = (props) => {

    const history = useHistory();
    const routeClear = () => {
        let path = '/replace';
        history.push(path);
    }
    return (
        <Form align="center" className="form-spacing">
            <h2 className="nw-color">Textbook Services<br/>Replace Barcode</h2>
            <FormGroup className="form-inline draw-border">
                <Label for="bookCode">Book Code: </Label>
                <Input type="text" name="bookCodeText" id="bookCodeText" className="gen-spacing"/>
                <Label for="bookYear">Book Year: </Label>
                <Input type="text" name="bookYearText" id="bookYearText" className="gen-spacing"/>
            </FormGroup>
            <FormGroup className="form-inline draw-border">
                <Label for="newBookCode">New Book Code: </Label>
                <Input type="text" name="newBookCodeText" id="newBookCodeText" className="gen-spacing"/>
                <Label for="newBookYear">New Book Year: </Label>
                <Input type="text" name="newBookYearText" id="newBookYearText" className="gen-spacing"/>
            </FormGroup>
            <Button className="nw-button">Change</Button>
            <Button className="nw-button">Clear</Button>
        </Form>
    )
}

export default NWTBChangeBookCodeYearForm;