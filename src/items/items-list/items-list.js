import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './items-list.css';
import { deleteItem } from '../../state/actions/itemActions';

class ItemsList extends Component {
  render() {
    const itemsList = this.props.items.map(item =>
      <div key={item.id} className="list-group">
        <div className="list-group-item list-group-item-action">
          {item.name} <br/>
          {item.description}
          <span onClick={() => this.props.deleteItem(item.id)} className="badge badge-danger badge-pill float-right">
            X
          </span>
        </div>
      </div>
    )

    return (
      <div>
        {itemsList}
      </div>
    )
  }
}

ItemsList.propTypes = {
  deleteItem: PropTypes.func.isRequired
}

export default connect(null, { deleteItem })(ItemsList);
