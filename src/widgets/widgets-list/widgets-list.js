import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class WidgetsList extends Component {
  selectWidgetChild = widget => {
    this.props.emitSelectWidget(widget);
  }

  deleted = widgetId => {
    this.props.emitWidgetId(widgetId);
  }

  static propTypes = {
    emitSelectWidget: PropTypes.func,
    emitWidgetId: PropTypes.func,
    widgets: PropTypes.array,
    widget: PropTypes.object
  }

  render() {
    const widgetsList = this.props.widgets.map(widget =>
      <div key={widget.id} className="list-group">
        <div onClick={() => this.selectWidgetChild(widget)} className="list-group-item list-group-item-action">
          {widget.name} <br/>
          {widget.description}
          <span onClick={() => this.deleted(widget.id)} className="badge badge-danger badge-pill float-right">
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
  widgets: state.widgets.widgets,
  widget: state.widgets.widget
})

export default connect(mapStateToProps, {})(WidgetsList)

