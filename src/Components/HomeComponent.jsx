import React from 'react';
import RenderCard from './RenderCard';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

function Home (props) {
    console.log(`At the Home Component dish is : ${JSON.stringify(props)}`);   
    return(
        <div className="container">
            <div className="row m-2">
                <Breadcrumb>
                    <BreadcrumbItem active>Home</BreadcrumbItem>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} isLoading={props.dishLoading} errMess={props.dishErrMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} isLoading={props.promotionLoading} errMess={props.promotionErrMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;