import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Main = lazy(() => import(/* webpackChunkName: "@browse-pages-main" */'@browse/pages/main'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={ <div /> }>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
