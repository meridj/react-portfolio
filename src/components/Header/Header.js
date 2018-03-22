import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';
import { withRouter } from 'react-router-dom';
import Ionicon from 'react-ionicons';

// Components
import Nav from '../../components/Nav';
import { Desktop, TabletAndMobile } from '../Responsive';
import Menu from '../Menu';

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
      contact: false,
      menu: false
    };
    this.handleClickNav = this.handleClickNav.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentWillMount() {
    this.setState({ [this.props.comeFrom]: true });
  }

  handleClickNav(event, route) {
    event.preventDefault();
    this.props.history.push(route);
  }

  toggleMenu() {
    this.setState({
      menu: !this.state.menu
    });
  }

  render() {
    const { text } = this.props;
    return (
      <header>
        <div onClick={event => this.handleClickNav(event, '/')}>
          <span>></span>{' '}
          <Typist cursor={{ show: false }} className="typist">
            {text}
          </Typist>
          <span id="cursor">|</span>
        </div>
        <Desktop>
          <Nav
            text={text}
            isActive={this.state}
            onClick={this.handleClickNav}
          />
        </Desktop>
        <TabletAndMobile>
          <Ionicon
            style={{ margin: '1em' }}
            icon={this.state.menu ? 'ios-close' : 'ios-menu'}
            fontSize="40px"
            onClick={() => this.toggleMenu()}
            color="white"
          />
          <Menu
            onClick={this.handleClickNav}
            isActive={this.state}
            toggleMenu={this.toggleMenu}
            menu={this.state.menu}
          />
        </TabletAndMobile>
      </header>
    );
  }
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
  comeFrom: PropTypes.string.isRequired
};

export default withRouter(Header);
