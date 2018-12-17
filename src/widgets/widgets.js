import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import WidgetsList from './widgets-list/widgets-list';
import WidgetsDetails from './widgets-details/widgets-details';

export class WidgetsComponent extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className="wrapper">
        <div>
          <WidgetsList />
        </div>
        <div>
          <WidgetsDetails />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(WidgetsComponent)
