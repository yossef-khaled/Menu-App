import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
  } from "reactstrap";  
import { Link } from 'react-router-dom';
import { baseUrl } from '../Shared/baseUrl';

function MenuItem({ dish }) {
    return (
      <Card>
        <Link to={`menu/${dish.id}`}>
          <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Link>
      </Card>
    );
  }

export default MenuItem;
  