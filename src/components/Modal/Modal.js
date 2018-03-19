import React from 'react';
import Ionicon from 'react-ionicons';
import * as ReactModal from 'react-modal';
import Fade from 'react-reveal/Fade';

// Components
import Title from '../Title';

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
      </section>
    </ReactModal>
  );
};

export default Modal;
