import React from 'react';
import Fade from 'react-reveal/Fade';
import TextLoop from 'react-text-loop';

// Components
import Header from '../../components/Header';

// Styles
import './Home.css';

/**
 *
 * State Less Container: HomeContainer
 * Usage : render home container
 * @param props => none
 *
 */
const Home = () => (
  <main id="home">
    <Header text="Mehdi Meridja aka : meridj" comeFrom="home" />
    <Fade duration={6000} delay={200}>
      <h1 id="home-text">
        Hi, i'm an enthousiast <br />
        <TextLoop>
          <strong className="important-techno">React</strong>
          <strong className="important-techno">Redux</strong>
          <strong className="important-techno">Node</strong>
        </TextLoop>{' '}
        developer<br />based in Lyon, <span id="country">Fr</span>.
      </h1>
    </Fade>
  </main>
);

export default Home;
