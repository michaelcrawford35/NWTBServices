import React from 'react';
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';

const NWTBSoldBooksForm = (props) => {
    return (
        <Form align="center" className="form-spacing">
            <h2 className="nw-color">Textbook Services<br/>Sold Books</h2>
            <FormGroup className="form-inline draw-border">
                <Label for="termLabel">Term:</Label>
                <Input type="text" name="termText" id="termText" className="gen-spacing"/>
                <Input type="text" name="termDisplay" id="termDisplay"/>
            </FormGroup>
            <FormGroup className="form-inline draw-border">
                <Label for="idLabel">ID:</Label>
                <Input type="text" name="idText" id="idText" className="gen-spacing" autoFocus="true"/>
                <Input type="text" name="idDisplay" id="idDisplay"/>
            </FormGroup>
            <Table size="sm">
                <thead>
                <tr className="nw-table-head">
                    <th>Term</th>
                    <th>Book Code</th>
                    <th>Book Year</th>
                    <th>Seq #</th>
                    <th width={'350px'}>Title</th>
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
            <Button className="nw-button">Exit</Button>
        </Form>
    );
}

export default NWTBSoldBooksForm;