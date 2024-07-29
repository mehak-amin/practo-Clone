
import './fourthPart.css';

function FourthPart() {
  const fourthcardData = [
    { text: 'Coronavirus', imgSrc: '/logo/corona.jpeg', paragraph1: '12 Coronavirus Myths and Facts That You Should Be Aware Of', paragraph2: 'Dr. Diana Borgio' },
    { text: 'Vitamins and Supplements', imgSrc: '/logo/vitamins.jpeg', paragraph1: 'Eating Right to Build Immunity Against Cold and Viral Infections', paragraph2: 'Dr. Diana Borgio' },
  ];

  return (
    <div className="fourthCard-container">
  <div className="fourthheader-content">
    <div className="fourthtext-section">
      <h3 className='fourthtext-colr'>Read top articles<br />from health experts</h3>
      <p className='fourthpara-colr'>Health articles that keep you informed<br />about good health practices and achieve your goals</p>
    </div>
    <div className="fourthbutton-section">
      <button type="fourthbutton" className="btn">See all articles</button>
    </div>
  </div>
  {fourthcardData.map((card, index) => (
    <div className="fourthicon-section" key={index}>
      <img src={card.imgSrc} alt={card.text} className="fourthrounded-image" />
      <p className='fourthcardText'>{card.text}</p>
      <p className="fourthdescription">{card.paragraph1}</p>
      <p className="fourthdescriptionnn">{card.paragraph2}</p>
    </div>
  ))}
  <hr className="section-divider" />
</div>

  );
}

export default FourthPart;
