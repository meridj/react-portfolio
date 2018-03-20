import React from 'react';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';
import * as ReactModal from 'react-modal';
import Fade from 'react-reveal/Fade';

// Components
import Title from '../Title';
import Button from '../Button';

// Styles
import './Modal.css';

ReactModal.setAppElement('#root');

/**
 *
 * State Less Component: Modal
 * Usage : render a modal for one realization
 * @param props => { handleCloseModal, data }
 *
 */
const Modal = ({ handleCloseModal, modal, data }) => {
  return (
    <ReactModal
      className="Modal"
      overlayClassName="Overlay"
      onRequestClose={handleCloseModal}
      isOpen={modal}
      aria={{ labelledby: 'title-modal' }}>
      <Title title={data.title} />
      <Ionicon
        className="closed"
        onClick={handleCloseModal}
        icon="md-close"
        fontSize="40"
        color="white"
      />
      <section id="work-description">
        <Fade>
          <p>{data.text + data.text}</p>
        </Fade>
        <div id="button-wrapper">
          <Button link={data.link} />
          {data.github ? <Button link={data.linkGithub} github /> : null}
        </div>
      </section>
    </ReactModal>
  );
};

Modal.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired
};

export default Modal;
