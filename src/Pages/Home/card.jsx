
import './App.css';

function Card() {
  return (
   <div>
     <div className="app-container">
      <div className="column one">
        <img src='/logo/mapl.jpeg' alt="Logo" className="logo-img" />
        <p className='maptext'>New Delhi</p>
      </div>
      <div className="column two">
        <img src='/logo/searchimg.png' alt="Logo" className="search-img" />
        <p className='searchtext'>Search doctors, clinics, hospitals etc</p>
      </div>
    </div>

    {/* consult card */}

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
      <div className="card custom-card card-third">
        <div className="img-wrapper">
          <img src="\logo\dweb_surgeries.png" className="card-img-top" alt="Surgeries" />
        </div>
        <div className="card-body ">
          <h4 className="body-text">Surgeries</h4>
          <p className="card-text">Safe and trusted surgery centers</p>
        </div>
      </div>
    </div>

    {/* CONSULT TOP DOCTORS TEXT */}

    <div className="header-container">
    <div className="header-content">
      <div className="text-section">
        <h3 className='text-colr-a'>Consult top doctors online for any health concern</h3>
        <p className='para-colr-a'>Private online consultations with verified doctors in all specialists</p>
      </div>
      <div className="button-section">
        <button type="button" className="btn">View all specialists</button>
      </div>
    </div>
  </div>

   </div>
  );
}

export default Card;
