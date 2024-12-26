import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './HoverImage.css';

const HoverImage = ({ imageSrc, Text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span className="relative inline-block">
      {/* Text that triggers the hover */}
      <span
        className="text-white text-lg md:text-xl cursor-pointer underline"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {Text}
      </span>

      {/* The hover image */}
      {isHovered && (
        <span className='p-500 '>
        <img
          src={imageSrc}
          alt="Hovered example"
          className="hover-image z-500"
        />
        </span>
      )}
    </span>
  );
};

HoverImage.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  Text: PropTypes.string.isRequired,
};

export default HoverImage;