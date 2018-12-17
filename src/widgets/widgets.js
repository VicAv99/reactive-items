import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './widgets.css';
import WidgetsList from './widgets-list/widgets-list';
import WidgetsDetails from './widgets-details/widgets-details';
import { selectWidget, fetchWidgets } from '../state/actions/widgetActions';

export class WidgetsComponent extends Component {
  componentWillMount() {
    this.props.fetchWidgets();
  }

  selectWidgetParent = (widget) => {
    this.props.selectWidget(widget);
  }

  static propTypes = {
    selectWidget: PropTypes.func.isRequired,
    widgets: PropTypes.array,
    selectedWidget: PropTypes.object
  };

  render() {
    const { widgets, selectedWidget } = this.props;
    return (
      <div className="wrapper">
        <div className="list-grid">
          <WidgetsList widgets={widgets} emitSelectWidget={this.selectWidgetParent} />
        </div>
        <div className="details-grid">
          <WidgetsDetails widget={selectedWidget} />
        </div>
      </div>
    )
  };
}

const mapStateToProps = (state) => ({
  selectedWidget: state.widgets.selectedWidget,
  widgets: state.widgets.widgets
});

const mapDispatchToProps = {
  selectWidget,
  fetchWidgets
};

export default connect(mapStateToProps, mapDispatchToProps)(WidgetsComponent);
