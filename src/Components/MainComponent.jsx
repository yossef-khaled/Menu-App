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
import DishDetail from './DishDetailComponent';

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
    this.handleCardClick = this.handleCardClick.bind(this);
  }
  
  handleCardClick(id) {
    this.setState({selectedDish: id});
    console.log(`A Card With ID ${id} Was CLICKED !!`);
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

    const SpecificDish = ({match, location, history}) => {
      return(
        
      );
    }

    return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/contactus" component={ContactUs}/>
        <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} selectedDish={this.state.selectedDish } handleCardClick={(id) => this.handleCardClick(id)}/>}/>
        <Route path="/menu/:dishId" component={SpecificDish}/>
        <Redirect to="/home"/>
      </Switch>
      <Footer />
    </div>
     );
  }
}
 
export default Main;

