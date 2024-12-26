import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
        <img
          src={imageSrc}
          alt="Hovered example"
          style={{
            width: '400px', // Set a fixed width directly
            height: 'auto', // Maintain aspect ratio
            position: 'absolute',
            top: '100%', // Place it just below the text
            left: '50%',
            transform: 'translateX(-50%)',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            zIndex: 50,
          }}
        />
      )}
    </span>
  );
};

HoverImage.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  Text: PropTypes.string.isRequired,
};

export default HoverImage;