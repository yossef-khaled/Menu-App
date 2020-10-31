import React, {Component} from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
      <Header />
      <Menu dishes={this.state.dishes} selectedDish={this.state.selectedDish} onClick={(dishID) => this.onDishSelect(dishID)}/>
      <Footer />
    </div>
     );
  }
}
 
export default Main;

