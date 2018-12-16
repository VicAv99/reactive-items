import React, { Component } from 'react';

import store from './state/store';
import { Provider } from 'react-redux';

import './App.css';
import AppRouter from './router';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppRouter/>
        </div>
      </Provider>
    );
  }
}

export default App;
