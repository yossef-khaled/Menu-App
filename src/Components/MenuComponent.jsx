import React from "react";
import MenuItem from './MenuItemComponent';

function RenderClickedDish({ dish, handleCardClick }) {
  if (dish != null) {
    console.log("Render Clicked Dish !!!!");
    return (
      <div className="col-12 col-md-5 m-1">
        <MenuItem dish={dish} handleCardClick={() => handleCardClick(   )} />
      </div>
    );
  } else {
    return <div></div>;
  }
}

function Menu(props) {
  
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <MenuItem dish={dish} handleCardClick={() => props.handleCardClick(dish.id)}/>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        {menu}
      </div>
      <div className="row">
        <RenderClickedDish
          dish={props.dishes[props.selectedDish]}
          handleCardClick={() => props.handleCardClick(props.dishes[props.selectedDish])}
        />
      </div>
    </div>
  );
}

export default Menu;
