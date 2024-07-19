
import '@fortawesome/fontawesome-free/css/all.min.css';
import { PiCursorClickLight } from 'react-icons/pi';
import { PiChatTextLight } from 'react-icons/pi';
import { PiPrescription } from 'react-icons/pi';
import './OurDr.css';

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
            <p className="description">Audio/video call with a verified doctor</p>
          </div>
        </div>
        <div className="each-value-prop-three">
          <div className="each-value-prop-image three">
            <span className="three-icon">
              <PiPrescription />
            </span>
          </div>
          <div className="content">
            <p className="description">Get a digital prescription & a free follow-up</p>
          </div>
        </div>
      </div>
      <div className="divider-one" />
      <div className="divider-two" />
    </div>
  );
}
