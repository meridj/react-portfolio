import React from 'react';
import * as ReactMenu from 'react-modal';

import './Menu.css';

ReactMenu.setAppElement('#root');

const Menu = ({ menu, children, toggleMenu, onClick, isActive }) => {
  return (
    <ReactMenu
      className="Menu menu-enter"
      overlayClassName="Overlay"
      onRequestClose={toggleMenu}
      isOpen={menu}
      aria={{ labelledby: 'title-modal' }}>
      <nav id="nav">
        <ul id="ul-menu">
          <li
            onClick={event => onClick(event, '/about')}
            className={isActive.about ? 'li-active' : null}>
            About me
          </li>
          <li
            onClick={event => onClick(event, '/skills')}
            className={isActive.skills ? 'li-active' : null}>
            Skills & Cie
          </li>
          <li
            onClick={event => onClick(event, '/works')}
            className={isActive.works ? 'li-active' : null}>
            Work
          </li>
          <li
            onClick={event => onClick(event, '/contact')}
            className={isActive.contact ? 'li-active' : null}>
            Contact me
          </li>
        </ul>
      </nav>
    </ReactMenu>
  );
};

export default Menu;
