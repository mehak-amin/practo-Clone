import React from 'react';
import './Footer.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <div className='footerSection'>
      <div className="container">
        <footer className="py-5">
          <div className="row">
            {/* First Column */}
            <div className="col-6 col-md-2 mb-3">
              <h6>Practo</h6>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Blog</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Careers</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Press</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contact Us</a></li>
              </ul>
            </div>

            {/* Second Column */}
            <div className="col-6 col-md-2 mb-3">
              <h6>For patients</h6>
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
            </div>

            {/* Third Column */}
            <div className="col-6 col-md-2 mb-3">
              <h6>For doctors</h6>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Practo Profile</a></li>
                <h6 className='newSection'>For clinics</h6>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Ray by Practo</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Practo Reach</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Ray Tab</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Practo Pro</a></li>
              </ul>
            </div>

            {/* Fourth Column */}
            <div className="col-6 col-md-2 mb-3">
            <h6>For Hospitals</h6>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Insta by Practo</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Qikwell by Practos</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Practo Profile</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Practo Reach</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Practo Reach</a></li>
                <h6 className='newSection'>For corporates</h6>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Wellness Plans</a></li>
              </ul>
            </div>

            {/* Fifth Column */}
            <div className="col-6 col-md-2 mb-3">
              <h6>More</h6>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Help</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Developers</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Privacy Policy</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Terms & Conditions</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">PCS T&C</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Healthcare Directory</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Practo Health Wik</a></li>
              </ul>
            </div>

            {/* Sixth Column */}
            <div className="col-6 col-md-2 mb-3">
              <h6>Social</h6>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Facebook</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Twitter</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Linkedin</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Youtube</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Github</a></li>
              </ul>
            </div>
          </div>
          <div className='logoImage'>
          <img src='\logo\white_practo_logo.svg' alt="Logo" />
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4">
              <p className='paracolour'> Copyright © 2017,Practo. All rights reserved.</p>
                  
          </div>

        </footer>
      </div>
    </div>
  );
}

export default Footer;
