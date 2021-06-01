import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { baseUrl } from '../Shared/baseUrl';
import { LoadingSpinner } from './LoadingComponent'; 

function RenderCard({item, isLoading, errMess}) {
    if(isLoading) {
        return (
            <LoadingSpinner/>
        );
    }

    else if(errMess) {
        return (
            <h4>{errMess}</h4>
        );
    }

    else {
        console.log(`At the Render Card Component item is : ${JSON.stringify(item)}`);
        return (
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name}/>
                <CardBody>
                    <CardTitle>
                        {item.name}
                    </CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
    }
}

export default RenderCard;