import React, {Component} from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import ContactUs from './ContactUsComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import DishDetail from './DishDetailComponent';
import { connect } from 'react-redux';
import { addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';
import { actions } from 'react-redux-form'; 

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
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())},
  resetFeedbackForm: () => {dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos())
});

class Main extends Component {

  constructor(props) {
    super(props);

    this.handleCardClick = this.handleCardClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }
  
  handleCardClick(id) {
    this.setState({selectedDish: id});
    console.log(`A Card With ID ${id} Was CLICKED !!`);
  }

  render() {    
    console.log(`At the Main Component dish is : ${this.props.dishes.dishes.filter((dish) => dish.featured)[0]}`);
    const HomePage = () => {
        return (
          <Home 
            dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]} 
            dishesLoading={this.props.dishes.isLoading}
            dishesErrMess={this.props.dishes.errMess}
            promotion={this.props.promotions.promotions.filter((promotion) => promotion.featured)[0]}
            promotionIsLoading={this.props.promotions.isLoading}
            promotionErrMess={this.props.promotions.errMess}
            leader={this.props.leaders.filter((leader) => leader.featured)[0]}      
           />
        );
    }

    const SpecificDish = ({match, location, history}) => {
      console.log(`At the Main Component dish is : ${this.props.dishes.dishes.filter((dish) => dish.featured)[0]}`);
      return(
        <DishDetail 
          dish={this.props.dishes.dishes[parseInt(match.params.dishId)]}          
          dishIsLoading={this.props.dishes.isLoading}
          dishErrMess={this.props.dishes.errMess}
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
          commentsErrMess={this.props.comments.errMess}
          addComment={this.props.addComment}
        />
      );
    }

    return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/contactus" component={() => <ContactUs resetFeedbackForm={this.props.resetFeedbackForm} />}/>
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

