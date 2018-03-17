import React from 'react';

// Components
import ResponsiveSvg from '../../components/ResponsiveSvg';
import IntuitiveSvg from '../../components/IntuitiveSvg';
import DynamicSvg from '../../components/DynamicSvg';
import MojoOnWebDev from '../../components/MojoOnWebDev';
import Header from '../../components/Header';
import SkillsCategory from '../../components/SkillsCategory';
import Title from '../../components/Title';
import LightSpeed from 'react-reveal/LightSpeed';

// Styles
import './Skills.css';

/**
 *
 * State Less Container: SkillsContainer
 * Usage : render skills container
 * @param props => none
 *
 */
const Skills = () => {
  const textResponsive =
    'My layouts are obviously responsive. It adapts to all types of screens';
  const textIntuitive =
    'My web applications are intuitive and make the visitor live an unforgettable experience.';
  const textDynamic =
    'Websites do not have to be static. I make them come alive.';

  return (
    <div id="skills">
      <Header text="Let's talk about my skills" comeFrom="skills" />
      <Title title="Skills & cie" />

      <section className="margin-top-container">
        <MojoOnWebDev
          text={textResponsive}
          title={'Responsive'}
          svg={<ResponsiveSvg />}
        />
        <MojoOnWebDev
          text={textIntuitive}
          title={'Intuitive'}
          svg={<IntuitiveSvg />}
        />
        <MojoOnWebDev
          text={textDynamic}
          title={'Dynamic'}
          svg={<DynamicSvg />}
        />
      </section>

      <LightSpeed left delay={500}>
        <h4 id={'work-with-text'}>I work on :</h4>
      </LightSpeed>
      <section>
        <SkillsCategory
          title="Client Side"
          technoName={[
            'ReactJs',
            'Redux',
            'Flow',
            'Vanilla',
            'jQuery',
            'Html',
            'Css',
            'Grid Layout',
            'jQuery',
            'Sass'
          ]}
        />
        <SkillsCategory
          title="Server Side"
          technoName={['NodeJs', 'ExpressJs', 'GraphQL', 'Rest', 'MongoDB']}
        />
        <SkillsCategory
          title="Deployment & Collaboration"
          technoName={['Git', 'Trello', 'Slack', 'Gulp', 'Webpack']}
        />
      </section>
    </div>
  );
};

export default Skills;
