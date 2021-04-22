import React, {Component} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Button, Form, FormGroup, Label, Input, Container, Row, Col, ButtonGroup} from 'reactstrap';


class NWTBMaintenanceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {nwtxin_fetched: []};
  }

  async fetchNWTXIN(code) {
    await fetch(`/api/nwtxin/${code}`, {
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
        .then(response => response.json())
        .then(data => this.setState({nwtxin: data}));
  }

 render()
 {
   const {nwtxin_fetched} = this.state;

   const test = nwtxin_fetched.map(nwtxin => {
     return <div>
       {nwtxin.NWTXIN_BOOK_CODE || "Does this show up?"}
     </div>
   });

   return (

       <Form align="center" className="form-spacing" onSubmit={this.fetchNWTXIN}>
         <h2 className="nw-color">Textbook Services<br />Maintenance</h2>
         <div>
           {test}
         </div>
         <FormGroup className="form-inline draw-border">
           <div className="hor-flexbox">
             <Label id="form-label" for="bookCode">Book Code: </Label>
             <Input type="text" name="bookCodeText" id="bookCodeText" className="gen-spacing"/>

             <Label id="form-label" for="bookYear">Book Year: </Label>
             <Input type="text" name="bookYearText" id="bookYearText"/>

           </div>
         </FormGroup>



         <Container>
           <Row  >

             <Col sm='8'>


               <FormGroup className="form-inline draw-border">
                 <div id="ribbon">Book Info: </div>

                 <div className="hor-flexbox">
                   <Label id="form-label" for="title">Title: </Label>
                   <Input type="text" name="titleText" id="titleText" className="gen-spacing" style={{ width: '900px' }} />
                 </div>
                 <div className="hor-flexbox">
                   <Label id="form-label" for="author">Author: </Label>
                   <Input type="text" name="authorText" id="authorText" className="gen-spacing" style={{ width: '900px' }} />
                 </div>
                 <div className="hor-flexbox">
                   <Label id="form-label" for="publisher">Publisher: </Label><br />
                   <Input type="text" name="publisherText1" id="publisherText" className="gen-spacing" style={{ width: '900px' }} />
                 </div>

                 <div className="hor-flexbox">
                   <Label id="form-label" for="isbn">ISBN#: </Label>
                   <Input type="text" name="isbnText" id="isbnText" className="gen-spacing" style={{ width: "175px" }} />

                   <Label id="form-label" for="cost">Cost: </Label>
                   <Input type="text" name="costText" id="costText" className="gen-spacing" />
                 </div>
                 <div className="hor-flexbox">
                   <Label id="form-label" for="status">Status: </Label>
                   <Input type="text" name="statusText" id="statusText" className="gen-spacing" style={{ width: "195px" }} />

                   <Label id="form-label" for="purchaseDate">Purchase Date: </Label>
                   <Input type="date" name="purchaseDateText" id="purchaseDateText" className="gen-spacing" />
                 </div>
                 <div className="hor-flexbox">
                   <Label id="form-label" for="status">Discontinued date: </Label>
                   <Input type="date" name="statusText" id="statusText" className="gen-spacing" style={{ width: "300px" }} />

                   <Label id="form-label" for="purchaseDate">First Used Date: </Label>
                   <Input type="date" name="purchaseDateText" id="purchaseDateText" className="gen-spacing" />
                 </div>
                 <div className="hor-flexbox">
                   <Label id="form-label" for="publisher">Comment: </Label><br />
                   <Input type="text" name="publisherText1" id="publisherText" className="gen-spacing" style={{ width: '900px' }} />
                 </div>


               </FormGroup>
               <Col>
                 <FormGroup className="form-inline draw-border">
                   <div id="ribbon">Course Info: </div>
                   <div className="hor-flexbox">
                     <Label id="form-label" for="courseTitle">Course Title: </Label>
                     <Input type="text" name="titleText" id="titleText" className="gen-spacing" style={{ width: '1200px' }} />
                   </div>
                   <div className="hor-flexbox">
                     <Label id="form-label" for="course1">Course1: </Label>
                     <Input type="text" name="courseOneText" id="courseOneText" className="gen-spacing" />

                     <Label id="form-label" for="coursefour">Course4: </Label>
                     <Input type="text" name="coursefourText" id="coursefourText" className="gen-spacing" />
                   </div>
                   <div className="hor-flexbox">
                     <Label id="form-label" for="coursetwo">Course2: </Label>
                     <Input type="text" name="coursetwoText" id="coursetwoText" className="gen-spacing" />

                     <Label id="form-label" for="coursefive">Course5: </Label>
                     <Input type="text" name="coursefiveText" id="coursefiveText" className="gen-spacing" />
                   </div>
                   <div className="hor-flexbox">
                     <Label id="form-label" for="coursethree" style={{ width: "90px" }}>Course3: </Label>
                     <Input type="text" name="coursethreeText" id="coursethreeText" />

                   </div>


                 </FormGroup>

               </Col>



             </Col>
             <Col sm="4">


               <FormGroup className="form-inline draw-border" >

                 <div id="ribbon">Book stats: </div>
                 <div className="hor-flexbox">
                   <Label id="form-label" for="booksPurchased">Books Purchased: </Label>
                   <Input type="number" name="booksPurchasedText" id="booksPurchasedText" className="gen-spacing" style={{ width: "75px" }} />

                 </div>
                 <div className="hor-flexbox">
                   <Label id="form-label" for="booksSold">Books Sold: </Label>
                   <Input type="number" name="booksSoldText" id="booksSoldText" className="gen-spacing" style={{ width: "75px" }} />

                 </div>
                 <div className="hor-flexbox">
                   <Label id="form-label" for="booksUnrepairable">Books Unrepairable: </Label>
                   <Input type="number" name="booksUnrepairableText" id="booksUnrepairableText" className="gen-spacing" style={{ width: "75px" }} />

                 </div>
                 <div className="hor-flexbox">
                   <Label id="form-label" for="booksNonreturned">Books Nonreturned: </Label>
                   <Input type="number" name="booksNonreturnedText" id="booksNonreturnedText" className="gen-spacing" style={{ width: "75px" }} />

                 </div>
                 <div className="hor-flexbox">
                   <Label id="form-label" for="booksInInventory">Books In Inventory: </Label>
                   <Input type="number" name="booksInInventoryText" id="booksInInventoryText" className="gen-spacing" style={{ width: "75px" }} />

                 </div>
                 <div className="hor-flexbox">
                   <Label id="form-label" for="booksCheckedOut">Books Checked Out: </Label>
                   <Input type="number" name="booksCheckedOutText" id="booksCheckedOutText" className="gen-spacing" style={{ width: "75px" }} />

                 </div>
                 <div className="hor-flexbox">
                   <Label id="form-label" for="booksCheckedIn">Books Checked In: </Label>
                   <Input type="number" name="booksCheckedInText" id="booksCheckedInText" className="gen-spacing" style={{ width: "75px" }} />

                 </div>
                 <div className="hor-flexbox">
                   <Label id="form-label" for="lastSeqNo">Last Seq No: </Label>
                   <Input type="number" name="lastSeqNoText" id="lastSeqNoText" className="gen-spacing" style={{ width: "75px" }} />

                 </div>
                 <div style={{ height: "235px" }}>
                   &nbsp;

                 </div>




               </FormGroup>

             </Col>

           </Row>


         </Container>

         <Button className="nw-button">Save</Button>
         <Button className="nw-button">Main Menu</Button>
         <Button className="nw-button">Clear</Button>

       </Form>
   )
 }
}

export default NWTBMaintenanceForm;