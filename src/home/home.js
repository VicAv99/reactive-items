import React, { Component } from 'react';

import './home.css';

class HomeComponent extends Component {
  render() {
    return (
      <header className="masthead">
        <div className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <h1 className="mx-auto my-0 text-uppercase">Reactive Items</h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-5">Simple Master detail View built with React, React Router, Redux, and Bootstrap</h2>
            <a className="btn js-scroll-trigger bg-info">Check it out!</a>
          </div>
        </div>
      </header>
    )
  }
}

export default HomeComponent;
