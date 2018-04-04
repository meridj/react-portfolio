import React from 'react';

// Datas
import { works } from '../../config/data';

// Components
import Title from '../../components/Title';
import Header from '../../components/Header';
import CardWork from '../../components/CardWork';
import ScrollToTopOnMount from '../../components/ScrollToTopOnMount';

// Styles
import './Work.css';

/**
 *
 * State Less Container: WorkContainer
 * Usage : render work container
 * @param props => none
 *
 */
const Work = () => (
  <div id="works">
    <ScrollToTopOnMount />;
    <Header text="Let's take a look" comeFrom="works" />
    <Title title="My work" />
    <section>
      {works.map((work, key) => {
        return <CardWork data={work} key={key} />;
      })}
    </section>
  </div>
);

export default Work;
