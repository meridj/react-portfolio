import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

// Components
import Button from '../Button';

// Styles
import './CardWork.css';

/**
 *
 * State less Component: CardWork
 * Usage : render my works and open or close the work modal
 * @param props => { data }
 *
 */
const CardWork = ({ data }) => {
  console.log(data.resume);
  return (
    <Fade duration={2000}>
      <div className="card-container">
        <h4 id="title-work">{data.title}</h4>
        <h5 id="subtitle-work">{data.techno}</h5>
        <p id="text-work">{data.text}</p>
        <div id="btn-wrapper">
          {data.website && <Button link={data.link} />}
          {data.github && <Button link={data.linkGithub} github />}
        </div>
      </div>
    </Fade>
  );
};

CardWork.propTypes = {
  data: PropTypes.object.isRequired
};

export default CardWork;
