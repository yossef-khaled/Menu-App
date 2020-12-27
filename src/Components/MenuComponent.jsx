import React from "react";
import MenuItem from './MenuItemComponent';

function Menu(props) {
  
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <MenuItem dish={dish}/>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        {menu}
      </div>
    </div>
  );
}

export default Menu;
