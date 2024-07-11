import './Users.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Users() {
  const carouselItems = [
    { content: 'Beautiful application with elegant UI Design. I found this app very useful. Placed Order for a <br/> few medicines and received in just two days. Same medicine costs me +100 from local Shop.<br/> Recommended application. :-).', userName: 'Ayush Verma', userIcon: '/logo/Ayush-verma.jpg', date: 'Oct 5, 2018 at 11:33 AM', colonClass: 'first-colon' },
    { content: 'Very useful app. It saves time and money and genuine. Keep going Practo. Thank you.', userName: 'Rakesh Raki', userIcon: '/logo/rakesh.jpg', date: 'Nov 11, 2018 at 11:27 AM', colonClass: 'second-colon' },
    { content: 'Nice app for people who want to manage time for searching medicine..', userName: 'Vamshi krishna', userIcon: '/logo/vamshi.jpg', date: 'Oct 3, 2018 at 7:13 PM', colonClass: 'third-colon' },
    { content: 'Very useful app. It saves time and money and genuine. Keep going Practo. Thank you.', userName: 'Kishor jha', userIcon: '/logo/kishor.jpg', date: 'Sep 11, 2018 at 8:52 PM', colonClass: 'fourth-colon' },
    { content: 'I ordered medicine. It was delivered right time. With big discount.', userName: 'Mahesh Sisara', userIcon: '/logo/mahesh.jpg', date: 'Sep 26, 2018 at 4:56 PM', colonClass: 'fifth-colon' },
  ];

  const getCaptionClassName = (content) => {
    return content.length > 200 ? 'carousel-caption-long' : 'carousel-caption-short';
  };

  return (
    <div className="newfifth-part">
      <h2 className="car-title">What users have to say</h2>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="d-block w-100 carousel-itemm">
                <span className={item.colonClass}>“</span>
                <div className={`car-caption ${getCaptionClassName(item.content)}`}>
                  <p className="paragraph" dangerouslySetInnerHTML={{ __html: item.content }}></p>
                  <div className="user-details">
                    <div className="user-user-name">
                      <img src={item.userIcon} alt="User Icon" className="users-user-icon" />
                      <div className='new-div'>
                        <span className='my-users'>{item.userName}</span>
                        <div className="date">{item.date}</div>
                      </div>
                    </div>
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
