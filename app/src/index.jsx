import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, useRouterHistory} from 'react-router';
import { createHashHistory } from 'history';

import configureStore from './modules/configureStore';
import rootRoute from './routes';

const appHistory = useRouterHistory(createHashHistory)({queryKey: false});
const store = configureStore(appHistory);

render(
    <Provider store={store}>
        <Router history={appHistory} routes={rootRoute} />
    </Provider>,
    document.getElementById('root')
);