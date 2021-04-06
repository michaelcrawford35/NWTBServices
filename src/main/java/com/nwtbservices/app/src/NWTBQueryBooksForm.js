import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';


const NWTBQueryBooksForm = (props) => {

  const history = useHistory();
  const routeClear = () => {
    let path = '/replace';
    history.push(path);
  }
  return (
    <Form align="center" className="form-spacing">
      <h2 className="nw-color">Textbook Services<br />Querry A Book</h2>
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
          <Label id="form-label" for="title">Title: </Label>
          <Input type="text" name="titleText" id="titleText" className="gen-spacing" />
        </div>
        <div className="hor-flexbox">
          <Label id="form-label" for="seqenceNum">Seq Number: </Label>
          <Input type="text" name="sequenceNumText" id="sequenceNumText" className="gen-spacing" />
        </div>

      </FormGroup>


      <Container>
        <Row  >

          <Col sm='6'>
            <FormGroup className="form-inline draw-border">
              <div id="ribbon">CurrentInfo: </div>

              <div className="hor-flexbox">
                <Label id="form-label" for="currentDisposition">Current Disposition : </Label>
                <Input type="text" name="currentdispositionText" id="currentdispositionText" className="gen-spacing" />
              </div>
              <div className="hor-flexbox">
                <Label id="form-label" for="termCheckout">Term Check Out: </Label>
                <Input type="text" name="termcheckoutText" id="termcheckoutText" className="gen-spacing" />
              </div>
              <div className="hor-flexbox">
                <Label id="form-label" for="checkedoutTo">Checked Out To: </Label><br />
                <Input type="text" name="checkedOutToText1" id="checkedOutToText1" className="gen-spacing" />
              </div>

              <div className="hor-flexbox">
                <Label id="form-label" for="dateCheckedout">Date Checeked Out: </Label>
                <Input type="date" name="dateCheckedOutText" id="dateCheckedOutText" className="gen-spacing" />

              </div>
            </FormGroup>



          </Col>
          <Col sm="6">

            <FormGroup className="form-inline draw-border">

              <div id="ribbon">Previous Info: </div>
              <div className="hor-flexbox">
                <Label id="form-label" for="previousTermCheckOut">Previous Term Check Out: </Label>
                <Input type="text" name="previousTermCheckOutText" id="previousTermCheckOutText" className="gen-spacing" />

              </div>
              <div className="hor-flexbox">
                <Label id="form-label" for="previousCheckedOutTo1">Previously checked Out To: </Label>
                <Input type="text" name="previousCheckedOutToText1" id="previousCheckedOutToText1" className="gen-spacing" />

              </div>
              <div className="hor-flexbox">
                <Label id="form-label" for="previousCheckedOutTo2"> </Label>
                <Input type="text" name="previousCheckedOutToText2" id="previousCheckedOutToText2" className="gen-spacing" />

              </div>
              <div className="hor-flexbox">
                <Label id="form-label" for="dateCheckedIn">DateCheckedIn: </Label>
                <Input type="date" name="dateCheckedInText" id="dateCheckedInText" className="gen-spacing" />

              </div>

            </FormGroup>

          </Col>

        </Row>


      </Container>


      <Button className="nw-button">Main Menu</Button>
      <Button className="nw-button">Clear</Button>
    </Form>
  )
}

export default NWTBQueryBooksForm;