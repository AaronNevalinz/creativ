// HorizontalShowcase.js
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg'

const images = [
  // Provide your image URLs here
  image1,
  image2,
  image3,
  image1,
  image2,
  image3,
  // ...
];

const CreativeShowcase = () => {
  const controls = useAnimation();

  const handleHover = (isHovered) => {
    // Pause the animation on hover
    controls.start({ opacity: isHovered ? 1 : 0.7 });
  };

  return (
    <div className='relative w-full h-screen bg-color-primary'>
      <div>
        <h1 className='text-8xl font-light pt-10 pl-10'>Creativity <br />Powered</h1>
      </div>

      <div
      style={{
        overflowX: 'auto',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          style={{
            width: '500px', // Adjust as needed
            height:'300px',
            //minWidth: '100%', // Ensures images take full width
            flexShrink: 0, // Prevents images from shrinking
          }}
          // whileHover={{ scale: 1.1 }}
          onHoverStart={() => handleHover(true)}
          onHoverEnd={() => handleHover(false)}
          className='mr-5'
        >
          <motion.img
            src={image}
            alt={`Image ${index}`}
            style={{
             width: '100%', // Ensures images take full width
            }}
            animate={controls}
            initial={{ opacity: 0.7 }}
            className='object-cover'
          />
        </motion.div>
      ))}
    </div>

    <div className='flex flex-row-reverse items-end justify-between px-6'>
      <h1 className='text-8xl font-light'>by <br /> Community</h1>
      <div className='max-w-[400px]'>
        Creativ is the best place to build community with your biggest fans, share exclusive work and turn your passion into a lasting creative business
      </div>
    </div>

    
    </div>
  );
};

export default CreativeShowcase;
