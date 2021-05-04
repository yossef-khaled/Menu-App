import React from "react";
import MenuItem from './MenuItemComponent';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import { LoadingSpinner } from './LoadingComponent';

function Menu(props) {
  
  const menu = props.dishes.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <MenuItem dish={dish}/>
      </div>
    );
  });

  if(props.dishes.isLoading) {
    return(
        <div className="container">
            <div className="row">
                <LoadingSpinner/>
            </div>
        </div>
    );
  }

  else if(props.dishes.errMess) {
      return(
          <div className="container">
              <div className="row">
                  <h4>{props.dishes.errMess}</h4>
              </div>
          </div>
      );
  }

  else {
      return (
        <div className="container">
          <div className="row m-2">
            <Breadcrumb>
              <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
              <BreadcrumbItem active>Menu</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>Menu</h3>
              <hr />
            </div> 
          </div>
          <div className="row">
            {menu}
          </div>
        </div>
      );
    }
}

export default Menu;
