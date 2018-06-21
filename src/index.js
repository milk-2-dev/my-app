import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { BrowserRouter} from 'react-router-dom';

import { rootReducer } from './store/reducers.js';
import App from './components/app/index';


export const ACTION_CREATE_NEW_WALLET = 'ACTION_CREATE_NEW_WALLET';
// export const ACTION_CHANGE_SECOND_NAME = 'ACTION_CHANGE_SECOND_NAME';

const store = createStore(rootReducer);

ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>

        </Provider>,
    document.getElementById('root')
);


