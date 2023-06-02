import Carousel from 'react-bootstrap/Carousel';
import { portrait1, portrait2, portrait3, portrait4, portrait5, portrait6, portrait7, portrait8, portrait9 } from '../assets/portrait';

function PortraitCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block rounded mx-auto"
          src={portrait1}
          alt="First slide"
          width="500px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block rounded mx-auto"
          src={portrait2}
          alt="Second slide"
          width="500px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block rounded mx-auto"
          src={portrait3}
          alt="Third slide"
          width="500px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block rounded mx-auto"
          src={portrait4}
          alt="Third slide"
          width="500px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block rounded mx-auto"
          src={portrait5}
          alt="Third slide"
          width="500px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block rounded mx-auto"
          src={portrait6}
          alt="Third slide"
          width="500px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block rounded mx-auto"
          src={portrait7}
          alt="Third slide"
          width="500px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block rounded mx-auto"
          src={portrait8}
          alt="Third slide"
          width="500px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block rounded mx-auto"
          src={portrait9}
          alt="Third slide"
          width="500px"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default PortraitCarousel;