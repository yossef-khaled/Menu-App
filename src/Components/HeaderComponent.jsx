import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
         Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap'; 
import { NavLink } from 'react-router-dom'; 

class Header extends Component {
    state = { 
        isNavOpen: false,
        isModalOpen: false
    };

    toggleNavbar = () => {
        this.setState({
            isNavOpen : !this.state.isNavOpen
        });
    }

    toggleModal = () => {
        this.setState({
            isModalOpen : !this.state.isModalOpen
        });
    }

    handleLogin = (event) => {
        alert(`Your user name is ${this.username.value},
        your password is ${this.password.value} 
        with boolean value ${this.remember.checked} to remember you`)
        event.preventDefault();
    }

    render() { 
        return ( 
            <React.Fragment>
                <Navbar dark color="primary" expand="md">
                  <div className="container">
                    
                    {/*NavbarBrand gives the menu tag more space than without it */}
                    <NavbarToggler navbar onClick={this.toggleNavbar} />
                    <NavbarBrand href="/" className="mr-auto">
                      <img src="assets/images/logo.png" height="60" width="80" alt="Resturant Name"></img>
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span> Home 
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg"></span> AboutUs
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg"></span> Resturant Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-lg"></span> Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModal}>
                                    <span className="fa fa-sign-in fa-lg color-white"></span> Login
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                  </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>The Header</h1>
                                <p>Paragraph</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">
                                    UserName
                                </Label>
                                {
                                /*Whenever I type this.username in any place in this component, 
                                  It will refrence to a value of the typed input as I used the 'innerRef' attribute.
                                  See the username, password, & remember inputs.
                                */}
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input}  
                                ></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">
                                    Password
                                </Label>
                                <Input type="password" id="password" name="password"
                                innerRef={(input) => this.password = input}
                                ></Input>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="remember" name="remember"
                                    innerRef={(input) => this.remember = input}
                                    ></Input>Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
         );
    }
}
 
export default Header;