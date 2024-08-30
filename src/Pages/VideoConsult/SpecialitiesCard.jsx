
import { useState, useEffect } from 'react';
import './Specialities.css';

function SpecialitiesCard() {
  const SpecialcardData = [
    { text: (<><span>Gynaecology</span></>), imgSrc: '/logo/top-speciality-gynaecologist.svg', paragraph: '₹499.00' },
    { text: (<><span>Sexology</span></>), imgSrc: '/logo/top-speciality-sexology%20(1).svg', paragraph: '₹499.00' },
    { text: (<><span>General physician</span></>), imgSrc: '/logo/top-speciality-gp.svg', paragraph: '₹399.00' },
    { text: (<><span>Dermatology</span></>), imgSrc: '/logo/top-speciality-dermatologist.svg', paragraph: '₹499.00' },
    { text: (<><span>Psychiatry</span></>), imgSrc: '/logo/top-speciality-psychiatric.svg', paragraph: '₹499.00' },
    { text: (<><span>Stomach and digestion</span></>), imgSrc: '/logo/top-speciality-stomach.svg', paragraph: '₹399.00' },
    { text: (<><span>Pediatrics</span></>), imgSrc: '/logo/top-speciality-pediatric (1).svg', paragraph: '₹499.00' },
    { text: (<><span>Urology</span></>), imgSrc: '/logo/top-speciality-kidney.svg', paragraph: '₹499.00' },
  ];

  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(window.innerWidth <= 500 ? 3 : 6);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth <= 500) {
        setItemsPerSlide(3);
      } else {
        setItemsPerSlide(6);
      }
      // Reset the start index to avoid potential overflow
      setCurrentStartIndex(0);
    };

    window.addEventListener('resize', updateItemsPerSlide);

    // Initial check
    updateItemsPerSlide();

    return () => {
      window.removeEventListener('resize', updateItemsPerSlide);
    };
  }, []);

  const nextSlide = () => {
    if (currentStartIndex + itemsPerSlide < SpecialcardData.length) {
      setCurrentStartIndex(currentStartIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentStartIndex > 0) {
      setCurrentStartIndex(currentStartIndex - 1);
    }
  };

  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < itemsPerSlide; i++) {
      if (SpecialcardData[currentStartIndex + i]) {
        visibleCards.push(SpecialcardData[currentStartIndex + i]);
      }
    }
    return visibleCards;
  };

  return (
    <div className='specialities-div'>
               
      <div className="specialities-header-container">
    <div className="specialities-header-content">
      <div className="specialities-text-section">
        <h3 className='specialities-text-colr'>25+ Specialities</h3>
         <p className='specialities-para-colr'>Consult with top doctors across specialities</p>
       </div>
       <div className="specialities-button-section">
         <button type="button" className="specialities-btn">See all specialities</button>
       </div>
     </div>
  </div>

                                          {/* Specialities Card */}
      <div className="Special-card-containernew">
        {currentStartIndex > 0 && (
          <div className="carousel-control-prev-Special carousel-arrow-container-Special">
            <button className="carousel-arrow-Special" type="button" onClick={prevSlide}>
              <span className="carousel-arrow-icon-Special">&#9664;</span>
            </button>
          </div>
        )}
        <div className="carousel-container-Special">
          {getVisibleCards().map((card, index) => (
            <div className="Special-icon-section" key={index}>
              <img src={card.imgSrc} alt={card.text} className="Special-rounded-image" />
              <p className='Special-card-text'>{card.text}</p>
              <p className="Special-description-Product" dangerouslySetInnerHTML={{ __html: card.paragraph }}></p>
              <button className='Special-btnsection'>CONSULT NOW </button>
            </div>
          ))}
        </div>
        {currentStartIndex + itemsPerSlide < SpecialcardData.length && (
          <div className="carousel-control-next-Special carousel-arrow-container-Special">
            <button className="carousel-arrow-Special" type="button" onClick={nextSlide}>
              <span className="carousel-arrow-icon-Special">&#9654;</span>
            </button>
          </div>
        )}
      </div>
                                   {/* COMMON HEALTH CONCERNS */}              

      <div className="health-header-container">
    <div className="health-header-content">
      <div className="health-text-section">
        <h3 className='health-text-colr'>Common Health Concerns</h3>
        <p className='health-para-colr'>Consult a doctor online for any health issue</p>
      </div>
      <div className="health-button-section">
        <button type="button" className="health-btn">See All Symptoms</button>
      </div>
    </div>
  </div>
    </div>
  );
}

export default SpecialitiesCard;
