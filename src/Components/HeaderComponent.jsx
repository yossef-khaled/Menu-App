import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap'; 
import { NavLink } from 'react-router-dom'; 
import { findAllByTestId } from '@testing-library/react';

class Header extends Component {
    state = { 
        isNavOpen : false
    };

    toggleNavbar = () => {
        this.setState({
            isNavOpen : !this.state.isNavOpen
        });
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
                                    <span className="fa fa-address-card fa-lg"></span>Contact Us
                                </NavLink>
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
            </React.Fragment>
         );
    }
}
 
export default Header;