import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  /**  Default memory history path is '/' 
   *   so if this application has specific path to load like 'auth/signup' 
   *   then child application wont loads initially in container(host) as the child app has initial route as '/'
   *   so it loads on second time when we try to change the path on click event.
   *   To resolve that issue we will initialize memoryRoute with path
   * 
  */
   const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath],
  });

  if (onNavigate) {
    console.log('onNavigate Auth 1', history.location.pathname);
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
  const devRoot = document.querySelector('#_auth-dev-root');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory(), initialPath: 'auth/signin' });
  }
}

// We are running through container
// and we should export the mount function
export { mount };
