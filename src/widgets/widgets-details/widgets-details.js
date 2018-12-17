import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class WidgetsDetails extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        details
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(WidgetsDetails)

