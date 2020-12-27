import {
    Row,
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    CardText,
    Breadcrumb,
    BreadcrumbItem
  } from "reactstrap";  
import {Link} from 'react-router-dom';

function DishDetail({dish, comments}) {
    const dishComments = comments.map((comment) => {
        return(
            <div className="m-3">
                <hr/>
                <CardTitle tag="h4">
                    {comment.author}
                </CardTitle>
                <CardText>
                    {comment.comment}
                </CardText>           
            </div>
        );
    });

    return (
        <div className="container col-10 m-4"> 
            <Row>
                <div className="row m-2">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                   <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr />
                    </div> 
                </div>
            </Row>
            <Row className="align-items-start">
                <CardImg width="100%" className="col-6" src={dish.image} alt={dish.name} />
                <Card className="col-5">
                    <CardTitle className="m-2" tag="h4">
                            {dish.name} :
                    </CardTitle>
                    <CardText className="col-15">
                        - {dish.description}
                    </CardText>
                    <div className="container">
                        <h3>Comments :</h3>
                        {dishComments}
                    </div>
                </Card>
            </Row>
        </div>
    );
}

export default DishDetail;