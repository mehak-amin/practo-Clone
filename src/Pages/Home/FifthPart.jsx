
import './FifthPart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function FifthPart() {
  const carouselItems = [
    { content: 'Very helpful. Far easier than doing same things on computer. <br> Allows quick and easy search with speedy booking.<br> Even maintains history of doctors visited.', userName: 'Avinash Kumar', userIcon: '/path/to/icon.png' },
    { content: 'Very easy to book, maintain history. Hassle free from <br> older versions of booking appointment via telephone..<br>Thanks Practo for making it simple.', userName: 'Amit Sharma', userIcon: '/path/to/icon.png' },
    { content: 'Very good app. Well thought out about<br> booking/rescheduling/canceling an appointment. <br> Also, Doctors feedback mechanism is good and<br> describes all the basics in a good way', userName: 'Jyothi Bhatia', userIcon: '/path/to/icon.png' }
  ];

  return (
    <div className="fifth-part">
    <h2 className="carousel-title">What our users have to say</h2>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            {carouselItems.map((item, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <div className="d-block w-100 carousel-itemm-first-one">
                        <div className="carousel-caption d-md-block">
                            <p className="para" dangerouslySetInnerHTML={{ __html: item.content }}></p>
                            <div className="u-d__inline-block u-t-left u-v-middle u-margin--10__left">
                                <img src='\logo\p8dow26e.png' alt="User Icon" className="user-icon" />
                                <div className="user-name">{item.userName}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
             <button className="carousel-control-previ new-previous" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <div className="carousel-control-nextt" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </div>
        </div>
       
    </div>
</div>

  );
}

export default FifthPart;
