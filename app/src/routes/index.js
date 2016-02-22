import App from './components/App';
import homeRoute from './home';

const rootRoute = {
    path: '/',
    component: App,
    indexRoute: homeRoute
};

export default rootRoute;