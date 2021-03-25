import React from 'react';
import { useHistory } from 'react-router-dom';
import {Button, Form, FormGroup, Label, Input, Table} from 'reactstrap';

const NWTBQueryCourseForm = (props) => {

    const history = useHistory();
    const routeClear = () => {
        let path = '/replace';
        history.push(path);
    }
    return (
        <Form align="center" className="form-spacing">
            <h2 className="nw-color">Textbook Services <br/>Query a Course</h2>
            <FormGroup className="form-inline draw-border">
                <Label for="courseNum">Course: </Label>
                <Input type="text" name="courseNumText" id="courseNumText" className="gen-spacing"/>
            </FormGroup>
            <FormGroup className="form-inline draw-border">
               <Table size="sm">
                   <thread>
                       <tr className="nw-table-head">
                           <th>Book Code</th>
                           <th>Book Year</th>
                           <th>Title</th>
                       </tr>
                   </thread>
                   <tbody>
                   <tr>
                       <td></td>
                       <td></td>
                       <td></td>
                   </tr>
                   <tr>
                   </tr>
                   </tbody>
               </Table>
                <Button className="nw-button">Clear</Button>
            </FormGroup>
        </Form>
    )
}

export default NWTBQueryCourseForm;