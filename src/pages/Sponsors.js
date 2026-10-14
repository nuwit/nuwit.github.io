import { useEffect } from 'react';
import '../styles/Sponsors.css';
import verisk_logo from '../assets/sponsor_logos/verisk_logo.png';
import ukg_logo from '../assets/sponsor_logos/ukg_logo.png';
import draftkings_logo from '../assets/sponsor_logos/draftkings_logo.svg';
import datadog_logo from '../assets/sponsor_logos/datadog_logo.svg';


function Sponsors() {
  useEffect(() => {
    document.title = "NUWIT | Sponsors";
  }, []);

  const sponsors = {
    gold: [
      { logo: ukg_logo, name: 'UKG', description: 'UKG offers human capital management, payroll, and workforce management solutions, enabling businesses to manage employee experience, timekeeping, and compliance in a streamlined, people-focused way.', url: 'https://www.ukg.com' }
    ],
    silver: [
      { logo: verisk_logo, name: 'Verisk', description: 'Verisk is a data analytics and risk assessment company that provides advanced data insights and analytics solutions for insurance, energy, financial services, and government clients worldwide.', url: 'https://www.verisk.com' },
      { logo: datadog_logo, name: 'Datadog', description: 'Datadog is a monitoring and security platform for cloud applications, bringing infrastructure metrics, application performance monitoring, and log management together so teams can observe their entire stack in one place.', url: 'https://www.datadoghq.com' },
      { logo: draftkings_logo, name: 'DraftKings', description: ' DraftKings is a digital sports entertainment and gaming company, best known for its daily fantasy sports platform, sports betting services, and online casino games.', url: 'https://www.draftkings.com' }
    ],
    bronze: [ ]
  }; 

  const renderSponsors = (tier, sponsors) => (
    <div className={`sponsor-tier ${tier}`}>
      <h2>{tier.charAt(0).toUpperCase() + tier.slice(1)} Sponsors</h2>
      <div className="sponsors-list">
        {sponsors.map((sponsor, index) => (
          <a 
          key={index}
          href={sponsor.url}
          target="_blank"
          rel="noopener noreferrer"
          className="sponsor-link"
        >
          <div key={index} className="sponsor-item">
            <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="sponsor-logo" />
            <p className="sponsor-name">{sponsor.name}</p>
            <p className="sponsor-description">{sponsor.description}</p>
          </div>
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <div className="sponsors-title">
        <h1>2026-2027 Sponsors</h1>
      </div>
      {renderSponsors('gold', sponsors.gold)}
      {renderSponsors('silver', sponsors.silver)}
    </div>
  );
}

export default Sponsors;