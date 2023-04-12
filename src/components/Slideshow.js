import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
import example2 from "../assets/example2.jpeg"
import engagement from "../assets/engagement.jpg"
import couple from "../assets/couple.jpeg"
import portrait from "../assets/portrait.jpeg"
import family from "../assets/family.jpeg"
import portrait2 from "../assets/portrait2.jpeg"
import wedding3 from "../assets/wedding3.jpeg"

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-50 rounded mx-auto"
          src={example2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 rounded mx-auto"
          src={portrait2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 rounded mx-auto"
          src={engagement}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 rounded mx-auto"
          src={portrait}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 rounded mx-auto"
          src={couple}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 rounded mx-auto"
          src={family}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 rounded mx-auto"
          src={wedding3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;