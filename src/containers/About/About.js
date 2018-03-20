import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

// Components
import Title from '../../components/Title';
import Header from '../../components/Header';

// Styles
import './About.css';

/**
 *
 * State Less Container: AboutContainer
 * Usage : render about container
 * @param props => none
 *
 */
const About = () => (
  <div id="about">
    <Header text="Let's talk about me" comeFrom="about" />
    <Title title="About me" />
    <section id="presentation-text">
      <div className="right">
        <Bounce left>
          <span>Who i am ?</span>
        </Bounce>
        <Fade duration={5000}>
          <p>
            I'm Mehdi Meridja, but my entourage calls me meridj. I'm 23 and i'm
            passionate about computers since I was little.
          </p>
        </Fade>
      </div>
      <div className="left">
        <Fade duration={5000}>
          <p>
            So I decided to learn software development at Epitech. During this
            course, I learned C, C ++, Unix system programming, project
            management and more, it was really interesting.
          </p>
        </Fade>
        <Bounce right>
          <span>What i've done ?</span>
        </Bounce>
      </div>
      <div className="right">
        <Bounce left>
          <span>more ... ?</span>
        </Bounce>
        <Fade duration={5000}>
          <p>
            At the same time, I discovered web development as an autodidact and
            that is why, after having validated my first two years at Epitech, I
            decided to turn to O'clock.io, where I was able to perfect myself in
            web development and especially in React and Redux.
          </p>
        </Fade>
      </div>
      <div className="left">
        <Fade duration={5000}>
          <p>
            Today, I continue my quest, which aims at one and only goal : to be
            at the height of my art. So every day I keep learning and being the
            best developer I can be.
          </p>
        </Fade>
        <Bounce right>
          <span>What i'm doing ?</span>
        </Bounce>
      </div>
    </section>
    <Fade duration={2000}>
      <section id="presentation-photo" />
    </Fade>
  </div>
);

export default About;
