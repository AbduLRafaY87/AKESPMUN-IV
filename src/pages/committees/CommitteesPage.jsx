import { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import '../../styles/Committee.css';
import PropTypes from "prop-types";

// Committees data
const committeeCategories = [
  {
    category: "Bilingual Committees",
    committees: [
      {
        name: "Pakistan National Assembly",
        image: "/committees/PNA.png",
        agenda: "Status of Democracy: Addressing the Situation of the Various Resistance Movements Present in Pakistan",
        pdf: "https://drive.google.com/file/d/1O1HcdNW4AA9yMTkjROpxT4Uw4HzPxLI7/view?usp=drive_link", // Set to null to disable
      },
      {
        name: "Pakistan Cabinet Crisis",
        image: "/committees/PCC.png",
        agenda: "Boots are calling",
        pdf: null, // Add your drive link
      },
    ],
  },

  {
    category: "General Assembly",
    committees: [
      {
        name: "Special Political and Decolonization Committee",
        image: "/committees/SPECPOL.png",
        agenda: "The Question of Western Sahara",
        pdf: "https://drive.google.com/file/d/1NDYT9mRO6TeHybzRZFfJpm81RVc_lOZO/view?usp=drive_link",
      },
      {
        name: "Disarmament and International Security Committee",
        image: "/committees/DISEC.png",
        agenda: "From the Dawn of Destruction: Ensuring Compliance with the Nuclear Non-Proliferation Treaty",
        pdf: "https://drive.google.com/file/d/1gOsONv5qONqc8YZJ_SRHTq1be6VrYxGj/view?usp=drive_link",
      },
      {
        name: "Social, Humanitarian and Cultural Committee",
        image: "/committees/SOCHUM.png",
        agenda: "The Rohingya Crisis: Strengthening Justice and Human Rights in Myanmar",
        pdf: "https://drive.google.com/file/d/1JF-Yo0FovHpo_hWaqqgBw9P8aBvhi0LN/view?usp=drive_link",
      },
    ],
  },

  {
    category: "Specialized Committees",
    committees: [
      {
        name: "United Nations Security Council",
        image: "/committees/UNSC.png",
        agenda: "A Throne Stained in Gunpowder: Questioning the Legitimacy of UNSC Resolution 2799 (2025)",
        pdf: 'https://drive.google.com/file/d/1i2H52SgznUbzvdXrGuBszCeiQ4dXcQ46/view?usp=drive_link',
      },
      {
        name: "Economic and Social Council",
        image: "/committees/ECOSOC.png",
        agenda: "Accelerating Sustainable Development in Landlocked Developing Countries through Regional Cooperation and Infrastructure Investment",
        pdf: "https://drive.google.com/file/d/1rWX4nbyBE1ukV45CDFFMO16xi8QVJbCi/view?usp=drive_link",
      },
      {
        name: "International Court of Justice",
        image: "/committees/ICJ.png",
        agenda: "Application of the Convention on the Prevention and Punishment of the Crime of Genocide in Sudan (Sudan v. United Arab Emirates)",
        pdf: "https://drive.google.com/file/d/13xbnLeOXD6c-ZsjasmLZ4rFYT7arQFx2/view?usp=drive_link",
      }
    ]
  },
  {
    category: "Regional Bodies",
    committees: [
      {
        name: "United Nations Commission on the Status of Women",
        image: "/committees/UNSCW.png",
        agenda: "Faith, Culture, and Gender: Protecting Women Against Discrimination in Cultural Practices",
        pdf: "https://drive.google.com/file/d/1oXNTLIVEQ8YvK5Hgif8CZKoKiija9_1D/view?usp=drive_link",
      },
      {
        name: "United Nations Childrens Fund",
        image: "/committees/UNICEF.png",
        agenda: "Child Soldiers in the MEA region",
        pdf: 'https://drive.google.com/file/d/1wYMi0c_QmeH2383pewjQYFldO0EeQPzG/view?usp=drive_link',
      },
      {
        name: "United Nations Environment Assembly",
        image: "/committees/UNEA.png",
        agenda: "Zero Hunger: Strategies for Advancing SDG 2 and Global Food Security",
        pdf: 'https://drive.google.com/file/d/1DE1WCp2AkvEYTegreGilkUsBdHXE9Eit/view?usp=drive_link',
      },
      {
        name: "World Health Organization",
        image: "/committees/WHO.png",
        agenda: "Joint Call to Strengthen Policy and Investment for Child and Youth Mental Health and Well-being",
        pdf: 'https://drive.google.com/file/d/127jhx-Rvmw1_cduNFN3kuU3sgHKZIKCq/view?usp=drive_link',
      },
    ]
  },
];


// Committee Card Component
const CommitteeCard = ({ name, image, agenda, pdf }) => {
  const [tiltEnabled, setTiltEnabled] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setTiltEnabled(window.innerWidth > 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Tilt
      tiltEnable={tiltEnabled}
      scale={1.03}
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      className="committee-card-tilt"
    >
      <div className="committee-card">
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

          {/* Hover Overlay */}
          <div className="committee-card__overlay">
            <h3 className="committee-card__title">{agenda}</h3>
            
            {/* Conditional PDF Button */}
            {pdf ? (
              <a 
                href={pdf} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="committee-card__badge"
              >
                <i className="fas fa-file-pdf"></i>
                <span>Study Guide</span>
              </a>
            ) : (
              <div className="committee-card__badge committee-card__badge--disabled">
                <i className="fas fa-file-pdf"></i>
                <span>Coming Soon</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Tilt>
  );
};

CommitteeCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  agenda: PropTypes.string.isRequired,
  pdf: PropTypes.string, // Made optional since it can be null
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
            Explore our diverse range of committees and their agendas
          </p>
        </div>
      </section>

      {/* Committees Grid Section */}
      <section className="committees-section">
        <div className="committees-section__container">

          {committeeCategories.map((group, i) => (
            <div key={i} className="committee-category-block">

              {/* Category Title */}
              <h2 className="committee-category-title">{group.category}</h2>
              <div className="committee-category-underline"></div>

              {/* Committees in this category */}
              <div className="committees-grid">
                {group.committees.map((committee, idx) => (
                  <CommitteeCard key={idx} {...committee} />
                ))}
              </div>

            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default CommitteesPage;