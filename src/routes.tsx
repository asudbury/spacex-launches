import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Launches from './components/launches';
import Launch from './components/launch';

export default function Routes(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={['/launch/:launchId', '/spacex-launches/launch/:launchId']}
          component={Launch}
        />
        <Route component={Launches} />
      </Switch>
    </Router>
  );
}
