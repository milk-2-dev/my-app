import React, {Component} from 'react';
import { bindActionCreators } from 'redux';

import { Media, Modal, Button, FormGroup, ControlLabel, FormControl} from "react-bootstrap";

import { connect } from 'react-redux';
import { createNewWallet } from '../../store/actions.js'

import './index.scss';

import WalletsAllItem from './wallets_all_item/index';

class WalletsAll extends Component{
    state = {
        show: false
    }

    componentDidMount(){
        const cachedWallets = localStorage.getItem('wallets');

        if (cachedWallets) {
            JSON.parse(cachedWallets).map(item => this.props.createNewWalletForProps(item))
            return;
        }
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(this._inputWalletName.value !== '' & this._inputWalletMoney.value !== ''){

            var newItem = {
                walletName: this._inputWalletName.value,
                walletMoney: this._inputWalletMoney.value,
                key: Date.now(),
                incomes:[],
                expenses: []
            };

            let newCachedWallets = [...this.props.walletsItemsForProps, newItem];

            localStorage.setItem('wallets', JSON.stringify(newCachedWallets));

            this.props.createNewWalletForProps(newItem);

            this.toggleModal();
        }
    };

    toggleModal = () => this.setState({ show: !this.state.show });

    render(){
        const {walletsItemsForProps } = this.props;

        return(
            <div className="wallet_all_page">
                <div className="add_new_wallet">
                    <button className="button button_primary" onClick={this.toggleModal}>add new wallet</button>
                </div>

                <WalletsAllItem enteries={walletsItemsForProps} />

                <Modal show={this.state.show} animation={true} onHide={this.toggleModal}>
                    <Modal.Header closeButton>
                        Create new wallet
                    </Modal.Header>
                    <Modal.Body>
                        <div className="create_new_wallet">
                            <form id="new_wallet_form" onSubmit={this.onSubmit}>
                                <FormGroup controlId="wallet_name" bsSize="large">
                                    <ControlLabel>Wallet name</ControlLabel>
                                    <FormControl
                                        autoFocus
                                        type="text"
                                        inputRef={(node) => { this._inputWalletName = node }}
                                    />
                                </FormGroup>
                                <FormGroup controlId="wallet_maney" bsSize="large">
                                    <ControlLabel>Wallet money</ControlLabel>
                                    <FormControl
                                        type="text"
                                        inputRef={(node) => { this._inputWalletMoney = node }}
                                    />
                                </FormGroup>

                            </form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            block
                            bsSize="large"
                            type="submit"
                            form="new_wallet_form"
                        >
                            create
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        )
    }
}

const putStateToProps = (state) => {
    return {
        walletsItemsForProps: state.walletItems
    }
}

const putActionsToProps = (dispatch) => {
    return {
        createNewWalletForProps: bindActionCreators(createNewWallet, dispatch),
    }
}

export default  connect(putStateToProps, putActionsToProps)(WalletsAll);