import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';

// Components
import Fade from 'react-reveal/Fade';

// Styles
import './Button.css';

/**
 *
 * State Full Component: Button
 * Usage : render a button
 * @param props => { link, linkGithub, github }
 *
 */
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { colorLogoGithub: 'black', isShake: false };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(isEnter) {
    isEnter
      ? this.setState({
          colorLogoGithub: 'white',
          isShake: true
        })
      : this.setState({ colorLogoGithub: 'black', isShake: false });
  }

  render() {
    const { link, linkGithub, github } = this.props;
    return (
      <Fade bottom cascade delay={800}>
        <a href={linkGithub ? linkGithub : link} target="_blank">
          <button
            onMouseEnter={github ? () => this.handleHover(true) : null}
            onMouseLeave={github ? () => this.handleHover(false) : null}
            className="button">
            {github ? 'View on Github' : 'View website'}
            {github ? (
              <Ionicon
                icon="logo-github"
                className="github"
                fontSize="20"
                shake={this.state.isShake}
                color={this.state.colorLogoGithub}
              />
            ) : null}
          </button>
        </a>
      </Fade>
    );
  }
}

Button.propTypes = {
  link: PropTypes.string.isRequired,
  linkGithub: PropTypes.string,
  github: PropTypes.bool
};

export default Button;
