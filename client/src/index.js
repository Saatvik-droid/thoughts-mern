import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import reducers from './reducers/index'
import './index.css';
import HomePage from './pages/Home';
import CreateThoughtPage from './pages/CreateThought'

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path={["/", "/thoughts"]} component={HomePage} />
          <Route path="/thoughts/create" component={CreateThoughtPage} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
