import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// Components
import Nav from '../../components/Nav';

// Styles
import './Header.css';

/**
 *
 * State Full Component: Header
 * Usage : render a header
 * @param props => { comeFrom, text }
 *
 */
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: false,
      about: false,
      skills: false,
      works: false,
      contact: false
    };

    this.handleClickNav = this.handleClickNav.bind(this);
  }

  componentWillMount() {
    this.setState({ [this.props.comeFrom]: true });
  }

  handleClickNav(event, route) {
    event.preventDefault();
    this.props.history.push(route);
  }

  render() {
    const { text } = this.props;
    return (
      <header>
        <Nav text={text} isActive={this.state} onClick={this.handleClickNav} />
      </header>
    );
  }
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
  comeFrom: PropTypes.string.isRequired
};

export default withRouter(Header);
