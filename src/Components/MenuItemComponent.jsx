import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
  } from "reactstrap";  
import { Link } from 'react-router-dom';

function MenuItem({ dish }) {
    return (
      <Card>
        <Link to={`menu/${dish.id}`}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Link>
      </Card>
    );
  }

export default MenuItem;
  