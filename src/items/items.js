import React, { Component } from 'react';

import './items.css';
import ItemsList from './items-list/items-list';
import ItemsDetails from './items-details/items-details';

class ItemsComponent  extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="list-grid">
          <ItemsList />
        </div>
        <div className="details-grid">
          <ItemsDetails />
        </div>
      </div>
    )
  }
}

export default ItemsComponent;
