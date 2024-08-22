
import './DownloadPracto.css'; 

function DownloadPracto() {
  return (
    <div className="medicinecontainer sixthtext-center">
      <div className="row align-items-start download-new-column">
        <div className="col image new-class-image">
          <img src="\logo\app-banner@2x.jpg" className="medicine-custom-img" alt="..." />
        </div>
        <div className="col text">
          <div className='medicineText'>
            <h1 className='med-titleText'>Download the Practo app</h1>
            <p className='medicine-paragraph'> Your home for health is one tap away</p>
            <p className=' download-paragraph'>
            Book appointments, Order health products, Consult with a doctor online,
            </p>
            <p className='secondParagraph-text'>Book health chekups, store health records & read health tips. </p>
            <p className='medicine-link-text'>Send the link to download the app</p>
            <div className="medicine-phone-input-container">
              <span className="country-code">+91</span>
              <div className="vertical-line"></div>
              <input type="tel" className="medicine-phone-input" placeholder="Enter phone number" />
              <button className='medicine-phoneButton'><span>Send app link</span></button>
            </div>
            <div className='downloads'>
              <div className='downloadButton-one'>
                <img src='\logo\play-store.webp' className='play-store'/>
                <img src='\logo\app-store.webp' className='app-store'/>
               
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default  DownloadPracto;
