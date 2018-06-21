import React, { Component } from "react";
import {PageHeader} from 'react-bootstrap';
import "./index.css";

class Home extends Component {
    render() {
        return (
            <div className="container-fluid text-center">
                <PageHeader>
                    Test app
                </PageHeader>
            </div>
        );
    }
}

export default Home