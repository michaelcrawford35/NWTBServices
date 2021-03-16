import React from 'react';
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';

const NWTBScheduleForm = (props) => {
    return (
        <Form align="center" className="form-spacing">
            <h2 className="nw-color">Textbook Services<br/>Patron Schedule</h2>
            <FormGroup className="form-inline draw-border">
                <Label for="termLabel">Term:</Label>
                <Input type="text" name="termText" id="termText" className="gen-spacing"/>
                <Input type="text" name="termDisplay" id="termDisplay"/>
            </FormGroup>
            <FormGroup className="form-inline draw-border">
                <Label for="idLabel">ID:</Label>
                <Input type="text" name="idText" id="idText" className="gen-spacing"/>
                <Input type="text" name="idDisplay" id="idDisplay"/>
            </FormGroup>
            <Table size="sm">
                <thead>
                <tr className="nw-table-head">
                    <th>Course</th>
                    <th></th>
                    <th></th>
                    <th width={'350px'}>Title</th>
                    <th>Session</th>
                    <th>Day</th>
                    <th>Time</th>
                    <th>#Books</th>
                    <th width={'250px'}></th>
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

export default NWTBScheduleForm;