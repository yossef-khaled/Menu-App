import React, {Component} from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import ContactUs from './ContactUsComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent'; 
import { DISHES } from '../Shared/dishes';
import { COMMENTS } from '../Shared/comments';
import { LEADERS } from '../Shared/leaders';
import { PROMOTIONS } from '../Shared/promotions';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes : DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS,
      selectedDish: null
    };
  }

  render() { 

    const HomePage = () => {
      return (
        <Home 
        dish={this.state.dishes.filter((dish) => dish.featured)[0]} 
        promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}      
         />
      );
    }

    return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/contactus" component={ContactUs}/>
        <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>}/>
        <Redirect to="/home"/>
      </Switch>
      <Footer />
    </div>
     );
  }
}
 
export default Main;

