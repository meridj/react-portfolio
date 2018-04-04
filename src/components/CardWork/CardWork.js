import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Flip from 'react-reveal/Flip';

// Components
import Modal from '../Modal';
import { Desktop, TabletAndMobile } from '../../components/Responsive';

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
    const { data } = this.props;
    return (
      <div>
        <Flip top>
          <Desktop>
            <div
              onClick={event => this.handleOpenModal(event)}
              className="card-container"
            >
              <h4 id="title-work">{data.title}</h4>
              <h5 id="subtitle-work">{data.techno}</h5>
              <p id="text-work">{data.littleText}</p>
            </div>
          </Desktop>
          <TabletAndMobile>
            <a id="link-to-work" target="_blank" href={data.link}>
              <div className="card-container">
                <h4 id="title-work">{data.title}</h4>
                <h5 id="subtitle-work">{data.techno}</h5>
                <p id="text-work">{data.littleText}</p>
              </div>
            </a>
          </TabletAndMobile>
        </Flip>
        <Desktop>
          <Modal
            data={data}
            modal={this.state.modal}
            handleCloseModal={this.handleCloseModal}
          />
        </Desktop>
      </div>
    );
  }
}

CardWork.propTypes = {
  data: PropTypes.object.isRequired
};

export default CardWork;
