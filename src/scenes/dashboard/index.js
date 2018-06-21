import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import './index.scss';

import WalletsAll from '../../components/wallets_all/index';
import WalletsItem from '../../components/wallet_item/index';

class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard_page">
                <div className="container">
                    <Switch>
                        <Route exact path="/dashboard" component={WalletsAll} />
                        <Route exact path="/dashboard/:number" component={WalletsItem} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default  Dashboard;