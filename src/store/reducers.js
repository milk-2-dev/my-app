import { ACTION_CREATE_NEW_WALLET } from '../index'

const initialState  = {
    walletItems: []
};

export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_CREATE_NEW_WALLET:
            return {
                ...state,
                walletItems: [...state.walletItems, action.payload]
            };

        default:
            return { ...state }
    }
}