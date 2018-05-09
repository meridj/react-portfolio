import React from 'react';
import { Fade } from 'react-reveal';
import { withRouter } from 'react-router-dom';

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
 * @param props => { history }
 *
 */
const Work = ({ history }) => (
  <div id="works">
    <ScrollToTopOnMount />
    <Header text="Let's take a look" comeFrom="works" />
    <Title title="My work" />
    <section>
      {works.map((work, key) => <CardWork data={work} key={key} />)}
      <Fade top>
        <button onClick={() => history.push('/contact')} id="idea-to-reality">
          Turn your idea to reality
        </button>
      </Fade>
    </section>
  </div>
);

export default withRouter(Work);
