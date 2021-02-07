import React, { Component } from 'react';
import {
    Row, Card, CardImg, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Button, 
    Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from "reactstrap";  
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import '../App.css';
import Col from 'reactstrap/lib/Col';

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && (val.length >= len);
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const isRate = (val) => val && val !== 'none';

class  DishDetail extends Component {
    
    state = {
        isModalOpen: false
    }   

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleLogin = (values) => {
        alert(`You submitted a comment with : ${JSON.stringify(values)}`);
    }

    handleChange = (values) => {
        console.log(`You changed ${JSON.stringify(values)}`);
        console.log(`You changed rate ${values.rate}`);
    }

    render() {

        const dishComments = this.props.comments.map((comment) => {
            return(
                <div className="m-3">
                    <hr/>
                    <CardTitle tag="h4">
                        {comment.author}
                    </CardTitle>
                    <CardText>
                        {comment.comment}
                    </CardText>           
                </div>
            );
        });

        return( 
            <div className="container col-10 m-4"> 
                <Row>
                    <div className="row m-2">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                       <div className="col-12">
                            <h3>{this.props.dish.name}</h3>
                            <hr />
                        </div> 
                    </div>
                </Row>
                <Row className="align-items-start">
                    <CardImg width="100%" className="col-6" src={this.props.dish.image} alt={this.props.dish.name} />
                    <Card className="col-5">
                        <CardTitle className="m-2" tag="h4">
                                {this.props.dish.name} :
                        </CardTitle>
                        <CardText className="col-15">
                            - {this.props.dish.description}
                        </CardText>
                        <div className="container">
                            <h3>Comments :</h3>
                            {dishComments.length > 0 ? dishComments : <p className="ml-3 text-muted">- There is no comments for this dish</p>}
                        </div>
                    <Button outline color="info" onClick={this.toggleModal} className="submitComment" width="50%">Submit Comment</Button>
                    </Card>
                </Row>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        <strong>
                            Submit Comment
                        </strong>
                    </ModalHeader>
                    <LocalForm onSubmit={(values) => this.handleLogin(values)}
                                onChange={(values) => this.handleChange(values)}
                    >
                            <Label htmlFor="rate" className="ml-2 mt-2">
                                Rate this dish
                            </Label>
                                <Row className="">
                                    <div className="commentRateContainer">
                                        <Control.select 
                                                className="commentRate border"  
                                                name="rate" 
                                                model=".rate"
                                                id="rate"
                                                validators={{
                                                    isRate: isRate
                                                }}
                                                >
                                                    <option value="none">No rate</option>
                                                    <option>1. Very Bad</option>
                                                    <option>2. Bad</option>
                                                    <option>3. Good</option>
                                                    <option>4. Very Good</option>
                                                    <option>5. Excellent</option>
                                        </Control.select>
                                    </div>
                                    <Errors
                                        className="text-danger ml-5"
                                        show="touched"
                                        model=".rate"
                                        messages={{
                                            isRate: 'Please, give a rate to the dish'
                                        }}
                                    />
                                </Row>
                        <hr/>
                            <Label htmlFor="username" className="ml-2">
                                    Enter your name
                            </Label>
                            <Row>
                                <Control.text
                                    className="commentWriter border"  
                                    id="username" 
                                    name="username"
                                    model=".username"
                                    placeholder="Type your name"
                                    validators={{
                                        required, minLength: minLength(2), maxLength: maxLength(15)
                                    }}
                                    />
                                <Errors
                                    className="text-danger ml-5 w-75"
                                    model=".username"
                                    show="touched"
                                    messages={{
                                        required:"Please, enter your name.",
                                        minLength:" Your name must be greater than or equal to 2 charachtars.",
                                        maxLength:" Your name must be less than 15 charachtars."
                                    }}
                                />
                            </Row>
                        <hr/>
                            <Label htmlFor="comment" className="ml-2">
                                    Comment
                            </Label>
                            <Row>
                                <Control.textarea
                                    className="comment border"
                                    id="comment"
                                    name="comment" 
                                    model=".comment"
                                    placeholder="Type your comment"
                                    validators={{
                                        required
                                    }}
                                />
                                <Errors
                                    className="text-danger ml-5"
                                    show="touched"
                                    model=".comment"
                                    messages={{
                                        required: "Please, write a comment."
                                    }}
                                />
                            </Row>
                        <Button type="submit" className="post">Post</Button>
                    </LocalForm>
                </Modal>
            </div>
        );
    }
}

export default DishDetail;