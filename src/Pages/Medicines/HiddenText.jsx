import React, { useState } from 'react';
import './HiddenText.css';

export default function HiddenText() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className={`u-content-wrapper u-pos--rel u-m-b--30 ${isExpanded ? 'expanded' : 'collapsed'}`}>
        <div className="u-p-h--15 u-p-v--25 null">
          <div className="u-m-b--20">
            <h1 className="text-epsilon u-m-b--5">
              Order Medicines &amp; Health Products Online : India's most reliable Online Medical Store
            </h1>
            <p className="u-text--justify">
              Find and buy medicines online with Practo Pharmacy. Browse through prescription medicines, OTC products, health &amp; wellness products on an online pharmacy that provides hassle free service across 100+ cities in India. With an extensive catalogue of medicines and healthcare products provided on an extensive and easy to navigate destination for online medicine shopping, Practo Pharmacy provides added advantages which include:
              <ul className="u-m-l--15 u-list--disc">
                <li>Automated prescription refill: Set up scheduled refills for your online medicine orders and never worry about running out of your meds</li>
                <li>Doorstep delivery: No more trips to the pharmacy, with on-time delivery of your medicines right to your doorstep</li>
                <li>Medicine order history: No more scrolling through pages to find what you need. Just check your medicine order history and re-order</li>
                <li>Exclusive offers and discounts: Enjoy cashbacks, flat discounts and other exclusive offers on your medicine orders</li>
              </ul>
            </p>
          </div>
          {isExpanded && (
            <>
              <div className="u-m-b--20">
                <h2 className="text-epsilon u-m-b--5">Get every medicine on time &amp; everytime:</h2>
                <p className="u-text--justify">
                  When you purchase medicines on Practo, you can be assured that you will get the medicines you order. Our trained pharmacists, partner pharmacies and medical stores ensure that your medicines are delivered to you on time, anywhere in India*. Practo is powered by intelligent systems that remember all the medicines you ordered online and make sure they're always available whenever you need them. So, you'll always find your medicines on Practo's online pharmacy, anywhere in India*.
                </p>
              </div>
              <div className="u-m-b--20">
                <h2 className="text-epsilon u-m-b--5">Buy Fitness and Wellness Products:</h2>
                <p className="u-text--justify">
                  When you’re doing your best to stay fit and healthy, you shouldn’t have to worry about having everything you need to do so. With Practo Pharmacy, you can order everything you need to stay in shape and take care of yourself. From fitness enthusiasts in need of protein supplements or health drinks, to health-conscious individuals looking for herbal supplements, health food, and vitamin supplements.
                </p>
              </div>
              <div className="u-m-b--20">
                <h2 className="text-epsilon u-m-b--5">Buy Personal Care Products:</h2>
                <p className="u-text--justify">
                  Giving your body the care it needs just got a whole lot simpler. Choose from an extensive list of personal care products that includes top brands like Pantene, Himalaya, Neutrogena, Brylcreem, Durex, and Kamasutra. Find products for skincare, hair care, and lip care, as well as products for more intimate purposes like sexual wellness.
                </p>
              </div>
              <div className="u-m-b--20">
                <h2 className="text-epsilon u-m-b--5">Buy Health Devices &amp; Surgical Supplies:</h2>
                <p className="u-text--justify">
                  Good healthcare begins at home. Keep your first-aid kits stocked with thermometers, bandages, antiseptic solutions, mosquito repellent, and other essential medical equipment such as health monitors and weighing scales.
                </p>
              </div>
              <div className="u-m-b--20">
                <h2 className="text-epsilon u-m-b--5">Buy Ayurvedic Medicines:</h2>
                <p className="u-text--justify">
                  Searching for ayurvedic medicines? Avail the benefits of traditional medicine created right here in India, with products formulated for stomach care, liver care, sexual wellness, and more.
                </p>
              </div>
              <div>
                <h2 className="text-epsilon u-m-b--5">Practo provides services to the following cities:</h2>
                <p className="u-text--justify">
                  Bengaluru, New Delhi, Mumbai, Thane, Kolkata, Hyderabad, Chennai, Pune, Ahmedabad, Gurgaon, Ghaziabad, Noida, Faridabad, Mysuru, Hubli, Mandya, Mangaluru, Chitradurga, Dharwad, Chickmagalur, Belgavi, Badami, Gadag, Dandeli, Udupi, Dharmasthala, Bhadravati, Ranebennur, Hampi, Davangere, Hassan, Kodagu, Raichur, Vijaypura, Kalaburagi, Shimoga, Bagalkot, Kochi, Coimbatore, Jaipur, Chandigarh, Jalandhar, Lucknow, Bhopal, Bhubaneshwar, Dehradun, Indore, Nagpur, Amritsar, Ludhiana, Agra, Allahabad, Anakapalli, Aurangabad, Bheemavaram, Bhilai, Bidar, Bilaspur, Chikkaballapur, Chittoor, Cuddalore, Cuttack, Dombivli, Goa, Guntur, Guwahati, Jaisalmer, Jodhpur, Kadapa, Kakinada, Kalyan, Kamareddy, Kancheepuram, Kanpur, Karimnagar, Khammam, Kolar, Kota, Kurnool, Ludhiana, Madanapalli, Madurai, Mahaboobnagar, Meerut, Nalgonda, Nashik, Navi Mumbai, Nellore, Nizamabad, Panchkula, Panipat, Patna, Pimpri-Chinchwad, Pondy, Raipur, Rajahmundry, Rajkot, Ramanagara, Ranchi, Rourkela, Salem, Secunderabad, Shimla, Siliguri, Srikakulam, Srikalahasti, Srinagar, Surat, Suryapeta, Thiruvananthapuram, Tirupati, Trichy, Tumakuru, Udaipur, Vadodara, Varanasi, Vasai, Vellore, Vijayawada, Visakhapatnam, Vizianagaram, Warangal.
                </p>
              </div>
            </>
          )}
          <div
            className="see-less-seo__cta text-dusk-blue u-m-t--5 u-cur--ptr"
            onClick={toggleContent}
          >
            {isExpanded ? 'See less' : 'See more'}
          </div>
        </div>
      </div>
    </div>
  );
}
