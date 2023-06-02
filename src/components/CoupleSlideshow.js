import Carousel from 'react-bootstrap/Carousel';
//
import { couples1, couples3, couples5, couples6, couples8, couples9, couples12, couples13, couples16} from "../assets";

function CouplesCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-50 rounded mx-auto"
          src={couples8}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 rounded mx-auto"
          src={couples1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 rounded mx-auto"
          src={couples3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 rounded mx-auto"
          src={couples9}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 rounded mx-auto"
          src={couples5}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 rounded mx-auto"
          src={couples6}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 rounded mx-auto"
          src={couples12}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 rounded mx-auto"
          src={couples13}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 rounded mx-auto"
          src={couples16}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CouplesCarousel;