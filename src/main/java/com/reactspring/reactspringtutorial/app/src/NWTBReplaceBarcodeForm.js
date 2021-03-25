import React from 'react';
import { useHistory } from 'react-router-dom';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const NWTBReplaceBarcodeForm = (props) => {

    const history = useHistory();
    const routeClear = () => {
        let path = '/replace';
        history.push(path);
    }
    return (
        <Form align="center" className="form-spacing">
            <h2 className="nw-color">Textbook Services<br/>Replace Barcode</h2>
            <FormGroup className="form-inline draw-border">
                <div className="hor-flexbox">
                    <div>
                        <Label for="bookCode">Book Code: </Label>
                        <Input type="text" name="bookCodeText" id="bookCodeText" className="gen-spacing"/>
                    </div>
                    <div>
                        <Label for="bookYear">Book Year: </Label>
                        <Input type="text" name="bookYearText" id="bookYearText"/>
                    </div>
                    <div>
                        <Label for="strikeBarcode" name="strikeBarcodeText">Strike Barcode: </Label>
                        <Input type="text" name="strikeBarcodeText" id="strikeBarcodeText"/>
                    </div>
                </div>

            </FormGroup>
            <div className="vert-flexbox">Book Info: </div>
            <FormGroup className="form-inline draw-border">
                <div className="hor-flexbox">
                    <Label for="bookName">Book Name: </Label>
                    <Input type="text" name="bookNameText" id="bookNameText" className="gen-spacing"/>
                </div>
                <div className="hor-flexbox">
                    <Label for="seqenceNum">Seq Number: </Label>
                    <Input type="text" name="sequenceNumText" id="sequenceNumText" className="gen-spacing"/>
                </div>
                <div className="hor-flexbox">
                    <Label for="barcodeTo">Change Barcode To: </Label>
                    <Input type="text" name="barcodeToText" id="barcodeToText" className="gen-spacing"/>
                </div>
            </FormGroup>
            <Button className="nw-button">Save</Button>
            <Button className="nw-button">Clear</Button>
        </Form>
    )
}

export default NWTBReplaceBarcodeForm;