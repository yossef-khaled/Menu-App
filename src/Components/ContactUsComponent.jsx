import React, { Component } from 'react';
import {Breadcrumb, BreadcrumbItem, Label, Col, Row, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';   

function RenderContactSelect() {
        return(
            <Col md={{size: 3, offset: 1}}>
                <Control.select
                       className="form-control mr-auto"
                       model=".contactType" 
                       name="contactType"
                       >
                    <option value="none">Choose One</option>
                    <option>Tel.</option>
                    <option>Email</option>
                </Control.select>
            </Col>
        );
};

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class ContactUs extends Component {
    
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        alert('Current State is: ' + JSON.stringify(values));
    }

    handleChange(values) {
        console.log(`DoesAgree after change is ${values.doesAgree}`);
    }

    render() {
        return(
            <div className="container">
                <div className="row m-2">
                    <Breadcrumb>
                      <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                      <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                      <h3>Contact Us</h3>
                      <hr />
                    </div> 
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="container row row-content">
                    <div className="row col-12">
                        <h2 className="mx-auto font-weight-bold mb-5">Reveal It To Us !</h2>
                    </div>
                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}
                                   onChange={(values) => this.handleChange(values)}
                        >
                            <Row className="form-group">
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                {/*The following col element is equivalent to :
                                   <div className="col-md-10">
                                        *Some DOM elements*
                                   </div>
                                */}
                                <Col md={10}>
                                <Control.text  
                                       className="form-control"
                                       model=".firstName"
                                       id="firstName"
                                       name="firstName"
                                       placeholder="Type Your First Name"
                                       validators={
                                           {required, maxLength: maxLength(15), minLength: minLength(3)}
                                       }
                                       />
                                       <Errors
                                            className="text-danger"
                                            model=".firstName"
                                            show="touched"
                                            messages={{
                                             required: 'Required',
                                             minLength: 'Must be greater than 2 characters',
                                             maxLength: 'Must be 15 characters or less'
                                            }}
                                       />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={10}>
                                <Control.text 
                                       className="form-control"
                                       model=".lastName"
                                       id="lastName"
                                       name="lastName" 
                                       placeholder="Type Your Last Name"
                                       validators={
                                        {required, maxLength: maxLength(15), minLength: minLength(3)}
                                    }
                                    />
                                    <Errors
                                         className="text-danger"
                                         model=".lastName"
                                         show="touched"
                                         messages={{
                                          required: 'Required ',
                                          minLength: 'Must be greater than 2 characters',
                                          maxLength: 'Must be 15 characters or less'
                                         }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telNum" md={2}>Tel. Number</Label>
                                <Col md={10}>
                                <Control.text 
                                       className="form-control"
                                       model=".telNum" 
                                       id="telNum" 
                                       name="telNum" 
                                       placeholder="Type Your Telephone Number"
                                       validators={{
                                           required, maxLength: maxLength(15), minLength: minLength(10), isNumber
                                       }}
                                       />
                                </Col>
                                <Errors
                                    className="text-danger"
                                    model=".telNum"
                                    show="touched"
                                    messages={{
                                     required: 'Required. ',
                                     minLength: 'Must be greater than 9 numbers. ',
                                     maxLength: 'Must be 15 numbers or less. ',
                                     isNumber: 'You can only type numbers.'
                                    }}
                                />
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                <Control.text  
                                       className="form-control"
                                       model=".email"
                                       id="email" 
                                       name="email" 
                                       placeholder="Type Your Email"
                                       validators={{
                                        required, validEmail
                                    }}
                                    />
                             </Col>
                             <Errors
                                 className="text-danger"
                                 model=".email"
                                 show="touched"
                                 messages={{
                                  required: 'Required. ',
                                  validEmail: 'This email is invalid.'
                                 }}
                             />
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Message</Label>
                                <Col md={10}>
                                <Control.textarea 
                                       className="form-control"
                                       model=".message"
                                       id="message" 
                                       name="message" 
                                       placeholder="Type Whatever you want"
                                       />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                    <Control.checkbox
                                           className="mt-1 mr-1"
                                           model=".doesAgree"
                                           id="doesAgree" 
                                           name="doesAgree"
                                           />
                                    <Label className="font-weight-bold"> May We Contact You ?</Label>
                                    <RenderContactSelect/>
                            </Row>
                            <Row className="text-center form-group">
                                <Col>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
};

export default ContactUs;