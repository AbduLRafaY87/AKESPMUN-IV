// import { useState } from 'react';
import '../../styles/Committee.css';
import PropTypes from "prop-types";

// Committees data
const committees = [
  {
    name: "United Nations Security Council",
    image: "/committees/UNSC.png",
    pdf: "/study-guides/unsc.pdf",
  },
  {
    name: "Disarmament and International Security Committee",
    image: "/committees/DISEC.png",
    pdf: "/study-guides/disec.pdf",
  },
  {
    name: "Social, Humanitarian and Cultural Committee",
    image: "/committees/SOCHUM.png",
    pdf: "/study-guides/sochum.pdf",
  },
  {
    name: "Special Political and Decolonization Committee",
    image: "/committees/SPECPOL.png",
    pdf: "/study-guides/specpol.pdf",
  },
  {
    name: "Economic and Social Council",
    image: "/committees/ECOSOC.png",
    pdf: "/study-guides/ecosoc.pdf",
  },
  {
    name: "United Nations Commission on the Status of Women",
    image: "/committees/UNSCW.png",
    pdf: "/study-guides/uncsw.pdf",
  },
  {
    name: "United Nations Committee on Peacekeeping Operations",
    image: "/committees/UNCOP.png",
    pdf: "/study-guides/uncop.pdf",
  },
  {
    name: "United Nations Office on Drugs and Crime",
    image: "/committees/UNODC.png",
    pdf: "/study-guides/unodc.pdf",
  },
  {
    name: "United Nations Office for Outer Space Affairs",
    image: "/committees/UNOOSA.png",
    pdf: "/study-guides/unoosa.pdf",
  },
  {
    name: "International Court of Justice",
    image: "/committees/ICJ.png",
    pdf: "/study-guides/icj.pdf",
  },
  {
    name: "Economic and Financial Affairs Council Configuration",
    image: "/committees/ECOFIN.png",
    pdf: "/study-guides/ecofin.pdf",
  },
  {
    name: "Pakistan National Assembly",
    image: "/committees/PNA.png",
    pdf: "/study-guides/pna.pdf",
  },
];

// Committee Card Component
const CommitteeCard = ({ name, image, pdf }) => {
  return (
    <a
      href={pdf}
      target="_blank"
      rel="noopener noreferrer"
      className="committee-card"
    >
      <div className="committee-card__content">
        <img 
          src={image} 
          alt={name} 
          className="committee-card__image"
          onError={(e) => {
            e.target.src = '/committees/placeholder.png';
            e.target.onerror = null;
          }}
        />
        
        {/* Hover Overlay - Always rendered, controlled by CSS */}
        <div className="committee-card__overlay">
          <h3 className="committee-card__title">{name}</h3>
          <div className="committee-card__badge">
            <i className="fas fa-file-pdf"></i>
            <span>Study Guide</span>
          </div>
        </div>
      </div>
    </a>
  );
};

CommitteeCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  pdf: PropTypes.string.isRequired,
};

// Main Committees Page Component
const CommitteesPage = () => {
  return (
    <div className="committees-page">
      {/* Hero Section */}
      <section className="committees-hero">
        <div className="committees-hero__container">
          <h1 className="committees-hero__title">Committees</h1>
          <div className="committees-hero__underline"></div>
          <p className="committees-hero__subtitle">
            Explore our diverse range of committees and their study guides
          </p>
        </div>
      </section>

      {/* Committees Grid Section */}
      <section className="committees-section">
        <div className="committees-section__container">
          <div className="committees-grid">
            {committees.map((committee, index) => (
              <CommitteeCard key={index} {...committee} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommitteesPage;