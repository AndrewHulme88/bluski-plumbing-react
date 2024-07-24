import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Showcase() {
  return (
    <>
      <div className="showcase-heading">
        <h1>Our Work</h1>
      </div>
      <Carousel>
      <Carousel.Item>
        <img src="src/assets/images/Screenshot 2024-03-04 171201.png" alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="src/assets/images/Screenshot 2024-03-04 171216.png" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="src/assets/images/Screenshot 2024-03-04 171247.png" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="src/assets/images/Screenshot 2024-03-04 171331.png" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="src/assets/images/Screenshot 2024-03-04 171104.png" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="src/assets/images/Screenshot 2024-03-04 171026.png" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="src/assets/images/Screenshot 2024-03-04 170913.png" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="src/assets/images/Screenshot 2024-03-04 170956.png" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Showcase;
