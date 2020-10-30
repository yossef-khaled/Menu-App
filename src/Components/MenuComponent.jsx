import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

function RenderMenuItem({ dish, onClick }) {
  return (
    <Card key={dish.id} onClick={() => onClick(dish.id)}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

function RenderDish({ dish, onClick }) {
  if (dish != null) {
    console.log("RenderDish !!!!");
    return (
      <div className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} onClick={onClick} />
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
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">{menu}</div>
      <div className="row">
        <RenderDish
          dish={props.dishes[props.selectedDish]}
          onClick={props.onClick}
        />
      </div>
    </div>
  );
}

export default Menu;
