import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';
import './NWTBApp.css';

const NWTBCicoForm = (props) => {

    const history = useHistory();
    const routeClear=()=> {
        let path = '/cico';
        history.push(path);
    }

    return (
        <Form align="center" className="form-spacing">
            <h2 className="nw-color">Textbook Services<br/>Check In/Check Out</h2>
            <FormGroup className="form-inline draw-border">
                <Label for="termLabel">Term:</Label>
                <Input type="text" name="termText" id="termText" className="gen-spacing"/>
                <Input type="text" name="termDisplay" id="termDisplay"/>
                <FormGroup className="ml-auto form-inline">
                    <Label for="barcodeLabel">Barcode#:</Label>
                    <Input type="text" name="barcodeDisplay" id="badDisplay"/>
                </FormGroup>
            </FormGroup>
            <FormGroup className="form-inline draw-border">
                <Label for="idLabel">ID:</Label>
                <Input type="text" name="idText" id="idText" className="gen-spacing"/>
                <Input type="text" name="idDisplay" id="idDisplay"/>
                <FormGroup className="ml-auto form-inline">
                    <Label for="bagLabel">Bag#:</Label>
                    <Input type="text" name="bagDisplay" id="badDisplay"/>
                </FormGroup>
            </FormGroup>
            <Table size="sm">
                <thead>
                <tr className="nw-table-head">
                    <th>Term</th>
                    <th>Code</th>
                    <th>Year</th>
                    <th>Seq #</th>
                    <th>Title</th>
                    <th>Cost</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                </tr>
                </tbody>
            </Table>
            <Button className="nw-button">New ID</Button>
            <Button type="reset" className="nw-button" onClick={routeClear}>Clear</Button>
            <Button className="nw-button">Schedule</Button>
            <Button className="nw-button">Prev Books</Button>
            <Button className="nw-button">Sold Books</Button>
            <Button className="nw-button">Message</Button>
        </Form>
    );
}

export default NWTBCicoForm;