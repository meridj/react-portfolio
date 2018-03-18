import React from 'react';

// Datas
import { mojos, skills } from '../../config/data';

// Components
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
  return (
    <div id="skills">
      <Header text="Let's talk about my skills" comeFrom="skills" />
      <Title title="Skills & cie" />
      <section className="margin-top-container">
        {mojos.map(({ title, text, svg }, key) => (
          <MojoOnWebDev key={key} title={title} text={text} svg={svg} />
        ))}
      </section>
      <LightSpeed left delay={500}>
        <h4 id={'work-with-text'}>I work on :</h4>
      </LightSpeed>
      <section>
        {skills.map(({ title, technoName }, key) => (
          <SkillsCategory key={key} title={title} technoName={technoName} />
        ))}
      </section>
    </div>
  );
};

export default Skills;
