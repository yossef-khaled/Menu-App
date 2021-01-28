import React, { Component } from 'react';
import {
    Row, Card, CardImg, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Button, 
    Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from "reactstrap";  
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import '../App.css'

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
        console.log(`You changed ${values}`);
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
                        Submit Comment
                    </ModalHeader>
                    <LocalForm onSubmit={(values) => this.handleLogin(values)}
                                onChange={(values) => this.handleChange(values)}
                    >
                        <Row className="mt-2">
                            <Label htmlFor="rate" className="ml-5 mr-auto text-bold">
                                <strong>
                                Rate this dish
                                </strong>
                            </Label>
                                <Control.select 
                                        className="mr-3 border border-success" 
                                        name="rate" 
                                        model=".rate"
                                        id="rate"
                                        className="w-25 float-right mr-3">
                                            <option value="none">No rate</option>
                                            <option>1- Very Bad</option>
                                            <option>2- Bad</option>
                                            <option>3- Good</option>
                                            <option>4- Very Good</option>
                                            <option>5- Excellent</option>
                                </Control.select>
                        </Row>
                        <hr/>
                        <Row>
                            <Label htmlFor="username" className="ml-5 mr-auto">
                                <strong>
                                    Enter your name
                                </strong>
                            </Label>
                            <Control.text 
                                className="mr-auto" 
                                id="username" 
                                name="username"
                                model=".username"
                                placeholder="Type your name"
                                />
                        </Row>
                        <hr/>
                        <Row>
                            <Label htmlFor="comment" className="ml-5 mr-auto">
                                <strong>
                                    Comment
                                </strong>
                            </Label>
                            <Row>
                                <Control.textarea
                                    className="ml-3 w-75"
                                    id="comment"
                                    name="comment" 
                                    model=".comment"
                                    placeholder="Type your comment"
                                />
                            </Row>
                        </Row>
                        <Button type="submit" className="post">Post</Button>
                    </LocalForm>
                </Modal>
            </div>
        );
    }
}

export default DishDetail;