import React, {Component} from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import ContactUs from './ContactUsComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import DishDetail from './DishDetailComponent';
import { connect } from 'react-redux';
import { addComment } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
    selectedDish: state.selectedDish 
  };
};

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
});

class Main extends Component {

  constructor(props) {
    super(props);

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
        dish={this.props.dishes.filter((dish) => dish.featured)[0]} 
        promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}      
         />
      );
    }

    const SpecificDish = ({match, location, history}) => {
      return(
        <DishDetail dish={this.props.dishes[parseInt(match.params.dishId)]}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    addComment={this.props.addComment}
        />
      );
    }

    return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/contactus" component={ContactUs}/>
        <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} selectedDish={this.props.selectedDish } handleCardClick={(id) => this.handleCardClick(id)}/>}/>
        <Route path="/menu/:dishId" component={SpecificDish}/>
        <Redirect to="/home"/>
      </Switch>
      <Footer />
    </div>
     );
  }
}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

