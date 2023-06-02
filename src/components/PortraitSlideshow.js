import Carousel from 'react-bootstrap/Carousel';
//
import portrait1 from "../assets/portrait1.jpg"
import portrait2 from "../assets/portrait2.jpg"
import portrait3 from "../assets/portrait3.jpg"
import portrait4 from "../assets/portrait4.jpg"
import portrait5 from "../assets/portrait5.jpg"
import portrait6 from "../assets/portrait6.jpg"
import portrait7 from "../assets/portrait7.jpg"
import portrait8 from "../assets/portrait8.jpg"
import portrait9 from "../assets/portrait9.jpg"

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