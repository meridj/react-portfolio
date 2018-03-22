import React from 'react';
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={1025} />;
const TabletAndMobile = props => (
  <Responsive {...props} minWidth={320} maxWidth={1024} />
);

export { Desktop, TabletAndMobile };
