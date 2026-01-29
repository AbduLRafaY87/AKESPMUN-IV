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
        pdf: "https://drive.google.com/file/d/1O1HcdNW4AA9yMTkjROpxT4Uw4HzPxLI7/view?usp=drive_link",
        facebook: "https://www.facebook.com/groups/900564405788832/?ref=share&mibextid=NSMWBT",
      },
      {
        name: "Pakistan Cabinet Crisis",
        image: "/committees/PCC.png",
        agenda: "Boots are calling",
        pdf: "https://drive.google.com/file/d/1yl26jzfqYYYts_EOBh23no-LFzLVVLJr/view?usp=drive_link",
        facebook: "https://www.facebook.com/groups/2141681779904356/?ref=share&mibextid=NSMWBT",
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
        facebook: "https://www.facebook.com/groups/1433177118209173/?ref=share&mibextid=NSMWBT",
      },
      {
        name: "Disarmament and International Security Committee",
        image: "/committees/DISEC.png",
        agenda: "From the Dawn of Destruction: Ensuring Compliance with the Nuclear Non-Proliferation Treaty",
        pdf: "https://drive.google.com/file/d/1gOsONv5qONqc8YZJ_SRHTq1be6VrYxGj/view?usp=drive_link",
        facebook: "https://www.facebook.com/groups/1993745647875201/?ref=share&mibextid=NSMWBT",
      },
      {
        name: "Social, Humanitarian and Cultural Committee",
        image: "/committees/SOCHUM.png",
        agenda: "The Rohingya Crisis: Strengthening Justice and Human Rights in Myanmar",
        pdf: "https://drive.google.com/file/d/1JF-Yo0FovHpo_hWaqqgBw9P8aBvhi0LN/view?usp=drive_link",
        facebook: "https://www.facebook.com/groups/1243800847676443/?ref=share&mibextid=NSMWBT",
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
        facebook: "https://www.facebook.com/groups/2008476627217579/?ref=share&mibextid=NSMWBT",
      },
      {
        name: "Economic and Social Council",
        image: "/committees/ECOSOC.png",
        agenda: "Accelerating Sustainable Development in Landlocked Developing Countries through Regional Cooperation and Infrastructure Investment",
        pdf: "https://drive.google.com/file/d/1rWX4nbyBE1ukV45CDFFMO16xi8QVJbCi/view?usp=drive_link",
        facebook: "https://www.facebook.com/groups/869905505843494/?ref=share&mibextid=NSMWBT",
      },
      {
        name: "International Court of Justice",
        image: "/committees/ICJ.png",
        agenda: "Application of the Convention on the Prevention and Punishment of the Crime of Genocide in Sudan (Sudan v. United Arab Emirates)",
        pdf: "https://drive.google.com/file/d/13xbnLeOXD6c-ZsjasmLZ4rFYT7arQFx2/view?usp=drive_link",
        facebook: "https://www.facebook.com/groups/1254544156567573/?ref=share&mibextid=NSMWBT",
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
        facebook: "https://www.facebook.com/groups/1224627392974594/?ref=share&mibextid=NSMWBT",
      },
      {
        name: "United Nations Childrens Fund",
        image: "/committees/UNICEF.png",
        agenda: "Child Soldiers in the MEA region",
        pdf: 'https://drive.google.com/file/d/1wYMi0c_QmeH2383pewjQYFldO0EeQPzG/view?usp=drive_link',
        facebook: "https://www.facebook.com/groups/1566677867875504/?ref=share&mibextid=NSMWBT",
      },
      {
        name: "United Nations Environment Assembly",
        image: "/committees/UNEA.png",
        agenda: "Zero Hunger: Strategies for Advancing SDG 2 and Global Food Security",
        pdf: 'https://drive.google.com/file/d/1DE1WCp2AkvEYTegreGilkUsBdHXE9Eit/view?usp=drive_link',
        facebook: "https://www.facebook.com/groups/25541554948859336/?ref=share&mibextid=NSMWBT",
      },
      {
        name: "World Health Organization",
        image: "/committees/WHO.png",
        agenda: "Joint Call to Strengthen Policy and Investment for Child and Youth Mental Health and Well-being",
        pdf: 'https://drive.google.com/file/d/1wDhmSwYMw0BkXHkaFLeaNJNS7T4P8ZMv/view?usp=drive_link',
        facebook: "https://www.facebook.com/groups/877542488539805/?ref=share&mibextid=NSMWBT",
      },
    ]
  },
];


// Committee Card Component
const CommitteeCard = ({ name, image, agenda, pdf, facebook }) => {
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

            {/* Buttons Container */}
            <div className="committee-card__buttons">
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

              {/* Facebook Button */}
              {facebook && (
                <a
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="committee-card__badge committee-card__badge--facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                  <span>Facebook Group</span>
                </a>
              )}
            </div>
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
  pdf: PropTypes.string,
  facebook: PropTypes.string,
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