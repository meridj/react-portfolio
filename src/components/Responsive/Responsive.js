import React from 'react';
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const TabletAndMobile = props => (
  <Responsive {...props} minWidth={100} maxWidth={991} />
);

export { Desktop, TabletAndMobile };
