import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './home.css';

class HomeComponent extends Component {
  render() {
    return (
      <header className="masthead">
        <div className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <h1 className="mx-auto my-0 text-uppercase">Reactive Items</h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-5">Simple Master detail View built with React, React Router, Redux, and Bootstrap</h2>
            <Link className="btn js-scroll-trigger bg-info text-white-50 p-3 px-5 text-uppercase" to="/items">Check it out!</Link>
          </div>
        </div>
      </header>
    )
  }
}

export default HomeComponent;
