import './Introducing.css';

export default function Introducing() {
  return (
    <div className='introducing-container-new'>
      <div className="Introducing-container">
        <div className="Introducing-column left-column">
          {/* Content for the left column */}
          <p className='left-text'>INTRODUCING CONSULTATION DESK</p>
          <h3 className='second-left-text'>Don’t self medicate. Talk to an expert. Consult a doctor in less than 2 minutes.</h3>
          <img src='/logo/mar-card-1.webp' className='oneImage' alt="Consultation Desk" />
        </div>
        <div className="Introducing-column right-column">
          {/* Content for the right column */}
          <p className='left-text left-text-new'>INTRODUCING FAST DELIVERY</p>
          <h3 className='second-left-text second-left-text-new'>Tired of waiting in a queue? Too weak to go down and buy medicines?</h3>
          <img src='/logo/mar-card-2.5a0b85e1.png' className='oneImage second-oneImage' alt="Fast Delivery" />
        </div>
      </div>
      <div className='AnotherImage-Container'>
        <img src='/logo/full-width-4 (1).webp' className='Another-image' alt="Another Image" />
      </div>
    </div>
  );
}
