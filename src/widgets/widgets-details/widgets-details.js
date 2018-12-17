import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class WidgetsDetails extends Component {
  static propTypes = {
    widget: PropTypes.object
  }

  render() {
    return (
      <div>
        {this.props.widget ? this.props.widget.name : ''}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  // widget: state.widgets.selectedWidget
})

export default connect(mapStateToProps, {})(WidgetsDetails)

