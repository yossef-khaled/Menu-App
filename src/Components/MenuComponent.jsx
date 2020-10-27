import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class Menu extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            slectedDish: null
        };
    }

    onDishSelect = (dish) => {
        this.setState({slectedDish: dish});
    } 

    renderDish = (dish) => {
        console.log("Render function");
        if(dish != null) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                        onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardTitle>{dish.description}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        }

        else {
            return(
                <div></div>
            );
        }
    }

    state = {  }
    render() { 
        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        })
        return ( 
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.slectedDish)}
                </div>
            </div>
        );
    }
}
 
export default Menu;