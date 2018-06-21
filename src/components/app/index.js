import React, {Component} from 'react';

import { Route, Switch } from 'react-router-dom';

import './index.scss'

import Header from '../header/index.js';
import Home from '../../scenes/home/index.js';
import About from '../../scenes/about/index.js';
import Login from '../../scenes/auth/login/index.js';
import Dashboard from '../../scenes/dashboard/index.js';



class App extends Component {
    render(){
        return(
            <div className="main_wrapper">
                <Header/>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/dashboard/:number" component={Dashboard} />
                </Switch>
            </div>
        )
    }
}

export default App;