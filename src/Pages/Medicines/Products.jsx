import { useState } from 'react';
import './Products.css';

function Products() {
  const ProductData = [
    { text: (<><span>NAN PRO 2  REFILL </span> <br></br><span> 400gm   </span></>), imgSrc: '/logo/nan-pro-2-.jpeg', paragraph: '₹825.00' },
    { text: 'PEDIASURE VANILLA JAR 400GM', imgSrc: '/logo/pediasure-vanilla-jar-.jpeg', paragraph: '₹840.00' },
    { text: (<><span>ZINCOVIT TABLET</span> <br/><span>Covid_essentials 15`S</span></>), imgSrc: '/logo/zincovit-tablet-15-s.jpeg', paragraph: '₹109.95' },
    { text: 'NAN PRO 4 FOLLOW UP FORMULA REFILL 400GM', imgSrc: '/logo/nan-pro-4-follow-up.jpeg', paragraph: '₹825.00' },
    { text: 'CERELAC STAGE 1 WHEAT APPLE REFILL 300GM', imgSrc: '/logo/cerelac-wheat-.jpeg', paragraph: '₹275.00' },
    { text: 'ELECTRAL POWDER Covid_essentials 21.8GM', imgSrc: '/logo/electral-powder-21.jpeg', paragraph: '₹22.66' },
    { text: 'SUPRADYN DAILY TABLET  15`S', imgSrc: '/logo/supradyn-daily-tablet-15.jpeg', paragraph: '₹60.30' },
    { text: 'SHELCAL XT TABLET  15`S', imgSrc: '/logo/shelcal-xt-tablet-15-s_.jpeg', paragraph: '₹429.00' },
    { text: 'DEXOLAC 2 REFILL  400GM', imgSrc: '/logo/dexolac-2-refill-400gm_5ded7.jpeg', paragraph: '₹460.00' },
    { text: 'SHELCAL 500MG TABLET 15`S', imgSrc: '/logo/shelcal-500mg-tablet-15-s.jpeg', paragraph: '₹144.30' },
    { text: 'SHELCAL HD TABLET  15`S', imgSrc: '/logo/shelcal-hd-tablet-15-s_.jpeg', paragraph: '₹150.90' },
    { text: 'DETTOL ANTISEPTIC LIQUID 550ML', imgSrc: '/logo/dettol-antiseptic-liquid-550ml_.jpeg', paragraph: '₹235.46' },
  ];

  const [currentStartIndexProduct, setCurrentStartIndexProduct] = useState(0);
  const [clickedIndex, setClickedIndex] = useState(null);

  const nextSlide = () => {
    if (currentStartIndexProduct + 5 < ProductData.length) {
      setCurrentStartIndexProduct(currentStartIndexProduct + 1);
    }
  };

  const prevSlide = () => {
    if (currentStartIndexProduct > 0) {
      setCurrentStartIndexProduct(currentStartIndexProduct - 1);
    }
  };

  const handleClick = (index) => {
    setClickedIndex(index);
  };

  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < 5; i++) {
      if (ProductData[currentStartIndexProduct + i]) {
        visibleCards.push(ProductData[currentStartIndexProduct + i]);
      }
    }
    return visibleCards;
  };

  return (
    <div className="Product-container">
      <div className='Product-heading'>
        <p className='Product-text'>Popular Products</p>
      </div>
      <div className="carousel-container-Product">
        {getVisibleCards().map((card, index) => (
          <div
            className={`Thirdicon-section-Product ${clickedIndex === index ? 'clicked' : ''}`}
            key={index}
            onClick={() => handleClick(index)}
          >
            <img src={card.imgSrc} alt={card.text} className="Thirdrounded-image-Product" />
            <hr className="section-divider" />
            <div className='product-text-container'>
              <p className="cardText-Product">{card.text}</p>
              <p className="description-Product" dangerouslySetInnerHTML={{ __html: card.paragraph }}></p>
            </div>
          </div>
        ))}
      </div>
      {currentStartIndexProduct > 0 && (
        <div className="carousel-control-prev-Product carousel-arrow-container-Product">
          <button className="carousel-arrow-Product" type="button" onClick={prevSlide}>
            <span className="carousel-arrow-icon-Product">&#9664;</span>
          </button>
        </div>
      )}
      {currentStartIndexProduct + 5 < ProductData.length && (
        <div className="carousel-control-next-Product carousel-arrow-container-Product">
          <button className="carousel-arrow-Product" type="button" onClick={nextSlide}>
            <span className="carousel-arrow-icon-Product">&#9654;</span>
          </button>
        </div>
      )}
      <hr className="section-divider-snd" />
    </div>
  );
}

export default Products;
