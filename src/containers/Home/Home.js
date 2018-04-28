import React from 'react';
import Fade from 'react-reveal/Fade';
import TextLoop from 'react-text-loop';

// Components
import Header from '../../components/Header';
import ScrollToTopOnMount from '../../components/ScrollToTopOnMount';
import DiscoverMyWorld from '../../components/DiscoverMyWorld';
import { Desktop } from '../../components/Responsive';

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
    <ScrollToTopOnMount />
    <Header text="Mehdi Meridja aka : meridj" comeFrom="home" />
    <Fade duration={6000} delay={200}>
      <h1 id="home-text">
        Hi, i'm an enthusiast <br />
        <TextLoop>
          <strong className="important-techno">JavaScript</strong>
          <strong className="important-techno">ReactJs</strong>
          <strong className="important-techno">NodeJs</strong>
          <strong className="important-techno">Redux</strong>
        </TextLoop>{' '}
        developer<br />based in Lyon, <span id="country">Fr</span>.
      </h1>
    </Fade>
    <Desktop>
      <DiscoverMyWorld />
    </Desktop>
  </main>
);

export default Home;
