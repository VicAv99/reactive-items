import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class WidgetsList extends Component {
  static propTypes = {
    widgets: PropTypes.array.isRequired
  }

  render() {
    const { widgets } = this.props;
    const widgetsList = widgets.map(widget =>
      <div key={widget.id} className="list-group">
        <div className="list-group-item list-group-item-action">
          {widget.name} <br/>
          {widget.description}
          <span className="badge badge-danger badge-pill float-right">
            X
          </span>
        </div>
      </div>
    )
    return (
      <div>
        {widgetsList}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  widgets: state.widgets.widgets
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(WidgetsList)

