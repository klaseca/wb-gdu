import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Header from 'com/Common/Header/Header';
import Main from './pages/Main/Main';
import Settings from './pages/Settings/Settings';
import Toast from 'com/Common/Toast';

import { connect } from 'react-redux';
import {
  setShowSelectBlock,
  setIsAutoUpdate,
} from 'app/store/main/mainActions';

import { initSettings } from 'store/settings/settingsActions';

import { useMountEffect } from 'app/hooks/useMountEffect';

import sh from 'app/utils/settings-handler';

const App = ({ setIsAutoUpdate, setShowSelectBlock, initSettings }) => {
  useMountEffect(() => {
    const effect = async () => {
      const settings = await sh.getSettings();

      initSettings(settings);

      if (settings.defaultUpdateType === 'auto') {
        setIsAutoUpdate(true);
        setShowSelectBlock();
      } else if (settings.defaultUpdateType === 'manual') {
        setIsAutoUpdate(false);
        setShowSelectBlock();
      }
    };
    effect();
  });

  return (
    <Router>
      <Toast />
      <Header />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/settings'>
          <Settings />
        </Route>
      </Switch>
    </Router>
  );
};

const mapDispatchToProps = {
  setIsAutoUpdate,
  setShowSelectBlock,
  initSettings,
};

export default connect(null, mapDispatchToProps)(App);
