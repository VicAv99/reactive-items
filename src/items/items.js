import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './items.css';
import ItemsList from './items-list/items-list';
import ItemsDetails from './items-details/items-details';
import { fetchItems } from '../state/actions/itemActions';

class ItemsComponent extends Component {
  componentWillMount() {
    this.props.fetchItems();
  }

  render() {
    const { items } = this.props;
    return (
      <div className="wrapper">
        <div className="list-grid">
          <ItemsList items={items} />
        </div>
        <div className="details-grid">
          <ItemsDetails />
        </div>
      </div>
    )
  }
}

ItemsComponent.propTypes = {
  fetchItems: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  items: state.items.items
});

export default connect(mapStateToProps, { fetchItems })(ItemsComponent);
