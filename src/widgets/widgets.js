import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './widgets.css';
import WidgetsList from './widgets-list/widgets-list';
import WidgetsDetails from './widgets-details/widgets-details';
import { fetchWidgets } from '../state/actions/widgetActions';

export class WidgetsComponent extends Component {
  componentWillMount() {
    this.props.fetchWidgets();
  }

  static propTypes = {
    widgets: PropTypes.array.isRequired
  };

  render() {
    const { widgets } = this.props;
    return (
      <div className="wrapper">
        <div className="list-grid">
          <WidgetsList widgets={widgets} />
        </div>
        <div className="details-grid">
          <WidgetsDetails />
        </div>
      </div>
    )
  };
}

const mapStateToProps = (state) => ({
  widgets: state.widgets.widgets
});

const mapDispatchToProps = {
  fetchWidgets
};

export default connect(mapStateToProps, mapDispatchToProps)(WidgetsComponent);
