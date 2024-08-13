import { useState, useEffect } from 'react';
import './Browse.css';

const ThirdcardDataMed = [
  { imgSrc: '/logo/cat-2.webp' },
  { imgSrc: '/logo/cat-6.webp' },
  { imgSrc: '/logo/cat-9.webp' },
  { imgSrc: '/logo/cat-8.webp' },
  { imgSrc: '/logo/cat-7.webp' },
  { imgSrc: '/logo/cat-1.webp' },
  { imgSrc: '/logo/cat-3.webp' },
  { imgSrc: '/logo/cat-4.webp' },
  { imgSrc: '/logo/cat-5.webp' },
];

function BrowseSnd() {
  const [currentStartIndexMed, setCurrentStartIndexMed] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4); // Default to 2 visible images

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setVisibleCount(2); // Show 2 images on small screens
        setCurrentStartIndexMed(0); // Reset to start when changing to smaller view
      }
      else if (window.innerWidth > 700 && window.innerWidth <= 1010 ) {
        setVisibleCount(3); // Show 2 images on small screens
        setCurrentStartIndexMed(0);

      }
      else {
        setVisibleCount(4); // Show 4 images on larger screens
        setCurrentStartIndexMed(0); // Reset to start when changing to larger view
      }
    };

    handleResize(); // Call at start to set initial visible count

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextSlide = () => {
    if (currentStartIndexMed + visibleCount < ThirdcardDataMed.length) {
      setCurrentStartIndexMed(currentStartIndexMed + 1);
    }
  };

  const prevSlide = () => {
    if (currentStartIndexMed > 0) {
      setCurrentStartIndexMed(currentStartIndexMed - 1);
    }
  };

  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < visibleCount; i++) {
      const card = ThirdcardDataMed[currentStartIndexMed + i];
      if (card) {
        visibleCards.push(card);
      }
    }
    return visibleCards;
  };

  return (
    <div className="ThirdCard-container-Med-two">
      <div className='Browse-heading-two'>
        <p className='health-text'>Categories</p>
      </div>
      <div className="carousel-container-Med third-responsive-second-new">
        {getVisibleCards().map((card, index) => (
          <div className="Thirdicon-section-Med" key={index}>
            <img 
              src={card.imgSrc} 
              alt={`Image ${currentStartIndexMed + index + 1}`} 
              className="Thirdrounded-image-Med" 
            />
          </div>
        ))}
      </div>
      {currentStartIndexMed > 0 && (
        <div className="carousel-control-prev-med carousel-arrow-container-med carousel-control-prev-second">
          <button className="carousel-arrow-med" type="button" onClick={prevSlide}>
            <span className="carousel-arrow-icon-med">&#9664;</span>
          </button>
        </div>
      )}
      {currentStartIndexMed + visibleCount < ThirdcardDataMed.length && (
        <div className="carousel-control-next-med carousel-arrow-container-med carousel-control-next-med-second" >
          <button className="carousel-arrow-med" type="button" onClick={nextSlide}>
            <span className="carousel-arrow-icon-med">&#9654;</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default BrowseSnd;
