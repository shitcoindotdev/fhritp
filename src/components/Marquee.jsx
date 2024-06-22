import React from 'react';
import './Marquee.css'; // Import the CSS file for styling

const Marquee = ({ imageSrc, altText, speed }) => {
  return (
    <div className="marquee-container w-full">
      <div className="marquee">
        <img src={imageSrc} alt={altText} className="marquee-image" />
        <img src={imageSrc} alt={altText} className="marquee-image" />
        <img src={imageSrc} alt={altText} className="marquee-image" />
        <img src={imageSrc} alt={altText} className="marquee-image" />
      </div>
    </div>
  );
};

export default Marquee;
