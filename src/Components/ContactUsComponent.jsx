import React, { Component } from 'react';
import {Breadcrumb, BreadcrumbItem, Form, FormGroup, Label, Col, Input, Button} from 'reactstrap';
import {Link} from 'react-router-dom';


function RenderContactSelect({doesAgree, contactType, handleInputChange}) {
    if(doesAgree) {
        return(
            <Col md={{size: 3, offset: 1}}>
                <Input type="select" name="contactType"
                       value={contactType}
                       onChange={handleInputChange}>
                    <option value="none">Choose One</option>
                    <option>Tel.</option>
                    <option>Email</option>
                </Input>
            </Col>
        );
    }
    else {
        return(
            <></>
        );
    }
}

class ContactUs extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            telNum: '',
            email: '',
            doesAgree: false,
            contactType: '',
            message: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;
        /*Have to use a callback function as 'setState' function takes a while, which will  
          make the if statement excute before 'setState' even if it's written after it.*/
        this.setState({ [name]: value}, function () {
            if(!this.state.doesAgree && this.state.contactType) {
                console.log(this.state.doesAgree);
                this.setState({contactType: ""});
            }
        });
    }

    handleSubmit(event) {
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
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
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                {/*The following col element is equivalent to :
                                   <div className="col-md-10">
                                        *Some DOM elements*
                                   </div>
                                */}
                                <Col md={10}>
                                <Input type="text" 
                                       id="firstName"
                                       name="firstName"
                                       placeholder="Type Your First Name"
                                       value={this.state.firstName}
                                       onChange={this.handleInputChange}
                                       />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={10}>
                                <Input type="text"
                                       id="lastName"
                                       name="lastName" 
                                       placeholder="Type Your Last Name"
                                       value={this.state.lastName}
                                       onChange={this.handleInputChange}
                                       />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telNum" md={2}>Tel. Number</Label>
                                <Col md={10}>
                                <Input type="text" 
                                       id="telNum" 
                                       name="telNum" 
                                       placeholder="Type Your Telephone Number"
                                       value={this.state.telNum}
                                       onChange={this.handleInputChange}
                                       />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                <Input type="email" 
                                       id="email" 
                                       name="email" 
                                       placeholder="Type Your Email"
                                       value={this.state.email}
                                       onChange={this.handleInputChange}
                                       />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Message</Label>
                                <Col md={10}>
                                <Input type="textarea" 
                                       id="message" 
                                       name="message" 
                                       placeholder="Type Whatever you want"
                                       value={this.state.message}
                                       onChange={this.handleInputChange}
                                       />
                                </Col>
                            </FormGroup>
                            <FormGroup row className="text-centered">
                                <Col className="text-center mt-2">
                                    <Input type="checkbox" 
                                           id="doesAgree" 
                                           name="doesAgree" 
                                           value={this.state.doesAgree}
                                           onChange={this.handleInputChange}
                                           />
                                    <Label className="font-weight-bold"> May We Contact You ?</Label>
                                </Col>
                                <RenderContactSelect doesAgree={this.state.doesAgree} contactType={this.state.contactType} handleInputChange={this.handleInputChange}/>
                            </FormGroup>
                            <FormGroup className="text-center">
                                <Col>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;