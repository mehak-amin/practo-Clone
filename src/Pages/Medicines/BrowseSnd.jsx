import { useState } from 'react';
import './Browse.css';

// Define or import ThirdcardData here
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

  const nextSlide = () => {
    if (currentStartIndexMed + 4 < ThirdcardDataMed.length) {
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
    for (let i = 0; i < 4; i++) {
      visibleCards.push(ThirdcardDataMed[currentStartIndexMed + i]);
    }
    return visibleCards;
  };

  return (
    <div className="ThirdCard-container-Med">
      <div className='Browse-heading'>
        
        <p className='health-text'> Categories</p>

      </div>
      <div className="carousel-container-Med">
        {getVisibleCards().map((card, index) => (
          <div className="Thirdicon-section-Med" key={index}>
            <img src={card.imgSrc} alt={`Image ${currentStartIndexMed + index + 1}`} className="Thirdrounded-image-Med" />
          </div>
        ))}
      </div>
      {currentStartIndexMed > 0 && (
        <div className="carousel-control-prev-med carousel-arrow-container-med">
          <button className="carousel-arrow-med" type="button" onClick={prevSlide}>
            <span className="carousel-arrow-icon-med">&#9664;</span>
          </button>
        </div>
      )}
      {currentStartIndexMed + 4 < ThirdcardDataMed.length && (
        <div className="carousel-control-next-med carousel-arrow-container-med">
          <button className="carousel-arrow-med" type="button" onClick={nextSlide}>
            <span className="carousel-arrow-icon-med">&#9654;</span>
          </button>
        </div>
      )}
      {/* <hr className="section-divider" /> */}
      
    </div>
  );
}

export default BrowseSnd;
