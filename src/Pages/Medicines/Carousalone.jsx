
import { Carousel } from 'react-bootstrap';
import './Carousalone.css';

export default function Carouselone() {
  const images = [
    { src: '/logo/full-width-2.webp', alt: 'Image 1' },
    { src: '/logo/full 3.webp', alt: 'Image 2' },
    { src: '/logo/full-width-3.webp', alt: 'Image 3' },
    { src: '/logo/full-width-4.webp', alt: 'Image 4' },
  ];

  // Define an array of background colors
  const bgColors = ['#e7f1f7', '#d7f9f8', '#e5d4ef', '#fbe0e0'];

  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <div className="image-container" style={{ backgroundColor: bgColors[index % bgColors.length] }}>
            <img
              className="image"
              src={image.src}
              alt={image.alt}
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
