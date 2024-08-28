import { useState } from 'react';
import './OurDr.css';

const Faq = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpansion = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is online doctor consultation?',
      answer: 'Online doctor consultation or online medical consultation is a method to connect patients and doctors virtually. It is a convenient and easy way to get online doctor advice using doctor apps or telemedicine apps or platforms, and the internet.'
    },
    {
      question: 'How do I start online consultation with doctors on Practo?',
      answer: 'Starting an online doctor consultation is very simple on Practo. Follow these 4 simple steps:<br/>• Choose your health concern<br/>• Connect with a doctor within 2 minutes<br/>• Ask your queries to the doctor via audio or video call<br/>• Get a valid online doctor prescription and a 3-day free online doctor consultation'
    },
    {
      question: 'Are your online doctors qualified?',
      answer: 'We follow a strict verification process for every doctor providing online medical services on Practo. Our team manually verifies necessary documents, registrations, and certifications for every doctor.'
    },
    {
      question: 'Is online doctor consultation safe and secured on Practo?',
      answer: 'The privacy of our patients is critical to us, and thus, we are compliant with all regulations to ensure data protection and confidentiality.'
    },
    {
      question: 'What happens if I don’t get a response from a doctor?',
      answer: 'In the unlikely event that an online doctor does not respond, you will receive a full refund if the issue is not resolved within the stipulated time.'
    },
    {
      question: 'Can I do a free online doctor consultation on Practo?',
      answer: 'Avail a free online consultation with top doctors in India during specific promotional periods or through special offers provided by Practo.'
    }
  ];

  return (
    <div id="FaqSection">
      <div className="homepage-section-wrapper desktop-wrapper faq-section" data-testid="faq-section">
        <h2 className="homepage-section-heading faq-section-heading">FAQs</h2>
        <div className="ac-container">
          <div className="grid__row">
            {faqData.map((faq, index) => (
              <section className="grid__col-sm-12 grid__col-md-6" key={index}>
                <div data-testid={`faq_${index}`} className="u-spacer__5x each-accordion">
                  <h3 className="accordion-text">{faq.question}</h3>
                  <p className="accordion-content u-font__c-gray3">
                    <span
                      style={{
                        display: expanded === index ? 'inline' : '-webkit-box',
                        WebkitLineClamp: expanded === index ? 'none' : 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                    <a
                      className="u-font__c-gray3"
                      onClick={() => toggleExpansion(index)}
                      style={{ cursor: 'pointer' }}
                    >
                      {expanded === index ? 'Read Less' : 'Read More'}
                    </a>
                  </p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
