import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';

import { GlobalStyle } from './styled';

const Main = lazy(() => import(/* webpackChunkName: "@browse-pages-main" */ '@browse/pages/main'));

console.log(process.env);

function App() {
  return (
    <StyleSheetManager disableVendorPrefixes={ process.env.NODE_ENV === 'development' }>
      <BrowserRouter>
        <Suspense fallback={ <div /> }>
          <GlobalStyle />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </StyleSheetManager>
  );
}

export default App;
