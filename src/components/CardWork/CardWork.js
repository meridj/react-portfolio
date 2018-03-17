import React, { Component } from 'react';

// Components
import Zoom from 'react-reveal/Zoom';
import Modal from '../Modal';

// Styles
import './CardWork.css';

/**
 *
 * State Full Component: CardWork
 * Usage : render my works and open or close the work modal
 * @param props => { data }
 *
 */
class CardWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleCloseModal() {
    this.setState({
      modal: false
    });
  }

  handleOpenModal() {
    this.setState({
      modal: true
    });
  }

  render() {
    return (
      <div>
        <Zoom>
          <div
            onClick={event => this.handleOpenModal(event)}
            className="card-container">
            <h4 id="title-work">{this.props.data.title}</h4>
            <h5 id="subtitle-work">{this.props.data.techno}</h5>
            <p id="text-work">{this.props.data.littleText}</p>
          </div>
        </Zoom>
        <Modal
          data={this.props.data}
          modal={this.state.modal}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}

export default CardWork;
