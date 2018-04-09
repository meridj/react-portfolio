import React from 'react';
import PropTypes from 'prop-types';
import { BarLoader } from 'react-spinners';

// Styles
import './SendingFormLoader.css';

/**
 *
 * Stateless Component: SendingFormLoader
 * Usage : render a loader when the form is sending
 * @param props => { isSendingForm }
 *
 */
const SendingFormLoader = ({ isSendingForm }) => (
  <div
    style={{ display: isSendingForm ? 'auto' : 'none' }}
    className="bar-loader"
  >
    <BarLoader height={30} color={'#7f00ff'} loading={isSendingForm} />
    <span>Is sending</span>
  </div>
);

SendingFormLoader.propTypes = {
  isSendingForm: PropTypes.bool.isRequired
};

export default SendingFormLoader;
