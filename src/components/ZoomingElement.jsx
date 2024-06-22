import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

const ZoomingElement = ({ imageSrc, audioSrc }) => {
  const [animationClass, setAnimationClass] = useState('');
  const audioRef = useRef(null);

  const animations = [
    'zoom-left-to-right',
    'zoom-right-to-left',
    'zoom-up-to-down',
    'zoom-diagonal',
  ];

  useEffect(() => {
    const element = document.getElementById('zooming-element');

    const handleAnimationEnd = () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset audio to start
      setTimeout(() => {
        applyRandomAnimation();
        audioRef.current.play();
      }, 500); // Delay before applying new animation and playing audio
    };

    const applyRandomAnimation = () => {
      const randomAnimation =
        animations[Math.floor(Math.random() * animations.length)];
      setAnimationClass(randomAnimation);
    };

    const init = () => {
      applyRandomAnimation();
      audioRef.current.play();
    };

    // Event listener for animation end
    element.addEventListener('animationend', handleAnimationEnd);

    // Initial setup
    init();

    // Clean up event listener
    return () => {
      element.removeEventListener('animationend', handleAnimationEnd);
    };
  }, [animations]);

  return (
    <div
      id="zooming-element"
      className={classNames('absolute', animationClass)}
    >
      <img src={imageSrc} alt="Zooming Element" className="w-full h-auto" />
      <audio ref={audioRef} src={audioSrc} autoPlay loop />
    </div>
  );
};

export default ZoomingElement;
