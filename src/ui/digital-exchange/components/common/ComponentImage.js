import React from 'react';

import { componentType } from 'state/digital-exchange/components/propTypes';


const ComponentImage = ({ component }) => {
  if (component.image) {
    return (
      <img
        alt={component.name}
        src={component.image}
      />);
  }

  return (
    <img src="images/image-unavailable.png" alt="" />
  );
};

ComponentImage.propTypes = {
  component: componentType.isRequired,
};


export default ComponentImage;
