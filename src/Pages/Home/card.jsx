
import './App.css';

function Card() {
  return (
    <div className="card-container-ist-page">
      <div className="card custom-card">
        <div className="img-wrapper">
          <img src="\logo\dweb_instant_video_consulation.png" className="card-img-top" alt="Instant Video Consultation" />
        </div>
        <div className="card-body">
          <h4 className="body-text">Instant video consultation</h4>
          <p className="card-text">Connect within 60 sec</p>
        </div>
      </div>
      <div className="card custom-card">
        <div className="img-wrapper">
          <img src="\logo\dweb_find_doctors.webp" className="card-img-top" alt="Find Doctors Near You" />
        </div>
        <div className="card-body">
          <h4 className="body-text">Find Doctors near you</h4>
          <p className="card-text">Confirmed appointments</p>
        </div>
      </div>
      <div className="card custom-card">
        <div className="img-wrapper">
          <img src="\logo\dweb_surgeries.png" className="card-img-top" alt="Surgeries" />
        </div>
        <div className="card-body">
          <h4 className="body-text">Surgeries</h4>
          <p className="card-text">Safe and trusted surgery centers</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
