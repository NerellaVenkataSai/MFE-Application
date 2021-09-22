import React from 'react';
import MarketingApp from './components/MarketingApp';

export default () => {
  console.log('domain---', process.env.MARKETING_APP_DOMAIN);
  return (
    <div>
      <h1>Hi there!</h1>
      <hr />
      <MarketingApp />
    </div>
  );
};
