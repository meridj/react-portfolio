import React from 'react';

// Components
import Title from '../../components/Title';
import Header from '../../components/Header';
import Fade from 'react-reveal/Fade';

// Styles
import './About.css';

/**
 *
 * State Less Container: AboutContainer
 * Usage : render about container
 * @param props => none
 *
 */
const About = () => {
  return (
    <div id="about">
      <Header text="Let's talk about me" comeFrom="about" />
      <Title title="About me" />
      <section id="presentation-text">
        <p>test</p>
      </section>
      <Fade duration={2000}>
        <section id="presentation-photo" />
      </Fade>
    </div>
  );
};

export default About;
