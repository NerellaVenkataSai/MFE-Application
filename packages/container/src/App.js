import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';

import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

// Generating random className in production starting with 'co' to avoid conflicting with other applications
const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
      <Header />
          <Switch>
            {/* <Route path="/auth/" component={Signin} /> */}
            <Route path="/" component={MarketingApp} />
          </Switch>
      </StylesProvider>
    </BrowserRouter>
  );
};