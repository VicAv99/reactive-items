import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class WidgetsDetails extends Component {
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

  onSubmit = event => {
    event.preventDefault();

    const widget = {
      id: this.props.widget.id,
      name: this.props.widget.name || this.state.name,
      description: this.props.widget.description || this.state.description
    }

    if (this.props.widget.id) {
      this.props.updated(widget);
      this.reset();
    } else {
      this.props.added(widget);
      this.reset();
    }
  }

  reset = () => {
    this.setState({...this.state, name: '', description: ''})
  }

  render() {
    const { widget } = this.props;
    const widgetName = widget ? widget.name || this.state.name : '';
    const widgetDescription = widget ? widget.description || this.state.description : '';
    return (
      <div className="card p-4">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input className="form-control" placeholder="Widget Name" name="name"
              value={widgetName} onChange={this.onChange} type="text" />
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Widget Description" name="description"
              value={widgetDescription} onChange={this.onChange} type="text" />
          </div>
          <div className="d-flex flex-row-reverse">
            <button type="submit" className="btn btn-info ml-1">Add Item</button>
            <button type="reset" onClick={this.reset} className="btn btn-secondary mr-1">Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

WidgetsDetails.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  widget: PropTypes.object,
  added: PropTypes.func,
  updated: PropTypes.func,
}

const mapStateToProps = (state) => ({
  widget: state.widgets.selectedWidget,
  name: state.widgets.selectedWidget.name,
  description: state.widgets.selectedWidget.description
})

export default connect(mapStateToProps, {})(WidgetsDetails)

