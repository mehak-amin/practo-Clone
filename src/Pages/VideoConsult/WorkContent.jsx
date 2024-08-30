import "@fortawesome/fontawesome-free/css/all.min.css";
import { PiCursorClickLight } from "react-icons/pi";
import { PiChatTextLight } from "react-icons/pi";
import { PiPrescription } from "react-icons/pi";
import { GoCheck } from "react-icons/go";
import "./OurDr.css";

export default function WorkContent() {
  return (
    <div>
      <div className="how-it-works-section">
        <div className="each-value-prop-one">
          <div className="each-value-prop-image">
            <span className="one-icon">
              <PiCursorClickLight />
            </span>
          </div>
          <div className="content">
            <p className="description">Select a specialty or symptom</p>
          </div>
        </div>
        <div className="each-value-prop-two">
          <div className="each-value-prop-image">
            <span className="two-icon">
              <PiChatTextLight />
            </span>
          </div>
          <div className="content">
            <p className="description">
              Audio/video call with a verified doctor
            </p>
          </div>
        </div>
        <div className="each-value-prop-three">
          <div className="each-value-prop-image three">
            <span className="three-icon">
              <PiPrescription />
            </span>
          </div>
          <div className="content">
            <p className="description">
              Get a digital prescription & a free follow-up
            </p>
          </div>
        </div>
      </div>
      <div className="divider-one" />
      <div className="divider-two" />

      {/* -------------------- BLACK COUNT --------------------- */}
      <div className="black">
        <div className="trust-metrics-section desktop-wrapper">
          <div className="each-metric">
            <p className="metric-count">2,00,000+</p>
            <p className="metric-name">Happy Users</p>
          </div>
          <div className="each-metric">
            <p className="metric-count">20,000+</p>
            <p className="metric-name">Verified Doctors</p>
          </div>
          <div className="each-metric">
            <p className="metric-count">25+</p>
            <p className="metric-name">Specialities</p>
          </div>
          <div className="each-metric">
            <p className="metric-count">
              4.5 / <sub>5</sub>
            </p>
            <p className="metric-name">App Rating</p>
          </div>
        </div>
      </div>

      {/* ----------------------BENIFITS OF ONLINE CONSULTATION---------------------- */}
      <div id="BenefitsSection">
        <div className="homepage-section-wrapper benifits-wrapper">
          <h2 className="homepage-benifits-section-heading">
            Benefits of Online Consultation
          </h2>
          <div data-testid="base-card" className="card card-paper">
            <div className="grid__row">
              <div className=" grid__col-md-4">
                <div className="u-spacer__15x">
                  <h3 className="u-spacer__7x-bottom u-font__s-subheading">
                    <GoCheck />
                    <i className="icon-ic_done_open_system u-v_align--middle u-font__s-jumbo u-ic__no-margin"></i>
                    Consult Top Doctors 24x7
                  </h3>
                  <p className="u-font__c-gray3">
                    Connect instantly with a 24x7 specialist or choose to video
                    visit a particular doctor.
                  </p>
                </div>
              </div>
              <div className=" grid__col-md-4">
                <div className="u-spacer__15x">
                  <h3 className="u-spacer__7x-bottom u-font__s-subheading">
                    <GoCheck />
                    <i className="icon-ic_done_open_system u-v_align--middle u-font__s-jumbo u-ic__no-margin"></i>
                    Convenient and Easy
                  </h3>
                  <p className="u-font__c-gray3">
                    Start an instant consultation within 2 minutes or do video
                    consultation at the scheduled time.
                  </p>
                </div>
              </div>
              <div className=" grid__col-md-4">
                <div className="u-spacer__15x">
                  <h3 className="u-spacer__7x-bottom u-font__s-subheading">
                    <GoCheck />
                    <i className="icon-ic_done_open_system u-v_align--middle u-font__s-jumbo u-ic__no-margin"></i>
                    100% Safe Consultations
                  </h3>
                  <p className="u-font__c-gray3">
                    Be assured that your online consultation will be fully
                    private and secured.
                  </p>
                </div>
              </div>
              <div className=" grid__col-md-4">
                <div className="u-spacer__15x">
                  <h3 className="u-spacer__7x-bottom u-font__s-subheading">
                    <GoCheck />
                    <i className="icon-ic_done_open_system u-v_align--middle u-font__s-jumbo u-ic__no-margin"></i>
                    Similar Clinic Experience
                  </h3>
                  <p className="u-font__c-gray3">
                    Experience clinic-like consultation through a video call
                    with the doctor. Video consultation is available only on the
                    Practo app.
                  </p>
                </div>
              </div>
              <div className=" grid__col-md-4">
                <div className="u-spacer__15x">
                  <h3 className="u-spacer__7x-bottom u-font__s-subheading">
                    <GoCheck />
                    <i className="icon-ic_done_open_system u-v_align--middle u-font__s-jumbo u-ic__no-margin"></i>
                    Free Follow-up
                  </h3>
                  <p className="u-font__c-gray3">
                    Get a valid digital prescription and a 7-day, free follow-up
                    for further clarifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/*---------------------------------- VIDE0 PART------------------------------------------- */}

      
      <div id="ConsultationExperienceVideos">
    <div className="homepage-section-wrapper-new  horizontal-scroll">
      <h2 className="homepage-section-heading-new ">Experience online doctor consultations</h2>
      <div className="video-cards">
        <div className="video-card">
          <iframe src="https://www.youtube.com/embed/QbUqZ3_9DKs" className="video-card__content"></iframe>
          <p className="video-card__title">#HelloDoctor Consult a doctor online from<br/> home</p>
        </div>
        <div className="video-card">
          <iframe src="https://www.youtube.com/embed/4cT6GE5g8aw" className="video-card__content"></iframe>
          <p className="video-card__title">#HelloDoctor Consult a doctor online from <br/>home</p>
        </div>
        <div className="video-card">
          <iframe src="https://www.youtube.com/embed/l-sZUQ-pQjs" className="video-card__content"></iframe>
          <p className="video-card__title">Video Consult with Top Doctors Online</p>
        </div>
        <div className="video-card">
          <iframe src="https://www.youtube.com/embed/gCONPv6a1mE" className="video-card__content"></iframe>
          <p className="video-card__title">Video Consult with Top Doctors Online</p>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}
