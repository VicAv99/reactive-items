import React, { Component } from 'react';

import PropTypes from 'prop-types';

import './items-list.css';

const ItemsList = ({ items }) => {
  const itemsList = items.map(item =>
    <div key={item.id} className="list-group">
      <div className="list-group-item list-group-item-action">
        {item.name} <br/>
        {item.description}
      </div>
    </div>
  )

  return (
    <div>
      {itemsList}
    </div>
  )
}

ItemsList.propTypes = {
  item: PropTypes.object
}

export default ItemsList;
