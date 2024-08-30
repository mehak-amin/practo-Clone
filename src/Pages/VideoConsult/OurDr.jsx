import { useState } from 'react';
import './OurDr.css';

function OurDr() {
  const SpecialcardData = [
    { userName: 'Dr. Murali Reddy', userIcon: '/logo/dr-murali-reddy-.jpg', date: 'Dermatologist', next: '7 Years experience ', secondNext:'42793 consults done' },
    { userName: 'Dr. Shubham Jhanwar', userIcon: '/logo/dr-shubham-jhanwar.png', date: 'Psychiatrist, Sexologist' , next: '4 Years experience ', secondNext:'11143 consults done'},
    { userName: 'Dr. Shivanu Mathon', userIcon: '/logo/dr-shivanu-.jpg', date: 'Dermatologist', next: '8 Years experience ', secondNext:'24629 consults done' },
    { userName: 'Dr. Shruti Kamat', userIcon: '/logo/dr-shruti-kamat-.jpg', date: 'Pediatric Dermatologist, Dermat...', next: '4 Years experience ', secondNext:'4313 consults done' },
    { userName: 'Dr Hitesh Viradiya', userIcon: '/logo/dr-hitesh-viradiya-610d46ab0cf9b.jpg', date: 'Dermatologist, Cosmetologist, H...', next: '8 Years experience ', secondNext:'43323 consults done' },
    { userName: 'Dr. Girraj sharma', userIcon: '/logo/dr-girraj-sharma-64ef6a2237d77.jpg', date: 'Dermatologist' , next: '4 Years experience ', secondNext:'550 consults done'},
    { userName: 'Dr. Kamal Kishore Verma', userIcon: '/logo/dr-kamal-kishore-verma-5d69f93f40699.jpg', date: 'Sexologist,Psychiatrist' , next: '16 Years experience ', secondNext:'90739consults done'},
    { userName: 'Dr. Vijaya Gupta', userIcon: '/logo/dr-vijaya-gupta-1475819879-57f739673cbe2.jpg', date: 'Gynecologist, Obstetrician', next: '21 Years experience ', secondNext:'51405 consults done' },
  ];

  const [currentStartIndex, setCurrentStartIndex] = useState(0);

  const nextSlide = () => {
    if (currentStartIndex + 4 < SpecialcardData.length) {
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
      if (SpecialcardData[currentStartIndex + i]) {
        visibleCards.push(SpecialcardData[currentStartIndex + i]);
      }
    }
    return visibleCards;
  };

  return (
    <div>
      <div className='dr-text'>

        <h3 className='dr-heading'> Our Doctors</h3>

         </div>

      <div className="dr-card-containernew">
        {currentStartIndex > 0 && (
          <div className="carousel-control-prev-Special carousel-arrow-container-Special">
            <button className="carousel-arrow-Special" type="button" onClick={prevSlide}>
              <span className="carousel-arrow-icon-Special">&#9664;</span>
            </button>
          </div>
        )}
        <div className="carousel-container-dr">
          {getVisibleCards().map((card, index) => (
            <div className="dr-icon-section" key={index}>
              <div className="dr-icon-column">
                <img src={card.userIcon} alt={card.userName} className="dr-rounded-image" />
              </div>
              <div className="dr-content-column">
                <p className='dr-card-text'>{card.userName}</p>
                <p className="dr-description-Product">{card.date}</p>
                {card.next && <p className="drone-description-Product">{card.next}</p>}
                {card.secondNext && <p className="drtwo-description-Product">{card.secondNext}</p>}
                {/* Add more fields as needed */}
              </div>
            </div>
          ))}
        </div>
        {currentStartIndex + 4 < SpecialcardData.length && (
          <div className="carousel-control-next-Special carousel-arrow-container-Special">
            <button className="carousel-arrow-Special" type="button" onClick={nextSlide}>
              <span className="carousel-arrow-icon-Special">&#9654;</span>
            </button>
          </div>
        )}
      </div>
{/* ------------------------------HOW IT WORKS TEXT--------------------- */}
<div className='works-text'>

<h3 className='works-heading'> How it works</h3>

 </div>
    </div>
  );
}

export default OurDr;
