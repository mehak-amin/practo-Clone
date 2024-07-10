import { useState } from 'react';
import './Browse.css';

// Define or import ThirdcardData here
const ThirdcardDataMed = [
  { imgSrc: '/logo/skin.webp' },
  { imgSrc: '/logo/h-c-6.webp' },
  { imgSrc: '/logo/h-c-7.webp' },
  { imgSrc: '/logo/h-c-4.webp' },
  { imgSrc: '/logo/h-c-2.webp' },
  { imgSrc: '/logo/h-c-3.webp' },
  { imgSrc: '/logo/h-c-1.webp' },
  
];

function Browse() {
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
        <h3 className='browse-text'>Browse medicines and health products</h3>
        <p className='health-text'> Health condition</p>

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

export default Browse;
