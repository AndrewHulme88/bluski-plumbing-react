import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../CarouselStyles.css';

const images = [
  'src/assets/images/Screenshot 2024-03-04 171201.png',
  'src/assets/images/Screenshot 2024-03-04 171216.png',
  'src/assets/images/Screenshot 2024-03-04 171247.png',
  'src/assets/images/Screenshot 2024-03-04 171331.png',
  'src/assets/images/Screenshot 2024-03-04 171104.png',
  'src/assets/images/Screenshot 2024-03-04 171026.png',
  'src/assets/images/Screenshot 2024-03-04 170913.png',
  'src/assets/images/Screenshot 2024-03-04 170956.png'
];

function Showcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="showcase-heading">
        <h1>Our Work</h1>
      </div>
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        indicators={false} // We'll use custom indicators
        interval={null} // If you want the carousel not to slide automatically
      >
        {images.map((img, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={img}
              alt={`Image ${index + 1}`}
            />
            <Carousel.Caption>
              <h3>Image {index + 1} caption</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="carousel-indicators">
        {images.map((img, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleSelect(index)}
            className={`carousel-indicator ${index === activeIndex ? 'active' : ''}`}
          >
            <img
              src={img}
              alt={`Image ${index + 1}`}
              className="small-image"
            />
          </button>
        ))}
      </div>
    </>
  );
}

export default Showcase;
