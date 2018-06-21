import React, {Component} from 'react';
import {PageHeader} from 'react-bootstrap';
import "./index.css";

class About extends Component{
    render (){
        return(
            <div className="container-fluid text-center">
                <PageHeader>
                    In this page will be information about my-app
                </PageHeader>
            </div>
        )
    }
}

export default About