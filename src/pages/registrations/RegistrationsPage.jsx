import { useState, useEffect } from 'react';
import '../../styles/Registration.css';
import formOne from '../../assets/images/formOne.png';
import formTwo from '../../assets/images/formTwo.png';

const registrationCategories = [
  { 
    title: "Individual Delegate", 
    link: "https://www.google.com", 
    image: formTwo,
    description: "Register as a solo participant and represent a nation independently"
  },
  { 
    title: "Delegation", 
    link: "https://www.primecreators.co", 
    image: formOne,
    description: "Bring your team and compete together as a unified delegation"
  },
];

const RegistrationPage = () => {
  // Calculate time left for main deadline
  const calculateTimeLeft = (deadline) => {
    const deadlineTime = new Date(deadline).getTime();
    const now = new Date().getTime();
    const difference = deadlineTime - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft("2026-01-23T00:00:00"));
  const [earlyBirdTime, setEarlyBirdTime] = useState(calculateTimeLeft("2025-12-31T23:59:59"));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft("2026-01-23T00:00:00"));
      setEarlyBirdTime(calculateTimeLeft("2025-12-31T23:59:59"));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="registration-page">
      {/* Hero Section */}
      <section className="registration-hero">
        <div className="registration-hero__container">
          <div className="registration-hero__badge">
            <span className="registration-hero__badge-icon">●</span>
            LIMITED SEATS AVAILABLE
          </div>
          <h1 className="registration-hero__title">Registrations</h1>
          <p className="registration-hero__subtitle">
            Secure your spot at AKESPMUN III - Where diplomacy meets excellence
          </p>
        </div>
        <div className="registration-hero__decoration"></div>
      </section>

      {/* Main Content */}
      <section className="registration-content">
        <div className="registration-content__container">
          
          {/* Early Bird Discount Section - Priority */}
          <div className="discount-section">
            <div className="discount-section__badge">
              <i className="fas fa-bolt"></i>
              EARLY BIRD SPECIAL
            </div>
            <h2 className="discount-section__title">Save 25% on Registration</h2>
            <p className="discount-section__subtitle">Limited time offer expires in:</p>
            
            <div className="counter-grid counter-grid--premium">
              {Object.entries(earlyBirdTime).map(([unit, value], index) => (
                <div key={index} className="counter-card counter-card--premium">
                  <div className="counter-card__inner">
                    <span className="counter-card__value">{String(value).padStart(2, '0')}</span>
                    <span className="counter-card__label">{unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Deadline Counter */}
          <div className="deadline-section">
            <div className="deadline-section__header">
              <h3 className="deadline-section__title">Registration Closes</h3>
              <p className="deadline-section__date">January 23, 2026</p>
            </div>
            
            <div className="counter-grid">
              {Object.entries(timeLeft).map(([unit, value], index) => (
                <div key={index} className="counter-card">
                  <div className="counter-card__inner">
                    <span className="counter-card__value">{String(value).padStart(2, '0')}</span>
                    <span className="counter-card__label">{unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Categories */}
          <div className="registration-categories">
            <div className="registration-categories__header">
              <h2 className="registration-categories__title">Choose Your Path</h2>
              <p className="registration-categories__subtitle">
                Select the registration type that best fits your delegation goals
              </p>
            </div>
            
            <div className="registration-grid">
              {registrationCategories.map((category, index) => (
                <div key={index} className="registration-card">
                  <div className="registration-card__image-container">
                    <img 
                      src={category.image} 
                      alt={category.title} 
                      className="registration-card__image"
                    />
                    <div className="registration-card__gradient"></div>
                  </div>
                  
                  <div className="registration-card__content">
                    <h3 className="registration-card__title">{category.title}</h3>
                    <p className="registration-card__description">{category.description}</p>
                    <a 
                      href={category.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="registration-card__button"
                    >
                      <span>Begin Registration</span>
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default RegistrationPage;