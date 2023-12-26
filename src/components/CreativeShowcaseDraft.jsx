// HorizontalShowcase.js
import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const images = [
  // Provide your image URLs here
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  // ...
];

const HorizontalShowcase = () => {
  const controls = useAnimation();

  const handleHover = (isHovered) => {
    // Pause the animation on hover
    controls.start({ opacity: isHovered ? 1 : 0.7 });
  };

  return (
    <div
      style={{
        overflowX: 'auto',
        display: 'flex',
        flexDirection: 'row',
      }}
      className='bg-color-primary h-screen w-full'
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          style={{
            width: '100vw', // Adjust as needed
            minWidth: '100%', // Ensures images take full width
            flexShrink: 0, // Prevents images from shrinking
          }}
          whileHover={{ scale: 1.1 }}
          onHoverStart={() => handleHover(true)}
          onHoverEnd={() => handleHover(false)}
        >
          <motion.img
            src={image}
            alt={`Image ${index}`}
            style={{
              width: '100%', // Ensures images take full width
            }}
            animate={controls}
            initial={{ opacity: 0.7 }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default HorizontalShowcase;
