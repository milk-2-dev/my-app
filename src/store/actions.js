import { ACTION_CREATE_NEW_WALLET } from '../index';

export const createNewWallet = (newWallet) => {
    return {
        type: ACTION_CREATE_NEW_WALLET,
        payload: newWallet
    }
}