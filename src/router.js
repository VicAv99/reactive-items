import React from 'react';

import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import HomeComponent from './home/home';
import HeaderComponent from './common/header/header';
import ItemsComponent from './items/items';
import AboutComponent from './about/about';

const routeComponents = [
  { key: 1, path: '/home/', component: HomeComponent },
  { key: 2, path: '/items/', component: ItemsComponent },
  { key: 3, path: '/about/', component: AboutComponent }
];

const routes = routeComponents.map(route => (
  <Route key={route.key} path={route.path} component={route.component} />
));

const AppRouter = () => (
  <Router>
    <div>
      <HeaderComponent />
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      {/* <Route exact path="/**" render={() => <Redirect to="/home" />}/> */}
      {routes}
    </div>
  </Router>
);

export default AppRouter;
