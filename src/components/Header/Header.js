import React, { Component } from 'react';

// Components
import Typist from 'react-typist';
import { withRouter } from 'react-router-dom';

// Styles
import './Header.css';

/**
 *
 * State Full Component: Header
 * Usage : render a header that push my routes navigation
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
  }

  componentWillMount() {
    if (this.props.comeFrom === 'home') {
      this.setState({
        home: true
      });
    }
    if (this.props.comeFrom === 'about') {
      this.setState({
        about: true
      });
    }
    if (this.props.comeFrom === 'skills') {
      this.setState({
        skills: true
      });
    }
    if (this.props.comeFrom === 'works') {
      this.setState({
        works: true
      });
    }
    if (this.props.comeFrom === 'contact') {
      this.setState({
        contact: true
      });
    }
  }

  handleClickNav = (event, route) => {
    event.preventDefault();
    this.props.history.push(route);
  };

  render() {
    return (
      <header className={'header-no-opacity'}>
        <div onClick={event => this.handleClickNav(event, '/')}>
          <span>></span>{' '}
          <Typist
            cursor={{
              show: false
            }}
            className="typist">
            {this.props.text}
          </Typist>{' '}
          <span id="cursor">|</span>
        </div>
        <nav>
          <ul>
            <li
              onClick={event => this.handleClickNav(event, '/about')}
              className={this.state.about ? 'li-active' : null}>
              About me
            </li>
            <li
              onClick={event => this.handleClickNav(event, '/skills')}
              className={this.state.skills ? 'li-active' : null}>
              Skills & Cie
            </li>
            <li
              onClick={event => this.handleClickNav(event, '/works')}
              className={this.state.works ? 'li-active' : null}>
              Work
            </li>
            <li
              onClick={event => this.handleClickNav(event, '/contact')}
              className={this.state.contact ? 'li-active' : null}>
              Contact me
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
