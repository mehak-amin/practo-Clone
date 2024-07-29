import { useState, useEffect } from 'react';
import './SecondCard.css';

function SecondCard() {
  const cardData = [
    { text: (<><span>Period doubts or</span><span>pregnancy</span></>), imgSrc: '/logo/irregular-painful+period.webp' },
    { text: (<><span>Acne, pimple or</span><span>skin issues</span></>), imgSrc: '/logo/Acne.webp' },
    { text: (<><span>Performance issues</span><span>in bed</span></>), imgSrc: '/logo/top-speciality-sexology%20(1).svg' },
    { text: (<><span>Cold, cough or</span><span>fever</span></>), imgSrc: '/logo/coughing.webp' },
    { text: (<><span>Child not</span><span>feeling well</span></>), imgSrc: '/logo/top-speciality-pediatric.svg' },
    { text: (<><span>Depression or</span><span>anxiety</span></>), imgSrc: '/logo/12-mental-wellness.webp' }
  ];

  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newItemsPerSlide;
      if (width <= 631) {
        newItemsPerSlide = 3;
      } else if (width > 631 && width <= 790) {
        newItemsPerSlide = 4;
      } else if (width > 791 && width <= 940) {
        newItemsPerSlide = 5;
      } else if (width > 940 && width <= 1040) {
        newItemsPerSlide = 6;
      
      } else {
        newItemsPerSlide = cardData.length; // Show all items on large screens
      }
      
      setItemsPerSlide(newItemsPerSlide);

      // Ensure currentStartIndex is valid after the change
      if (currentStartIndex + newItemsPerSlide > cardData.length) {
        setCurrentStartIndex(0);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [cardData.length, currentStartIndex]);

  const nextSlide = () => {
    if (currentStartIndex + 1 < cardData.length) {
      setCurrentStartIndex(prevIndex => Math.min(prevIndex + 1, cardData.length - 1));
    }
  };

  const prevSlide = () => {
    if (currentStartIndex > 0) {
      setCurrentStartIndex(prevIndex => Math.max(prevIndex - 1, 0));
    }
  };

  const visibleItems = cardData.slice(currentStartIndex, currentStartIndex + itemsPerSlide);

  return (
    <div className="card-containernew">
      {itemsPerSlide < cardData.length && currentStartIndex > 0 && (
        <div className="carousel-control carousel-control-prev">
          <button className="carousel-arrow-prev" type="button" onClick={prevSlide}>
            <span className="carousel-arrow-icon">&#9664;</span>
          </button>
        </div>
      )}
      <div className="icon-section">
        {visibleItems.map((card, index) => (
          <div className="icon-container" key={index}>
            <img src={card.imgSrc} alt={card.text} className="rounded-image" />
            <p className='card-text'>{card.text}</p>
            <button className='btnsection'>CONSULT NOW</button>
          </div>
        ))}
      </div>
      {itemsPerSlide < cardData.length && currentStartIndex + itemsPerSlide < cardData.length && (
        <div className="carousel-control carousel-control-next">
          <button className="carousel-arrow-next" type="button" onClick={nextSlide}>
            <span className="carousel-arrow-icon">&#9654;</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default SecondCard;
