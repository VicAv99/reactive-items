import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const links = [
  { path: '/home', label: 'HOME |' },
  { path: '/items', label: 'ITEMS |' },
  { path: '/widgets', label: 'WIDGETS |' },
  { path: '/about', label: 'ABOUT' }
];

const linkRoutes = links.map(link => (
  <Link key={link.path} to={link.path} className="text-muted mr-1">
    {link.label}
  </Link>
))

class HeaderComponent extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger text-white-50">Reactive Items</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {linkRoutes}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

export default HeaderComponent;
