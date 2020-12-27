import {
    Row,
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    CardText
  } from "reactstrap";  

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
                <CardImg width="100%" className="col-6" src={dish.image} alt={dish.name} />
                <Card className="col-5">
                    <CardTitle className="m-2" tag="h3">
                            {dish.name}
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