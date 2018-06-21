import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Route, Switch, Redirect } from 'react-router';
import {
    ConnectedRouter,
    connectRouter,
    routerMiddleware
} from 'connected-react-router';
import counterApp from './reducers';

const history = createBrowserHistory();
const middleware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    connectRouter(history)(counterApp),
    composeEnhancers(applyMiddleware(middleware))
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Switch>
                    <Route path="/:count" component={App} />
                    <Redirect to="/1987" />
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
