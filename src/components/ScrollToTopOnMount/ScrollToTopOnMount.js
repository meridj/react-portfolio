import { Component } from 'react';

/**
 *
 * Statefull Component: ScrollToTopOnMount
 * Usage : Scroll restauration for react-router v4
 * @param props => none
 *
 */
class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return null;
  }
}

export default ScrollToTopOnMount;
