import './Users.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Users() {
  const carouselItems = [
    { content: 'Beautiful application with elegant UI Design. I found this app very useful.  Placed Order for a <br/> few medicines and recieved in just two days. Same medicine costs me +100 from local Shop.<br/> Recommended application. :-).', userName: 'Avinash Kumar', userIcon: '/path/to/icon.png' },
    { content: 'Very useful app. It saves time and money and genuine. Keep going Practo. Thank you.', userName: 'Amit Sharma', userIcon: '/path/to/icon.png' },
    { content: 'Nice app for people who want to manage time for searching medicine..', userName: 'Jyothi Bhatia', userIcon: '/path/to/icon.png' },
    { content: 'Very useful app. It saves time and money and genuine. Keep going Practo. Thank you.', userName: 'Jyothi Bhatia', userIcon: '/path/to/icon.png' },
    { content: 'I ordered medicine. It was delivered right time. With big discount.', userName: 'Jyothi Bhatia', userIcon: '/path/to/icon.png' },
  ];

  const getCaptionClassName = (content) => {
    return content.length > 200 ? 'carousel-caption-long' : 'carousel-caption-short';
  };

  return (
    <div className="newfifth-part">
      <h2 className="car-title">What users have to say</h2>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {carouselItems.map((item, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : ''}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="d-block w-100 carousel-itemm">
              <span className="text-charcoal-grey text-arrow u-text--bold u-m-r--10">“</span>
                <div className={`car-caption ${getCaptionClassName(item.content)}`}>
                  <p className="paragraph" dangerouslySetInnerHTML={{ __html: item.content }}></p>
                  <div className="u-d__inline-block u-t-left u-v-middle u-margin--10__left">
                    <img src='\logo\p8dow26e.png' alt="User Icon" className="user-icon" />
                    <div className="user-name">{item.userName}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Users;
