import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import HomeComponent from './home/home';
import HeaderComponent from './common/header/header';

const routeComponents = [
  { key: 1, path: '/home/', component: HomeComponent }
];

const routes = routeComponents.map(route => (
  <Route key={route.key} path={route.path} component={route.component}/>
));

const AppRouter = () => (
  <Router>
    <div>
      <HeaderComponent/>
      {routes}
    </div>
  </Router>
);

export default AppRouter;
