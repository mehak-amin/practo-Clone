import './Footer.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

function Footer() {
  const [openSections, setOpenSections] = useState({});
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 820);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
    console.log("Toggled section:", section, "Open:", !openSections[section]); // Debugging
  };

  return (
    <div className='footerSection'>
      <div className="container">
        <footer className="py-5">
          <div className="row">
            {/* First Column */}
            <div className="col-6 col-md-2 mb-3">
              <h6 
                onClick={isSmallScreen ? () => toggleSection('Practo') : undefined} 
                className='d-flex justify-content-between align-items-center'
              >
                Practo 
                {isSmallScreen && <span className='plus'>{openSections['Practo'] ? '-' : '+'}</span>}
              </h6>
              {(!isSmallScreen || openSections['Practo']) && (
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Blog</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Careers</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Press</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contact Us</a></li>
                </ul>
              )}
            </div>

            {/* Second Column */}
            <div className="col-6 col-md-2 mb-3 second-column">
              <h6 
                onClick={isSmallScreen ? () => toggleSection('For patients') : undefined} 
                className='d-flex justify-content-between align-items-center'
              >
                For patients 
                {isSmallScreen && <span className='plus'>{openSections['For patients'] ? '-' : '+'}</span>}
              </h6>
              {(!isSmallScreen || openSections['For patients']) && (
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Search for doctors</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Search for clinics</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Search for hospitals</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Practo Plus</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Covid Hospital listing</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Practo Care Clinics</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Read health articles</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Read about medicines</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Practo drive</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Health app</a></li>
                </ul>
              )}
            </div>

            {/* Third Column */}
            <div className="col-6 col-md-2 mb-3">
              <h6 
                onClick={isSmallScreen ? () => toggleSection('For doctors') : undefined} 
                className='d-flex justify-content-between align-items-center'
              >
                For doctors 
                {isSmallScreen && <span className='plus'>{openSections['For doctors'] ? '-' : '+'}</span>}
              </h6>
              {(!isSmallScreen || openSections['For doctors']) && (
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Practo Profile</a></li>
                  <h6 className='newSection'>For clinics</h6>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Ray by Practo</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Practo Reach</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Ray Tab</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Practo Pro</a></li>
                </ul>
              )}
            </div>

            {/* Fourth Column */}
            <div className="col-6 col-md-2 mb-3">
              <h6 
                onClick={isSmallScreen ? () => toggleSection('For Hospitals') : undefined} 
                className='d-flex justify-content-between align-items-center'
              >
                For Hospitals 
                {isSmallScreen && <span className='plus'>{openSections['For Hospitals'] ? '-' : '+'}</span>}
              </h6>
              {(!isSmallScreen || openSections['For Hospitals']) && (
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Insta by Practo</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Qikwell by Practos</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Practo Profile</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Practo Reach</a></li>
                  <h6 className='newSection'>For corporates</h6>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Wellness Plans</a></li>
                </ul>
              )}
            </div>

            {/* Fifth Column */}
            <div className="col-6 col-md-2 mb-3">
              <h6 
                onClick={isSmallScreen ? () => toggleSection('More') : undefined} 
                className='d-flex justify-content-between align-items-center'
              >
                More 
                {isSmallScreen && <span className='plus'>{openSections['More'] ? '-' : '+'}</span>}
              </h6>
              {(!isSmallScreen || openSections['More']) && (
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Help</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Developers</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Privacy Policy</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Terms & Conditions</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">PCS T&C</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Healthcare Directory</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Insurance</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Medicines</a></li>
                </ul>
              )}
            </div>
            {/* Sixth Column - Social */}
<div className="col-6 col-md-2 mb-3">
  <h6 
    onClick={isSmallScreen ? () => toggleSection('Social') : undefined} 
    className='d-flex justify-content-between align-items-center'
  >
    Social 
    {isSmallScreen && <span className='plus'>{openSections['Social'] ? '-' : '+'}</span>}
  </h6>
  {(!isSmallScreen || openSections['Social']) && (
    <ul className="nav flex-column">
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Facebook</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Twitter</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Linkedin</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Youtube</a></li>
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Github</a></li>
    </ul>
  )}
</div>

          </div>

          <div className="d-flex justify-content-center py-4">
            <img className='img-fluid' src='\logo\white_practo_logo.svg' alt='Logo' />
          </div>

          <div className="d-flex flex-sm-row justify-content-between py-4 my-4">
            <p className='paracolour'> Copyright © 2017, Practo. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
