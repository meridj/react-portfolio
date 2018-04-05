import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import './MouseFollower.css';

/*
 *
 * State Full Component: MouseFollower
 * Usage : render a div that follow mouse pointer
 * @param props => { mousePosition }
 * 
 */
class MouseFollower extends Component {
  render() {
    const mousePosition = [...this.props.mousePosition];
    const sizeOfMouseFollower = 20;

    return (
      <div
        style={{
          top: `${mousePosition[1] - sizeOfMouseFollower / 2}px`,
          left: `${mousePosition[0] - sizeOfMouseFollower / 2}px`
        }}
        id="mouse-follower"
      />
    );
  }
}

MouseFollower.propTypes = {
  mousePosition: PropTypes.array.isRequired
};

export default MouseFollower;
