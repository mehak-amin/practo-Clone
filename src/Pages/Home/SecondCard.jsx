import React from 'react';
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

  return (
    <div className="card-container" >
      {cardData.map((card, index) => (
        <div className="icon-section" key={index}>
          <img src={card.imgSrc} alt={card.text} className="rounded-image" />
          <p className='card-text'>{card.text}</p>
          <button className='btnsection'>CONSULT NOW</button>
        </div>
      ))}
    </div>
  );
}

export default SecondCard;