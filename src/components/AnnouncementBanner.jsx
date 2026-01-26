import { Link } from 'react-router-dom';
import '../styles/AnnouncementBanner.css';

const AnnouncementBanner = () => {
  return (
    <div className="announcement-banner">
      <div className="announcement-banner__content">
        <div className="announcement-banner__marquee">
          <div className="announcement-banner__track">
            {/* Duplicate content 4 times for seamless loop */}
            {[...Array(4)].map((_, index) => (
              <div key={index} className="announcement-banner__item">
                <i className="fas fa-star announcement-banner__icon"></i>
                <span className="announcement-banner__text">
                  Study Guides Are Now Live!
                </span>
                <Link 
                  to="/committees" 
                  className="announcement-banner__link"
                >
                  View All Committees
                  <i className="fas fa-arrow-right"></i>
                </Link>
                <i className="fas fa-star announcement-banner__icon"></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;