import React, {Component} from 'react';
import { Navbar, NavbarBrand} from 'reactstrap'; 
import Menu from './MenuComponent';
import { DISHES } from '../Shared/dishes';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes : DISHES,
      selectedDish: null
    };
  }

  
  onDishSelect = (dishID) => {
    this.setState({selectedDish: dishID});
  } 

  render() { 
    return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          
          {/*NavbarBrand gives the menu tag more space than without it */}
          <NavbarBrand href="/">
            Resturant Menu
          </NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes} selectedDish={this.state.selectedDish} onClick={(dishID) => this.onDishSelect(dishID)}/>
    </div>
     );
  }
}
 
export default Main;

