import React, { Component } from 'react';

// Components
import Bounce from 'react-reveal/Bounce';

// Styles
import './MouseFollower.css';

/**
 *
 * State Full Component: MouseFollower
 * Usage :
 * @param props => none
 *
 */
class MouseFollower extends Component {
  render() {
    return (
      <Bounce>
        <div
          style={{
            top: `${this.props.pageY - 20 / 2}px`,
            left: `${this.props.pageX - 20 / 2}px`
          }}
          id="mouse-follower"
        />
      </Bounce>
    );
  }
}

export default MouseFollower;
