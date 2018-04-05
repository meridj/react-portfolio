import React from 'react';

// Components
import Header from '../../components/Header';
import ScrollToTopOnMount from '../../components/ScrollToTopOnMount';

// Styles
import './NotFound.css';

/**
 *
 * State Less Container: AboutContainer
 * Usage : render NotFound container
 * @param props => none
 *
 */
const NotFound = () => (
  <div id="not-found">
    <ScrollToTopOnMount />
    <Header text="Mehdi Meridja aka : meridj" comeFrom="notFound" />
    <h3>
      Oups,<br />sorry but this page doesn't exist.
    </h3>
  </div>
);

export default NotFound;
