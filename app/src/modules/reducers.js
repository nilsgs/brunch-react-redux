import { combineReducers } from 'redux';
import { routeReducer as routes } from 'react-router-redux';

import { ui } from './ui/reducers';

const rootReducer = combineReducers({
    ui,
    routes
});

export default rootReducer;