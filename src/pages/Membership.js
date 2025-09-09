import { useEffect } from 'react';
import '../styles/Membership.css';

function Membership() {
    useEffect(() => {
      document.title = "NUWIT | Membership";
    }, []);

    const membershipTiers = {
        gold: {
            title: "Gold Member",
            criteria: [
                "Attend 6+ NUWIT meetings per semester",
                "Maintain active engagement in Slack channels (more than 4 times)",
                "Contribute to at least 1 club initiative or project"
            ],
            benefits: [
                "Priority access to exclusive events",
                "NUWIT merchandise",
                "Letter of reccomendation",
                "NUWIT graduation stoles"
            ]
        },
        silver: {
            title: "Silver Member",
            criteria: [
                "Attend 4+ NUWIT meetings per semester",
                "Maintain regular engagement in Slack channels",
            ],
            benefits: [
                "Featured in the NUWIT newsletter",
            ]
        },
        bronze: {
            title: "Bronze Member",
            criteria: [
                "Attend 1+ NUWIT meetings per semester",
                "Join and participate in Slack channels",
                "Show interest in club activities"
            ],
            benefits: [
                "Name displayed on the NUWIT website",
                "Community support and networking",
                "Learning opportunities",
                "Club updates and announcements"
            ]
        }
    };

    const renderMembershipTier = (tier, data) => (
        <div className={`membership-tier ${tier}`}>
            <h2>{data.title}</h2>
            <div className="tier-content">
                <div className="criteria-section">
                    <h3>Requirements</h3>
                    <ul>
                        {data.criteria.map((criterion, index) => (
                            <li key={index}>{criterion}</li>
                        ))}
                    </ul>
                </div>
                <div className="benefits-section">
                    <h3>Benefits</h3>
                    <ul>
                        {data.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            <div className="membership-title">
                <h1>Membership Tiers</h1>
            </div>
            {renderMembershipTier('gold', membershipTiers.gold)}
            {renderMembershipTier('silver', membershipTiers.silver)}
            {renderMembershipTier('bronze', membershipTiers.bronze)}
        </div>
    );
}

export default Membership;