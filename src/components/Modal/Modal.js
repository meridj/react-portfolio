import React from 'react';

// Components
import * as ReactModal from 'react-modal';
import Ionicon from 'react-ionicons';

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
const Modal = props => {
  const customStyles = {
    content: {
      backgroundImage: `linear-gradient(
          to right top,
          rgb(10, 10, 10) 10%,
          rgb(30, 30, 30) 70%,
          rgb(47, 47, 47) 100%
        )`,
      margin: '0px',
      border: 'none',
      borderRadius: '0px',
      top: '3rem',
      right: '0%',
      left: '0%',
      bottom: '0%',
      zIndex: '2'
    }
  };
  return (
    <ReactModal
      style={customStyles}
      onRequestClose={props.handleCloseModal}
      isOpen={props.modal}
      contentLabel="Minimal Modal Example"
      aria={{
        labelledby: 'title-modal'
      }}>
      <div className="modal-container">
        <div className="header-container">
          <div>
            <h2 className="title-modal">{props.data.title}</h2>
          </div>
          <div id="icon-close-container">
            <Ionicon
              onClick={props.handleCloseModal}
              icon="md-close"
              fontSize="30"
              color="white"
            />
          </div>
        </div>
        <div className="content-container">
          <div>
            <img width="100%" src={props.data.img} alt={props.data.img} />
            <div className="text-presentation-work-modal-container">
              <p className="text-presentation-work-modal">{props.data.text}</p>
            </div>
            <div className="link-to-website-container">
              <a
                onClick={props.handleCloseModal}
                className="link-to-website"
                href={props.data.link}
                target="_blank">
                <button className="button">See Website</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default Modal;
