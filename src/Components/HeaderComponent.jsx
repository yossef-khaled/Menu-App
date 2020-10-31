import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap'; 

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Navbar dark color="primary">
                  <div className="container">
                    
                    {/*NavbarBrand gives the menu tag more space than without it */}
                    <NavbarBrand href="/">
                      Resturant Menu
                    </NavbarBrand>
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