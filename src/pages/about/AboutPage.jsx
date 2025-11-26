import { useState } from 'react';
import '../../styles/About.css';
import image from '../../assets/images/homeAbout.jpg';
import Whyimage from '../../assets/images/whyJoinUsImg.jpg';
import missionImg from '../../assets/images/mission.jpg';

const faqs = [
  {
    question: "What is AKESPMUN?",
    answer: "AKESPMUN is a premier Model United Nations conference that fosters diplomacy, leadership, and critical thinking among students.",
  },
  {
    question: "Who can participate?",
    answer: "Students from high schools and universities are welcome to participate in AKESPMUN.",
  },
  {
    question: "How can I register?",
    answer: "You can register through our website by filling out the registration form on the 'Registrations' page.",
  },
  {
    question: "What are the benefits of participating?",
    answer: "Participants develop public speaking, negotiation, and leadership skills while engaging in discussions on global issues.",
  },
];

const AboutPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="about-page">
      {/* ========================================
          HERO SECTION
          ======================================== */}
      <section className="about-hero">
        <div className="about-hero__container">
          <h1 className="about-hero__title">About AKESPMUN</h1>
          <div className="about-hero__underline"></div>
          <p className="about-hero__subtitle">
            Empowering future leaders through diplomacy and global dialogue
          </p>
        </div>
      </section>

      {/* ========================================
          MAIN CONTENT SECTIONS
          ======================================== */}
      <section className="about-content">
        <div className="about-content__container">
          
          {/* About AKESPMUN III */}
          <div className="content-block">
            <div className="content-block__grid">
              <div className="content-block__text">
                <div className="content-block__label">Who We Are</div>
                <h2 className="content-block__title">About AKESPMUN IV</h2>
                <p className="content-block__description">
                  AKESPMUN IV is a premier Model United Nations conference, fostering diplomatic
                  dialogue, leadership, and critical thinking. Our mission is to provide an immersive
                  experience that challenges participants to tackle global issues through debate and collaboration.
                </p>
              </div>
              <div className="content-block__image-wrapper">
                <img
                  src={image}
                  alt="About AKESPMUN"
                  className="content-block__image"
                />
                <div className="content-block__image-overlay"></div>
              </div>
            </div>
          </div>

          {/* Our Mission */}
          <div className="content-block content-block--alt">
            <div className="content-block__grid content-block__grid--reverse">
              <div className="content-block__text">
                <div className="content-block__label">Our Purpose</div>
                <h2 className="content-block__title">Our Mission</h2>
                <p className="content-block__description">
                  We aim to cultivate future leaders by offering a platform for intellectual discourse
                  and innovative solutions. Through rigorous debate, research, and teamwork, delegates
                  gain invaluable skills in diplomacy, public speaking, and negotiation.
                </p>
              </div>
              <div className="content-block__image-wrapper">
                <img
                  src={Whyimage}
                  alt="Our Mission"
                  className="content-block__image"
                />
                <div className="content-block__image-overlay"></div>
              </div>
            </div>
          </div>

          {/* Why Join Us */}
          <div className="content-block">
            <div className="content-block__grid">
              <div className="content-block__text">
                <div className="content-block__label">Benefits</div>
                <h2 className="content-block__title">Why Join Us?</h2>
                <ul className="content-block__list">
                  <li className="content-block__list-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Engage in high-quality debates and discussions</span>
                  </li>
                  <li className="content-block__list-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Enhance your leadership and problem-solving skills</span>
                  </li>
                  <li className="content-block__list-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Network with like-minded individuals from various backgrounds</span>
                  </li>
                  <li className="content-block__list-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Experience a well-organized and professional MUN event</span>
                  </li>
                </ul>
              </div>
              <div className="content-block__image-wrapper">
                <img
                  src={missionImg}
                  alt="Why Join Us"
                  className="content-block__image"
                />
                <div className="content-block__image-overlay"></div>
              </div>
            </div>
          </div>

          <div className="content-block iqraBlock">
            <h2 className="content-title">
                  All funds raised from registrations and other conference revenues will be directed toward the <span>IQRA Scholarship Program</span> at Aga Khan Higher Secondary School.
                </h2>
          </div>

        </div>
        
      </section>

      

      {/* ========================================
          FAQ SECTION
          ======================================== */}
      <section className="faq-section">
        <div className="faq-section__container">
          <div className="faq-section__header">
            <h2 className="faq-section__title">Frequently Asked Questions</h2>
            <div className="faq-section__underline"></div>
            <p className="faq-section__subtitle">
              Find answers to common questions about AKESPMUN
            </p>
          </div>
          
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${openIndex === index ? 'faq-item--active' : ''}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="faq-item__question"
                >
                  <span className="faq-item__question-text">{faq.question}</span>
                  <span className="faq-item__toggle">
                    <i className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'}`}></i>
                  </span>
                </button>
                <div className={`faq-item__answer-wrapper ${openIndex === index ? 'faq-item__answer-wrapper--open' : ''}`}>
                  <p className="faq-item__answer">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;