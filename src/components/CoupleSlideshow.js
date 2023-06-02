import Carousel from 'react-bootstrap/Carousel';
//
import couples1 from "../assets/couples1.jpg"
import couples3 from "../assets/couples3.jpg"
import couples5 from "../assets/couples5.jpeg"
import couples6 from "../assets/couples6.jpg"
import couples8 from "../assets/couples8.jpg"
import couples9 from "../assets/couples9.jpg"
import couples12 from "../assets/couples12.jpg"
import couples13 from "../assets/couples13.jpg"
import couples16 from "../assets/couples16.jpg"

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