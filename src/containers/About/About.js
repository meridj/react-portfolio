import React from 'react';

// Components
import Title from '../../components/Title';
import Header from '../../components/Header';
import ScrollToTopOnMount from '../../components/ScrollToTopOnMount';
import AboutMeDescription from '../../components/AboutMeDescription';

// Datas
import { about } from '../../config/data';

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
    <ScrollToTopOnMount />
    <Header text="Let's talk about me" comeFrom="about" />
    <Title title="About me" />
    <section id="presentation-text">
      {about.map(({ textPosition, badgeText, textDescription }, key) => (
        <AboutMeDescription
          key={key}
          textPosition={textPosition}
          badgeText={badgeText}
          textDescription={textDescription}
        />
      ))}
    </section>
    <section id="presentation-photo" />
  </div>
);

export default About;
