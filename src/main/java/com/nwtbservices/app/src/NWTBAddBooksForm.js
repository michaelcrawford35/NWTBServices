import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';



const NWTBAddBooksForm = (props) => {


  const history = useHistory();
  const routeClear = () => {
    let path = '/replace';
    history.push(path);
  }
  return (
    <Form align="center" className="form-spacing">
      <h2 className="nw-color">Textbook Services<br />Add A Book</h2>
      <FormGroup className="form-inline draw-border">
        <div className="hor-flexbox">


          <Label id="form-label" for="bookCode">Book Code: </Label>
          <Input type="text" name="bookCodeText" id="bookCodeText" className="gen-spacing" />


          <Label id="form-label" for="bookYear">Book Year: </Label>
          <Input type="text" name="bookYearText" id="bookYearText" />


        </div>

      </FormGroup>

      <FormGroup className="form-inline draw-border">
        <div id="ribbon">Book Info: </div>
        <div className="hor-flexbox">
          <Label id="form-label" for="title">Title </Label>
          <Input type="text" name="titleText" id="titleText" className="gen-spacing" />
        </div>
        <div className="hor-flexbox">
          <Label id="form-label" for="seqenceNum">Seq Number: </Label>
          <Input type="text" name="sequenceNumText" id="sequenceNumText" className="gen-spacing" />
        </div>
        <div className="hor-flexbox">
          <Label id="form-label" for="strikeBarcode">StrikeBarcode: </Label>
          <Input type="text" name="strikebarcodeText" id="strikebarcodeText" className="gen-spacing" />
        </div>
      </FormGroup>
      <Button className="nw-button">Main Menu</Button>
      <Button className="nw-button">Clear</Button>
    </Form>
  )
}

export default NWTBAddBooksForm;