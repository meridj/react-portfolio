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
  <div className="bar-loader">
    <BarLoader height={15} color={'#7f00ff'} loading={isSendingForm} />
  </div>
);

SendingFormLoader.propTypes = {
  isSendingForm: PropTypes.bool.isRequired
};

export default SendingFormLoader;
