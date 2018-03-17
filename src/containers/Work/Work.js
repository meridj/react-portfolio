import React from 'react';

// Config
import dataCardWork from '../../config/data';

// Components
import Title from '../../components/Title';
import Header from '../../components/Header';
import CardWork from '../../components/CardWork';

// Styles
import './Work.css';

/**
 *
 * State Less Container: WorkContainer
 * Usage : render work container
 * @param props => none
 *
 */
const Work = () => {
  return (
    <div id="works">
      <Header text="Let's take a look" comeFrom="works" />
      <Title title="My work" />
      <section>
        {dataCardWork.map((data, key) => {
          return <CardWork data={data} key={key} />;
        })}
      </section>
    </div>
  );
};

export default Work;
