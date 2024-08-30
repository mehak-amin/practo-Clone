import './FirstFile.css';
import { FaFilePrescription } from 'react-icons/fa';
import { MdOutlineComment } from 'react-icons/md';
import { LiaCertificateSolid } from 'react-icons/lia';

export default function FirstFile() {
  return (
    <div id="FirstFold">
      <div className="pink">
        <section className="first-fold desktop-one-wrapper">
          <div className="content">
            <div className="heading">
              <h1 className="fw-bold mt-3">Skip the travel!</h1>
              <h1 className="fw-bold">Take Online Doctor Consultation</h1>
            </div>
            <p className="fs-5">
              Private consultation + Audio call · Starts at just ₹199
            </p>
            <div className="d-flex">
              <span>
                <img
                  src="\logo\doc1.jpeg"
                  className="th-img rounded-circle"
                  alt="doc-1"
                />
              </span>
              <span>
                <img
                  src="\logo\doc2.jpeg"
                  className="th-img rounded-circle"
                  alt="doc-2"
                />
              </span>
              <span>
                <img
                  src="\logo\doc3.jpeg"
                  className="th-img rounded-circle"
                  alt="doc-3"
                />
              </span>
              <span className="fs-6 ms-3" id="docCount">
                +187 Doctors are online
              </span>
              <span className="spinner-grow text-success" id="spinner" role="status">
                <span className="visually-hidden">Loading...</span>
              </span>
            </div>
            <div>
              <a href="/consult/direct/new_consultation">
                <button type="submit" className="bttn">
                  Consult Now
                </button>
              </a>
            </div>
            <div className="additional-icons mt-5 ">
              <span>
                <LiaCertificateSolid className="me-2" />
                Verified Doctors
              </span>
              <span>
                <FaFilePrescription className="me-2 ms-3" />
                Digital Prescription
              </span>
              <span>
                <MdOutlineComment className="me-2 ms-3" />
                Free Followup
              </span>
            </div>
          </div>
          
          <div className="col-5 mt-5">
            <img
              src="\logo\homepage-hero-image-web-v1.png"
              className="imgBanner d-block w-100"
              alt="heroimg"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
