import { useState, useEffect } from 'react';
import '../../styles/Home.css';

// Import carousel images
import carouselImageOne from '../../assets/carousel/carouselImage1.png';
import carouselImageTwo from '../../assets/carousel/carouselImage2.png';
import carouselImageThree from '../../assets/carousel/carouselImage3.png';
import carouselImageFour from '../../assets/carousel/carouselImage4.png';
import carouselImageFive from '../../assets/carousel/carouselImage5.png';

// Import other images
import aboutImage from '../../assets/images/homeAbout.jpg';

const carouselImages = [
  carouselImageOne,
  carouselImageTwo,
  carouselImageThree,
  carouselImageFour,
  carouselImageFive
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel navigation functions
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  };

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      {/* ========================================
          HERO CAROUSEL SECTION
          ======================================== */}
      <section className="hero-carousel">
        <div className="hero-carousel__wrapper">
          {carouselImages.map((image, index) => (
            <img
              key={index}
              src={image}
              className={`hero-carousel__image ${
                index === currentIndex ? 'hero-carousel__image--active' : ''
              }`}
              alt={`Carousel Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="hero-carousel__dots">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`hero-carousel__dot ${
                index === currentIndex ? 'hero-carousel__dot--active' : ''
              }`}
              aria-current={index === currentIndex}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* Previous Button */}
        <button
          type="button"
          className="hero-carousel__button hero-carousel__button--prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        {/* Next Button */}
        <button
          type="button"
          className="hero-carousel__button hero-carousel__button--next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </section>

      {/* ========================================
          ABOUT SECTION
          ======================================== */}
      <section className="about-section">
        <div className="about-section__container">
          {/* Text Content */}
          <div className="about-section__content">
            <h6 className="about-section__label">About Us</h6>
            <h2 className="about-section__title">
              AKESP Model United Nation - VI
            </h2>
            <p className="about-section__text">
              Welcome to AKESPMUN, a dynamic Model United Nations conference where diplomacy meets leadership. Our mission is to empower young minds by fostering critical thinking, public speaking, and global awareness. Through engaging debates and thought-provoking discussions, we strive to shape the leaders of tomorrow.
            </p>
            <p className="about-section__text">
              At AKESPMUN, delegates step into the shoes of world leaders, tackling real-world issues with innovative solutions. Our conference provides a platform for collaboration, negotiation, and cultural exchange, helping participants develop confidence and diplomacy skills. Join us and be part of a transformative experience that inspires change and global responsibility!
            </p>
            <a href="/about" className="about-section__button">
              Read More About AKESPMUN
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>

          {/* Image Section */}
          <div className="about-section__image-wrapper">
            <div className="about-section__image-container">
              <img
                className="about-section__image"
                src={aboutImage}
                alt="About AKESPMUN"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          TEAM SECTION
          ======================================== */}
      <section className="team-section">
        <div className="team-section__container">
          {/* Heading */}
          <h2 className="team-section__title">
            The People Who Make It Happen
          </h2>

          {/* Subtext */}
          <p className="team-section__subtitle">
            A team of passionate individuals working together to bring innovation,
            creativity, and excellence to this event.
          </p>
          <h2 className='comingSoon'>COMING SOON!</h2>
          {/* Team Images */}
          {/* <div className="team-section__grid">
            <div className="team-card">
              <div className="team-card__image-wrapper">
                <img
                  src={team1}
                  alt="Team Member 1"
                  className="team-card__image"
                />
              </div>
            </div>

            <div className="team-card">
              <div className="team-card__image-wrapper">
                <img
                  src={team2}
                  alt="Team Member 2"
                  className="team-card__image"
                />
              </div>
            </div>

            <div className="team-card">
              <div className="team-card__image-wrapper">
                <img
                  src={team3}
                  alt="Team Member 3"
                  className="team-card__image"
                />
              </div>
            </div>
          </div> */}

          {/* View Full Team Button */}
          <div className="team-section__button-wrapper">
            <a href="/team" className="team-section__button">
              <i className="fas fa-users"></i>
              Click to See Our Full Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;