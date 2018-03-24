import React, { Component } from 'react';
import * as ReactMenu from 'react-modal';
import Ionicon from 'react-ionicons';
import './Menu.css';
import PropTypes from 'prop-types';

ReactMenu.setAppElement('#root');

class Menu extends Component {
  constructor(props) {
    super(props);
    this.onClickNav = this.onClickNav.bind(this);
  }

  onClickNav(event, route) {
    const isCurrentRoute = this.props.isActive[route.split('/')[1]];

    if (isCurrentRoute) {
      this.props.toggleMenu();
    } else {
      this.props.toggleMenu();
      this.props.onClick(event, route);
    }
  }

  render() {
    const { menu, toggleMenu, isActive } = this.props;
    return (
      <ReactMenu
        className="Menu menu-enter"
        overlayClassName={'none'}
        onRequestClose={toggleMenu}
        isOpen={menu}
        aria={{ labelledby: 'title-modal' }}>
        <Ionicon
          style={{ margin: '1em' }}
          icon="md-close"
          fontSize="35px"
          onClick={() => toggleMenu()}
          color="white"
        />
        <nav id="nav">
          <ul id="ul-menu">
            <li
              onClick={event => this.onClickNav(event, '/about')}
              className={isActive.about ? 'li-active' : null}>
              About me
            </li>
            <li
              onClick={event => this.onClickNav(event, '/skills')}
              className={isActive.skills ? 'li-active' : null}>
              Skills & Cie
            </li>
            <li
              onClick={event => this.onClickNav(event, '/works')}
              className={isActive.works ? 'li-active' : null}>
              Work
            </li>
            <li
              onClick={event => this.onClickNav(event, '/contact')}
              className={isActive.contact ? 'li-active' : null}>
              Contact me
            </li>
          </ul>
        </nav>
      </ReactMenu>
    );
  }
}

Menu.propTypes = {
  menu: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.object.isRequired
};

export default Menu;
