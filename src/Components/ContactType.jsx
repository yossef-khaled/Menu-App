import React from 'react';
import { Col } from 'reactstrap';
import { Control } from 'react-redux-form'

function ContactType() {
        return(
            <Col md={{size: 3, offset: 1}}>
                <Control.select
                       className="form-control mr-auto"
                       model=".contactType" 
                       name="contactType"
                       >
                    <option value="none">Choose One</option>
                    <option>Tel.</option>
                    <option>Email</option>
                </Control.select>
            </Col>
        );
    };

export default ContactType;