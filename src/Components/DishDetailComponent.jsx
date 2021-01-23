import React, { Component } from 'react';
import {
    Row, Card, CardImg, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Button, 
    Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from "reactstrap";  
import {Link} from 'react-router-dom';
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

    handleLogin = (event) => {
        alert(`You submitted a comment`)
        event.preventDefault();
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
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="rate">
                                Rate this dish
                            </Label>
                                <select name="rate">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                        </FormGroup>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Modal>
            </div>
        );
    }
}

export default DishDetail;