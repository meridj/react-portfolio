import React from 'react';

// Components

import ResponsiveSvg from '../../components/ResponsiveSvg';
import IntuitiveSvg from '../../components/IntuitiveSvg';
import DynamicSvg from '../../components/DynamicSvg';

const mojos = [
  {
    title: 'Responsive',
    svg: <ResponsiveSvg />,
    text:
      'My layouts are obviously responsive. It adapts to all types of screens'
  },
  {
    title: 'Intuitive',
    svg: <IntuitiveSvg />,
    text:
      'My web applications are intuitive and make the visitor live an unforgettable experience.'
  },
  {
    title: 'Dynamic',
    svg: <DynamicSvg />,
    text: 'Websites do not have to be static. I make them come alive.'
  }
];

export default mojos;
