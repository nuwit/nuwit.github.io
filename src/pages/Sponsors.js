import { useEffect } from 'react';
import '../styles/Sponsors.css';
import verisk_logo from '../assets/sponsor_logos/verisk_logo.png';
import ukg_logo from '../assets/sponsor_logos/ukg_logo.png';
import hubspot_logo from '../assets/sponsor_logos/hubspot_logo.png';
import draftkings_logo from '../assets/sponsor_logos/draftkings_logo.svg';
import stripe_logo from '../assets/sponsor_logos/stripe_logo.png';
import akamai_logo from '../assets/sponsor_logos/akamai_logo.png';

function Sponsors() {
  useEffect(() => {
    document.title = "NUWIT | Sponsors";
  }, []);

  const sponsors = {
    gold: [
      { logo: verisk_logo, name: 'Verisk', description: 'Verisk is a data analytics and risk assessment company that provides advanced data insights and analytics solutions for insurance, energy, financial services, and government clients worldwide.', url: 'https://www.verisk.com' },
      { logo: ukg_logo, name: 'UKG', description: 'UKG offers human capital management, payroll, and workforce management solutions, enabling businesses to manage employee experience, timekeeping, and compliance in a streamlined, people-focused way.', url: 'https://www.ukg.com' },
      { logo: hubspot_logo, name: 'HubSpot', description: 'HubSpot is a customer relationship management (CRM) platform that offers tools for marketing, sales, customer service, and content management, focusing on helping businesses grow through inbound marketing strategies.', url: 'https://www.hubspot.com' }
    ],
    silver: [
      { logo: draftkings_logo, name: 'DraftKings', description: ' DraftKings is a digital sports entertainment and gaming company, best known for its daily fantasy sports platform, sports betting services, and online casino games.', url: 'https://www.draftkings.com' },
      { logo: stripe_logo, name: 'Stripe', description: 'Stripe is a financial services and software company that provides payment processing solutions for online businesses, enabling them to accept payments, manage transactions, and expand global financial operations.', url: 'https://stripe.com' },
      { logo: akamai_logo, name: 'Akamai', description: 'Akamai is a content delivery network (CDN) and cybersecurity services provider, helping companies deliver fast, secure web experiences through optimized cloud solutions, DDoS protection, and threat management services.', url: 'https://www.akamai.com' }
    ],
    bronze: [
    ]
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
        <h1>2024-2025 Sponsors</h1>
      </div>
      {renderSponsors('gold', sponsors.gold)}
      {renderSponsors('silver', sponsors.silver)}
    </div>
  );
}

export default Sponsors;