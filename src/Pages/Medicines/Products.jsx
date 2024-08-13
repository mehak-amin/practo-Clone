import { useState, useEffect } from 'react';
import './Products.css';

function Products() {
  const ProductData = [
    // ... (your existing product data)
    { text: (<><span>NAN PRO 2  REFILL </span> <br></br><span> 400gm   </span></>), imgSrc: '/logo/nan-pro-2-.jpeg', paragraph: '₹825.00' },
    { text: 'PEDIASURE VANILLA JAR 400GM', imgSrc: '/logo/pediasure-vanilla-jar-.jpeg', paragraph: '₹840.00' },
    { text: 'ZINCOVIT TABLET  Covid_essentials 15`S', imgSrc: '/logo/zincovit-tablet-15-s.jpeg', paragraph: '₹109.95' },
    { text: 'NAN PRO 4 FOLLOW UP FORMULA REFILL 400GM', imgSrc: '/logo/nan-pro-4-follow-up.jpeg', paragraph: '₹825.00' },
    { text: 'CERELAC STAGE 1 WHEAT APPLE REFILL 300GM', imgSrc: '/logo/cerelac-wheat-.jpeg', paragraph: '₹275.00' },
    { text: 'ELECTRAL POWDER Covid_essentials 21.8GM', imgSrc: '/logo/electral-powder-21.jpeg', paragraph: '₹22.66' },
    { text: 'SUPRADYN DAILY TABLET  15`S', imgSrc: '/logo/supradyn-daily-tablet-15.jpeg', paragraph: '₹60.30' },
    { text: 'SHELCAL XT TABLET  15`S', imgSrc: '/logo/shelcal-xt-tablet-15-s_.jpeg', paragraph: '₹429.00' },
    { text: 'DEXOLAC 2 REFILL  400GM', imgSrc: '/logo/dexolac-2-refill-400gm_5ded7.jpeg', paragraph: '₹460.00' },
    { text: 'SHELCAL 500MG TABLET 15`S', imgSrc: '/logo/shelcal-500mg-tablet-15-s.jpeg', paragraph: '₹144.30' },
    { text: 'SHELCAL HD TABLET  15`S', imgSrc: '/logo/shelcal-hd-tablet-15-s_.jpeg', paragraph: '₹150.90' },
    { text: 'DETTOL ANTISEPTIC LIQUID 550ML', imgSrc: '/logo/dettol-antiseptic-liquid-550ml_.jpeg', paragraph: '₹235.46' },
    { text: 'AHAGLOW S FACE WASH F  100ML', imgSrc: '/logo/ahaglow-s-face-wash-f-.jpeg', paragraph: '₹743.00' },
    { text: 'SIMILAC ADVANCE STAGE 1  400GM', imgSrc: '/logo/similac-advance-stage-1-.jpeg', paragraph: '₹910.00' },
    { text: 'SIMILAC ADVANCE 2 POWDER 400GM', imgSrc: '/logo/similac-advance-2-powder-400gm_02.jpeg', paragraph: '₹910.00' },
    { text: 'CERELAC STAGE 4 MULTIGRAIN DAL VEG REFILL  300GM', imgSrc: '/logo/cerelac-multigrain-dal-veg-stage-4-refill.jpeg', paragraph: '₹322.00' },
    { text: 'TEDIBAR SOAP  75GM', imgSrc: '/logo/tedibar-soap-75gm_dfb62b.jpeg', paragraph: '₹199.00' },
    { text: 'VIZYLAC Capsule 15`S', imgSrc: '/logo/vizylac-capsule-15-s_78ec23f9-6a.jpeg', paragraph: '₹83.70' },
    { text: 'ACNE OC MOISTURIZER 75GM', imgSrc: '/logo/acne-oc-moisturizer-75gm_36.jpeg', paragraph: '₹576.00' },
    { text: 'NEUROBION FORTE TABLET  30`S', imgSrc: '/logo/neurobion-forte-tablet-immunity-bo.jpeg', paragraph: '₹41.70' },
    { text: 'DETTOL ANTISEPTIC LIQUID 250ML', imgSrc: '/logo/dettol-antiseptic-liquid-250ml_.jpeg', paragraph: '₹140.54' },
    { text: 'ACNEMOIST CREAM  60GM', imgSrc: '/logo/acnemoist-cream-60gm_dbf1d.jpeg', paragraph: '₹409.00' },
    { text: 'TONOFERON DROP 15ML', imgSrc: '/logo/tonoferon-drop-15ml_ca1fe6.jpeg', paragraph: '₹97.00' },
    { text: 'MEGANEURON OD PLUS CAPSULE  10`S', imgSrc: '/logo/meganeuron-od-plus-capsule-10-s.jpeg', paragraph: '₹160.00' },
    { text: 'DEXOLAC 1 REFILL 400GM', imgSrc: '/logo/dexolac-1-refill-400gm_ff2.jpeg', paragraph: '₹460.00' },
    { text: 'ACNE UV SPF50+ GEL 50GM', imgSrc: '/logo/acne-uv-spf50-gel-50gm_4babcb1a-b0f6-4aad-aaab-ca4b66924ebe.jpeg', paragraph: '₹915.00' },
    { text: 'VOLINI SPRAY 60ML', imgSrc: '/logo/volini-spray-60ml_a21a3261-fa5a-44c1-95f4-07fb679a522c.jpeg', paragraph: '₹220.00' },
  ];

  const [currentStartIndexProduct, setCurrentStartIndexProduct] = useState(0);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(5);

  const updateVisibleCount = () => {
    if (window.innerWidth <= 500) {
      setVisibleCount(2);
      setCurrentStartIndexProduct(0);
    } else {
      setVisibleCount(5);
      setCurrentStartIndexProduct(0);
    }
  };

  useEffect(() => {
    updateVisibleCount(); // Set initial visible count based on window size
    window.addEventListener('resize', updateVisibleCount); // Update on resize

    return () => {
      window.removeEventListener('resize', updateVisibleCount); // Clean up the event listener
    };
  }, []);

  const nextSlide = () => {
    if (currentStartIndexProduct + visibleCount < ProductData.length) {
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
    for (let i = 0; i < visibleCount; i++) {
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
      {currentStartIndexProduct + visibleCount < ProductData.length &&  (
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
