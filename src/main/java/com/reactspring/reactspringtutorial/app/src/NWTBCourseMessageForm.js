import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';

const NWTBCourseMessageForm = (props) => {

    const history = useHistory();
    const routeClear = () => {
        let path = '/cico';
        history.push(path);
    }

    return (
        <Form align="center" className="form-spacing">
            <h2 className="nw-color">Textbook Services<br/>Course Message</h2>
            <FormGroup className="form-inline draw-border">
                <Label for="CourseNumLabel">Course: </Label>
                <Input type="text" name="courseNumText" id="courseNumText" className="gen-spacing"/>
            </FormGroup>
            <FormGroup className="form-inline draw-border">
                <Label for="messageLabel">Message: </Label>
                <Input type="text" name="messageText" id="messageText" className="gen-spacing"/>
            </FormGroup>
            <Button className="nw-button">Save</Button>
            <Button className="nw-button">Delete</Button>
            <Button className="nw-button">Clear</Button>
        </Form>
    )
}

export default NWTBCourseMessageForm;