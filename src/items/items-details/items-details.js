import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './items-details.css';
import { addItem } from '../../state/actions/itemActions';

class ItemsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();

    const item = {
      name: this.state.name,
      description:  this.state.description
    }

    this.props.addItem(item);
    this.reset()
  }

  reset = () => {
    this.setState({
      ...this.state,
      name: '',
      description: ''
    })
  }

  render() {
    return (
      <div className="card p-4">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input className="form-control" placeholder="Item Name" name="name"
              onChange={this.onChange} value={this.state.name} type="text" />
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Item Description" name="description"
              onChange={this.onChange} value={this.state.description} type="text" />
          </div>
          <div className="d-flex flex-row-reverse">
            <button type="submit" className="btn btn-info ml-1">Add Item</button>
            <button type="reset" className="btn btn-secondary mr-1" onClick={this.reset}>Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

ItemsDetails.propTypes = {
  addItem: PropTypes.func.isRequired
}

export default connect(null, { addItem })(ItemsDetails);
