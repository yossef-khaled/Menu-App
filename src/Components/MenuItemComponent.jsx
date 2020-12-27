import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
  } from "reactstrap";  

function MenuItem({ dish, handleCardClick }) {
    return (
      <Card key={dish.id} onClick={() => handleCardClick(dish.id)} className="menuItem">
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    );
  }

export default MenuItem;
  