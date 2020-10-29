import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class Menu extends Component {
    
    constructor(props) {
        super(props);
    }

    renderDish = (dishID) => {
        if(dishID != null) {
            console.log("renderDish function");
            const dish = this.props.dishes[dishID];
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card key={dishID}>
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
                    <Card onClick={() => this.props.onClick(dish.id)}>
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
                    {this.renderDish(this.props.selectedDish)}
                </div>
            </div>
        );
    }
}
 
export default Menu;