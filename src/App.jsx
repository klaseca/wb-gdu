import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Header from 'com/Common/Header/Header';
import Main from './pages/Main/Main';
import Settings from './pages/Settings/Settings';

import store from 'store/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/settings' component={Settings} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
