import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import App from './components/app';
import Resources from './components/resources';
import Header from './components/header';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/resources" component={Resources} />
            <Route path="/" component={App} />
          </Switch>    
        </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
