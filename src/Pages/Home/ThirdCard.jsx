import { useState, useEffect } from 'react';
import './ThirdCard.css';

function ThirdCard() {
  const ThirdcardData = [
    { text: 'Dentist', imgSrc: '/logo/sp-dentist@2x.jpg', paragraph: 'Teething troubles? Schedule a dental checkup' },
    { text: 'Gynecologist/Obstetrician', imgSrc: '/logo/sp-gynecologist@2x.jpg', paragraph: 'Explore for women’s health, pregnancy and infertility treatments' },
    { text: 'Dietitian/Nutrition', imgSrc: '/logo/sp-dietitian@2x.jpg', paragraph: 'Get guidance on eating right, weight management and sports nutrition' },
    { text: 'Physiotherapist', imgSrc: '/logo/sp-physiotherapist@2x.jpg', paragraph: 'Pulled a muscle? Get it treated by a trained physiotherapist' },
    { text: 'General Surgeon', imgSrc: '/logo/sp-general-surgeon@2x.jpg', paragraph: 'Need to get operated? Find the right surgeon' },
    { text: 'Orthopedist', imgSrc: '/logo/sp-orthopedist@2x.jpg', paragraph: 'For Bone and Joints issues, spinal injuries and more' },
    { text: 'General Physician', imgSrc: '/logo/sp-general-doctor@2x.jpg', paragraph: 'Find the right family doctor in your neighborhood' },
    { text: 'Pediatrician', imgSrc: '/logo/sp-pediatrician@2x.jpg', paragraph: 'Child Specialists and Doctors for Infant' },
    { text: 'Gastroenterologist', imgSrc: '/logo/sp-gastroenterologist@2x.jpg', paragraph: 'Explore for issues related to digestive system, liver and pancreas' }
  ];

  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newItemsPerSlide;
      if (width <= 500) {
        newItemsPerSlide = 2;
      } else if (width > 500 && width <= 710) {
        newItemsPerSlide = 2;
      } else if (width > 710 && width <= 1050) {
        newItemsPerSlide = 3;
      } else {
        newItemsPerSlide = 4;
      }
      setItemsPerSlide(newItemsPerSlide);
    };

    window.addEventListener('resize', handleResize);

    // Initial setting
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextSlide = () => {
    if (currentStartIndex + itemsPerSlide < ThirdcardData.length) {
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
      visibleCards.push(ThirdcardData[currentStartIndex + i]);
    }
    return visibleCards;
  };

  return (
    <div className='responsive-third'>
      <div className="header-container">
        <div className="header-content">
          <div className="text-section">
            <h3 className='text-colr'>Book an appointment for an in-clinic consultation</h3>
            <p className='para-colr'>Find experienced doctors across all specialties</p>
          </div>
        </div>
      </div>
      <div className="ThirdCard-container">
        <div className="carousel-container">
          {getVisibleCards().map((card, index) => (
            <div className="Thirdicon-section" key={index}>
              <img src={card.imgSrc} alt={card.text} className="Thirdrounded-image" />
              <p className="cardText">{card.text}</p>
              <p className="description">{card.paragraph}</p>
            </div>
          ))}
        </div>
        {currentStartIndex > 0 && (
          <div className="carousel-control-prev carousel-arrow-container">
            <button className="carousel-arrow-three" type="button" onClick={prevSlide}>
              <span className="carousel-arrow-icon-three">&#9664;</span>
            </button>
          </div>
        )}
        {currentStartIndex + itemsPerSlide < ThirdcardData.length && (
          <div className="carousel-control-next carousel-control-next-third carousel-arrow-container">
            <button className="carousel-arrow-three" type="button" onClick={nextSlide}>
              <span className="carousel-arrow-icon-three">&#9654;</span>
            </button>
          </div>
        )}
        <hr className="section-divider" />
      </div>
    </div>
  );
}

export default ThirdCard;
