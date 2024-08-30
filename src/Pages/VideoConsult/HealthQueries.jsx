import  { useState } from "react";

import { FaCheck } from "react-icons/fa";


import "./OurDr.css";

export default function HealthQueries() {
  const [visibleQueries, setVisibleQueries] = useState(3);
  const [showAll, setShowAll] = useState(false);

  const healthQueriesData =
    [
      {
        title: "OCD related issues",
        views: "34 Views",
        description:
          "Since the last 4-5 months, I have been feeling that I have some issues. I always...",
      },
      {
        title: "NT value 2.1mm",
        views: "22 Views",
        description:
          "I took an NT scan in my 13th week and the nasal bone is absent/hypoplastic CRL: ...",
      },
      {
        title: "Black spot on neck",
        views: "23 Views",
        description:
          "I dont know why I am getting these black spots on my neck. First it was one the...",
      },
     
      {
        title: "High blood pressure concerns",
        views: "45 Views",
        description:
          "I have been experiencing high blood pressure for the last few months...",
      },
      {
        title: "Dietary supplement inquiry",
        views: "30 Views",
        description:
          "Are there any dietary supplements that can help with muscle gain...",
      },
      {
        title: "Persistent headache issues",
        views: "28 Views",
        description:
          "I've had a headache for over a week now, and it's not going away...",
      },
    
  ];

  const handleLoadMore = () => {
    setVisibleQueries(visibleQueries + 3);
    setShowAll(true);
  };

  const handleShowLess = () => {
    setVisibleQueries(3);
    setShowAll(false);
  };

  return (
    <div className="health-queries-div">
      <div id="HealthQueriesSection">
        <div className="homepage-health">
          <h2 className="homepage-section-heading-health">Health Queries</h2>
          <div className="health-queries">
            {healthQueriesData.slice(0, visibleQueries).map((query, index) => (
              <div className="health-query" key={index}>
                <div className="health-query__header">
                  <b>{query.title}</b>
                  <div>{query.views}</div>
                </div>
                <p className="health-query__desc">
                  <span>{query.description}</span>
                  <a className="link health-query__link">Read more</a>
                </p>
                <hr className="health-divider" />
              </div>
            ))}
          </div>
         
          <div className="health-queries__footer">
            <p className="small-text">
              <small>Last updated: 27 Aug 2024 | 2:40 PM</small>
            </p>
            {showAll ? (
              <span className="health-queries__link" onClick={handleShowLess}>
                View less
              </span>
            ) : (
              visibleQueries < healthQueriesData.length && (
                <span className="health-queries__link" onClick={handleLoadMore}>
                  View more
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* -------------------------------------------STILL DELAYING ----------------------------------------*/}
      <div className="health-black health-concern-wrapper">
        <div className="health-concern-section">
          <h2 className="health-section-heading heading">Still delaying your health concerns?</h2>
          <p className="health-section-paragraph description">Connect with Indias top doctors online</p>
        </div>
        <div className="health-concern-wrapper__cta">
          <a className="link primary-button cta" href="/consult/direct/new_consultation">Consult Now</a>
        </div>
      </div>

      {/* ------------------------------------------------DOWNLOAD PART------------------------------------ */}
      <div className="doctor-container sixthtext-center">
        <div className="row align-items-start download-new-column">
          <div className="col image new-class-image">
            <img src="\logo\app-download-banner-web.png" className="doctor-custom-img" alt="..." />
          </div>
          <div className="col text">
            <div className='doctorText'>
              <h1 className='doctor-titleText'>Download the Practo app</h1>
              <p className='doctor-paragraph'>Get ₹200 HealthCash</p>

              <div>
              <ul className="no-bullets">
              <li>
  <FaCheck style={{ height: '15px', color: '#199fd9', fontSize: '21px', fontWeight: '700' }} />
  <div className="li-text">
        Video consult with Doctors
        </div>
</li>

        <li>
         
        <FaCheck style={{ height: '15px', color: '#199fd9', fontSize: '21px', fontWeight: '700' }} />
        <div className="li-text">
        Video consult with Doctors
        </div>
         
        </li>
        <li>
        <FaCheck style={{ height: '15px', color: '#199fd9', fontSize: '21px', fontWeight: '700' }} />
        <div className="li-text">
        Video consult with Doctors
        </div>
        </li>
        <li>
        <FaCheck style={{ height: '15px', color: '#199fd9', fontSize: '21px', fontWeight: '700' }} />
        <div className="li-text">
        Video consult with Doctors
        </div>
        </li>
      </ul>
              </div>

              <p className='doctor-link-text'>Get the link to download the app</p>

              <div className="doctor-phone-input-container">
                <span className="country-code">+91</span>
                <div className="vertical-line"></div>
                <input type="tel" className="doctor-phone-input" placeholder="Enter phone number" />
                <button className='doctor-phoneButton'><span>Send app link</span></button>
              </div>
              <div className='downloads'>
                <div className='downloadButton-one'>
                  <img src='\logo\play-store.webp' className='play-store' />
                  <img src='\logo\app-store.webp' className='app-store' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -----------------------------------------only text----------------------------- */}
      <div id="SeoSection">
  <div className="seo-section-wrapper desktop-wrapper seo-section">
    <p>
      Looking for a trusted & secured online dr consultation in India? 
      Consult a doctor online on Practo for any health concern. Our pool of over 20,000 trusted doctors
      across 25+ specialties will ensure all your health queries are answered. You can get online dr advice
      from a Psychiatrist, Dermatologist, Gynecologist, Sexologist, Pediatrician, Cardiologist, Neurologist,
      Gastroenterologist, Urologist, Endocrinologist, Dentist, Psychologist, and many more. Video consultation
      with a doctor is available only on Practos online doctor app.
      Practo serves customers in the following cities: Bangalore, Mumbai, Delhi, Kolkata, Hyderabad, Chennai,
       Pune, Ahmedabad, Gurgaon, and Ghaziabad.
    </p>
    <p>
      Recently Answered Questions: 
      <a>OCD related issues</a><span> | </span>
      <a>Periods problem</a><span> | </span>
      <a>Armpit rash</a><span> | </span>
      <a>Pregnancy</a><span> | </span>
      <a>Fir selflove</a><span> | </span>
      <a>Wisdom teeth my right side face pain</a><span> | </span>
      <a>Left hand and shoulder and chest pain</a><span> | </span>
      <a>ECG REPORT ANALYSIS</a>
    </p>
    <p>
      Topics: 
      <a>Looking for weight gain tips?</a><span> | </span>
      <a>Worried about chest pain?</a><span> | </span>
      <a >Want to get rid of dark circles?</a><span> | </span>
      <a >How to use prega news kit?</a><span> | </span>
      <a>Need some weight loss advice?</a><span> | </span>
      <a>Work, family or relationship stress?</a><span> | </span>
      <a>Looking to improve digestion?</a><span> | </span>
      <a >Painful kidney stones?</a><span> | </span>
      <a>Need some sexual advice?</a><span> | </span>
      <a>Want to learn how to last longer?</a><span> | </span>
      <a>Seek help for lower back pain</a><span> | </span>
      <a >Need some advice for irregular periods?</a><span> | </span>
      <a>Ask how you can relieve throat pain</a><span> | </span>
      <a>Need help with frequent urination?</a><span> | </span>
      <a>Have trouble breathing?</a><span> | </span>
      <a>Need some dental advice?</a><span> | </span>
      <a>Want to get rid of acne scars?</a><span> | </span>
      <a>Stomach pain bothering you?</a><span> | </span>
      <a>Doubts about periods?</a>
    </p>
    <p>
      Specialities: 
      <a >Ask A Psychiatrist</a><span> | </span>
      <a>Ask A Dermatologist</a><span> | </span>
      <a>Ask A Sexologist</a><span> | </span>
      <a>Ask A Gynecologist</a><span> | </span>
      <a >Ask A General Physician Doctor</a><span> | </span>
      <a>Ask A Pediatrician Doctor</a><span> | </span>
      <a>Ask An Ear Nose Throat Doctor</a><span> | </span>
      <a >Ask A Kidney Urine Doctor</a><span> | </span>
      <a>Ask An Orthopedic Doctor</a><span> | </span>
      <a>Ask A Neurologist Doctor</a>
    </p>
  </div>
</div>

    </div>
  );
}
