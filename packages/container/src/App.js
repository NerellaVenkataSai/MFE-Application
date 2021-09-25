import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

/** will uncomment this in next commit to resolve css conflict issue in production env */
// const generateClassName = createGenerateClassName({
//   productionPrefix: 'co',
// });

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
