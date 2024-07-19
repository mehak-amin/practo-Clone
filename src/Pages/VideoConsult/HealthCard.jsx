import { useState } from 'react';
import './Specialities.css';
import { IoIosArrowDroprightCircle } from "react-icons/io";

function HealthCard() {
  const HealthcardData = [
    { text: (<><span>Cough & cold?</span></>), imgSrc: '/logo/cough-cold-v1.jpg', paragraph: '₹399.00' },
    { text: (<><span>Period problems?</span></>), imgSrc: '/logo/period-problems-v1.jpg', paragraph: '₹499.00' },
    { text: (<><span>Performance issues in bed?</span></>), imgSrc: '/logo/performance-issues-bed-v1.jpg', paragraph: '₹499.00' },
    { text: (<><span>Skin problems?</span></>), imgSrc: '/logo/skin-problems-v1.jpg', paragraph: '₹499.00' },
    { text: (<><span>Depression or anxiety?</span></>), imgSrc: '/logo/depression-anxiety-v1.jpg', paragraph: '₹499.00' },
    { text: (<><span>Want to lose weight?</span></>), imgSrc: '/logo/lose-weight-v1.jpg', paragraph: '₹350.00' },
    { text: (<><span>Stomach issues?</span></>), imgSrc: '/logo/stomach-issues-v1.jpg', paragraph: '₹399.00' },
    { text: (<><span>Vaginal infections?</span></>), imgSrc: '/logo/vaginal-infections-v1.jpg', paragraph: '₹499.00' },
    { text: (<><span>Sick kid?</span></>), imgSrc: '/logo/sick-kid-v1.jpg', paragraph: '₹499.00' },
  ];

  const [currentStartIndex, setCurrentStartIndex] = useState(0);

  const nextSlide = () => {
    if (currentStartIndex + 4 < HealthcardData.length) {
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
    for (let i = 0; i < 4; i++) {
      if (HealthcardData[currentStartIndex + i]) {
        visibleCards.push(HealthcardData[currentStartIndex + i]);
      }
    }
    return visibleCards;
  };

  return (
    <div>
      <div className="health-card-containernew">
        {currentStartIndex > 0 && (
          <div className="health-carousel-control-prev-Special health-carousel-arrow-container-Special">
            <button className="health-carousel-arrow-Special" type="button" onClick={prevSlide}>
              <span className="health-carousel-arrow-icon-Special">&#9664;</span>
            </button>
          </div>
        )}
        <div className="health-carousel-container-Special">
          {getVisibleCards().map((card, index) => (
            <div className="health-icon-section" key={index}>
              <img src={card.imgSrc} alt={card.text} className="health-rounded-image" />
              <p className="health-card-text">{card.text}</p>
              <p className="health-description-Product" dangerouslySetInnerHTML={{ __html: card.paragraph }}></p>
              <button className='health-btnsection'>CONSULT NOW</button>
            </div>
          ))}
        </div>
        {currentStartIndex + 4 < HealthcardData.length && (
          <div className="health-carousel-control-next-Special health-carousel-arrow-container-Special">
            <button className="health-carousel-arrow-Special" type="button" onClick={nextSlide}>
              <span className="health-carousel-arrow-icon-Special">&#9654;</span>
            </button>
          </div>
        )}
      </div>
   







    {/* OFFERS  PART*/}



    <div className='container-new-created'>
      <div className='Offers-text'>
        <h3 className='offer-head'> Offers</h3>

      </div>
      <div className="Offers-container">
        <div className="Offers-column Offers-left-column">
          {/* Content for the left column */}
          <div className="Offers-content">
            <div>
              <span className="badge">Offer</span>
              <h4 className="heading">Download the App & get <br/> ₹200 HealthCash</h4>
              <p className="cta">Download App <span className="icon-ic_next_cheveron"><IoIosArrowDroprightCircle /></span></p>
            </div>
            <img src="\logo\offer-app-v1.png"  height="90px" alt="practo offer card" className='image-class' />
          </div>
        </div>
        <div className="Offers-column Offers-right-column">
          {/* Content for the right column */}
          <div className="Offers-content">
            <div>
              <span className="badge">Offer</span>
              <h4 className="heading">Download the App & get <br/> ₹200 HealthCash</h4>
              <p className="cta">Download App <span className="icon-ic_next_cheveron"><IoIosArrowDroprightCircle /></span></p>
            </div>
            <img src="\logo\offer-specialist-v1.png"  height="90px" alt="practo offer card" className='image-class' />
          </div>
        </div>
      </div>
    </div>


    </div>
   
  );
}

export default HealthCard;