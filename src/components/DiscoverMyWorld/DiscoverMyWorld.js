import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Ionicon from 'react-ionicons';

// Styles
import './DiscoverMyWorld.css';

/**
 *
 * Stateless Component: DiscoverMyWorld
 * Usage : render text and arrow
 * @param props => none
 *
 */
const DiscoverMyWorld = () => (
  <Bounce delay={2000} left>
    <div id="discover-my-world">
      <span>To know more about me</span>
      <Ionicon
        icon="ios-arrow-round-forward"
        fontSize="50"
        color="white"
        beat={true}
      />{' '}
    </div>
  </Bounce>
);

export default DiscoverMyWorld;
