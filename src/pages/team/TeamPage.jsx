// import React from 'react';
import '../../styles/Team.css';
// import MemberOne from "../../assets/team/teamOne.webp";
// import MemberTwo from "../../assets/team/teamTwo.jpg";
// import MemberThree from "../../assets/team/teamThree.webp";
// import MemberFour from "../../assets/team/teamFour.webp";
// import MemberFive from "../../assets/team/teamFive.webp";
// import MemberSix from "../../assets/team/teamSix.webp";
// import MemberSeven from "../../assets/team/teamSeven.webp";
// import MemberEight from "../../assets/team/teamEight.webp";
// import MemberNine from "../../assets/team/teamNine.jpg";
// import MemberTen from "../../assets/team/teamTen.jpg";
// import MemberEleven from "../../assets/team/teamEleven.jpg";
// import MemberTwelve from "../../assets/team/teamTwelve.jpg";

const Hero = () => {
  return (
    <section className="about-hero">
        <div className="about-hero__container">
          <h1 className="about-hero__title">Our Team</h1>
          <div className="about-hero__underline"></div>
          <p className="about-hero__subtitle">
          Dedicated individuals working together to create an exceptional MUN experience
          </p>
        </div>
      </section>
  );
};

// Team Members Categorized by Department
// const teamData = [
//   {
//     department: "Executive Board",
//     members: [
//       { name: "Syed Ali Arish", role: "Secretary General", image: MemberOne },
//       { name: "Saad Ahmed", role: "Director General", image: MemberTwo },
//       { name: "Hasnain Bin Rashid", role: "Deputy Director General", image: MemberThree },
//       { name: "Muhammad Zubair Ahmed", role: "Patron", image: MemberFive },
//       { name: "M.Ayan Yasir", role: "Under Secretary General", image: MemberFour },
//       { name: "Ayesha Tanveer", role: "Under Secretary General", image: MemberSix },
//       { name: "Mustufa Malik", role: "Under Secretary General", image: MemberSeven },
//       { name: "Aniqa Kamran", role: "Under Secretary General", image: MemberEight },
//     ],
//   },
//   {
//     department: "Department Directors",
//     members: [
//       { name: "Maham Zubairi", role: "Hospitality", image: MemberNine },
//       { name: "Waniya Khayyam", role: "IT & Design", image: MemberTen },
//       { name: "Anas Raza", role: "Media & Photography", image: MemberEleven },
//       { name: "Hasan Sheikh", role: "Social Media", image: MemberTwelve },
//     ],
//   },
// ];

const TeamPage = () => {
  return (
    <div className="team-page">
      <Hero />

      <section className="team-content">
        <h2 className='comingSoon'>COMING SOON!</h2>
        {/* <div className="team-content__container">
          {teamData.map((team, idx) => (
            <div key={idx} className="team-department">
              
              <div className="department-header">
                <div className="department-header__line"></div>
                <h2 className="department-header__title">{team.department}</h2>
                <div className="department-header__line"></div>
              </div>

              <div className="team-grid">
                {team.members.map((member, index) => (
                  <div 
                    key={index} 
                    className="team-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="team-card__image-container">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="team-card__image"
                      />
                      <div className="team-card__overlay"></div>
                    </div>
                    
                    <div className="team-card__content">
                      <h3 className="team-card__name">{member.name}</h3>
                      <div className="team-card__role-container">
                        <span className="team-card__role">{member.role}</span>
                      </div>
                    </div>

                    <div className="team-card__corner"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div> */}
      </section>
    </div>
  );
};

export default TeamPage;