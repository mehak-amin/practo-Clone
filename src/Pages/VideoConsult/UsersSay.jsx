import { useState } from 'react';
import './OurDr.css';

function UsersSay() {
  const UsersCard = [
    {
      userName: 'Abhy',
      userIcon: '/logo/testimonial-abhy-v1.png',
      date: '33 yr old IT professional',
      next: (
        <>
          I was really sick and <strong>couldn’t get out of bed.</strong> I talked to the doctor through Practo and he shared a <strong>prescription in 10 minutes.</strong> I even got the <strong>medicines delivered on the same day</strong> through Practo, just a WOW experience.
        </>
      ),
    },
    {
      userName: 'Preeti',
      userIcon: '/logo/testimonial-default-women-v1.png',
      date: '26 yr old IT professional',
      next: (
        <>
          I was <strong>in pain</strong> and it was really <strong>late at night.</strong> I wanted help but couldn’t go to see the doctor due to the lateness of the hour. Consulted online on Practo and <strong>doctor responded immediately.</strong>
        </>
      ),
    },
    {
      userName: 'Deepak',
      userIcon: '/logo/testimonial-deepak-v1.png',
      date: '29 yr old traveller',
      next: (
        <>
          I was travelling to a <strong>remote place</strong> for scuba diving and <strong>injured myself.</strong> Tough to find doctors around, so did an <strong>online consultation</strong> on Practo and hey presto, I have my <strong>medicines.</strong> Disruptive. Convenient.
        </>
      ),
    },
    {
      userName: 'Anamika Bajpai',
      userIcon: '/logo/testimonial-anamika-v1.png',
      date: 'Anonymous',
      next: 'Excellent experience consulting on Practo. I could solve my health issue without going to a clinic! Highly recommended!',
    },
    {
      userName: 'Maitreyi Purohit',
      userIcon: '/logo/testimonial-maitreyi-v1.png',
      date: 'Anonymous',
      next: 'I got answers to all my medical queries. I’ll definitely recommend online consultations on Practo to others.',
    },
    {
      userName: 'Mr. Bismoy Murasing',
      userIcon: '/logo/testimonial-bismoy-v1.png',
      date: 'Anonymous',
      next: 'The consultation on Practo was great and I’m very happy with the experience. Would certainly ask other people to consult online',
    },
  ];
  

  const [currentStartIndex, setCurrentStartIndex] = useState(0);

  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < 3; i++) {
      if (UsersCard[currentStartIndex + i]) {
        visibleCards.push(UsersCard[currentStartIndex + i]);
      }
    }
    return visibleCards;
  };

  const handleBulletClick = (index) => {
    const newStartIndex = index * 1; // Show 1 new icon and keep previous 2 visible
    setCurrentStartIndex(newStartIndex);
  };

  const totalBullets = Math.ceil(UsersCard.length / 1.5); // Total number of bullets
  const activeBulletIndex = Math.floor(currentStartIndex / 1); // Adjusting calculation to match the index multiplier

  return (
    <div>
      <h3 className='users-say-heading'>What our users say about their online consultation experience</h3>
      <div className="users-card-containernew">
        {currentStartIndex > 0 && (
          <div className="carousel-control-prev-Special carousel-arrow-container-Special">
            <button className="carousel-arrow-Special" type="button" onClick={() => handleBulletClick(Math.max(activeBulletIndex - 1, 0))}>
              <span className="carousel-arrow-icon-Special">&#9664;</span>
            </button>
          </div>
        )}
        <div className="carousel-container-users">
          {getVisibleCards().map((card, index) => (
            <div className="users-icon-section" key={index}>
              <div className="users-icon-column">
                <img src={card.userIcon} alt={card.userName} className="users-rounded-image" />
              </div>
              <div className="users-content-column">
                <p className='users-card-text'>{card.userName}</p>
                <p className="users-description-Product">{card.date}</p>
                {card.next && <p className="usersone-description-Product">{card.next}</p>}
              </div>
            </div>
          ))}
        </div>
        {currentStartIndex + 3 < UsersCard.length && (
          <div className="carousel-control-next-Special carousel-arrow-container-Special">
            <button className="carousel-arrow-Special" type="button" onClick={() => handleBulletClick(Math.min(activeBulletIndex + 1, totalBullets - 1))}>
              <span className="carousel-arrow-icon-Special">&#9654;</span>
            </button>
          </div>
        )}
      </div>
      {totalBullets > 1 && (
        <div className='bulltes'> 
          <ul className="custom-bullets">
            {Array.from({ length: totalBullets }, (_, index) => (
              <li
                key={index}
                className={index === activeBulletIndex ? 'custom-bullet active' : 'custom-bullet'}
                onClick={() => handleBulletClick(index)}
              ></li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

export default UsersSay;
