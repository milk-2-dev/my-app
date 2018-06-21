import React, {Component} from 'react';
import {PageHeader} from 'react-bootstrap';
import "./index.css";

class Help extends Component{
    render (){
        return(
            <div className="container-fluid text-center">
                <PageHeader>
                    In this page will be information for helping users with app
                </PageHeader>
            </div>
        )
    }
}

export default Help