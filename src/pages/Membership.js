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
            ],
            members: ["Evelyn Xiao, Caroline Pham, Victoria Charry, Sameera Gupte, Liya Liju, Ava Czarnecki, Jahanavi Sinha, Diya Patel, Anjali Silina, Yara Alkhalifa"

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
            ],
            members:["Angie Che, Susan Chen, Rithika Ravichandran, Mehana Nagarur, Shreeya Adhikari, Nisha Gupta, Nicole Contreras, Shreya Mookherjee, Isabel Larenas"       
            
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
            ],
            members:["Angelina Zepaj, Elise Wizemann, Nihitha Reddy, Sree Kandula, Aaniya Mahajan, Alyse Courtney, Grace Calianese, Vanessa Lei, Lily Cordina, Clotilde Ceva, Alveena Hanif, Alex Fay, Rohita Nookala, Anusha Narang, Khushi Khan, Annika Salpukas, Nalini Singh, Trang Do, London Jones, Noelle Marcel, Arpitha Coorg, Alissa, Meggan Shvartsberg, Zoe Gao, Alizeh Zaidi, Elaine Zhu, Alyse Courtney, Rachel Chen, Rania Khan, Kimberly Tai, Fiona Donohue, Shreya Nanda, Ellie Meltzer, Samyutha Srinivasan, Paula Sefia, Rayna Yu, Lina Boutayeb, Camille Ferrell, Lilly Kulakusky, Arushi Aggarwal, Rimjhim Singh, Karyna Yen, Suhani Kashyap, Hannah Chacko, Maggie Chua, Lyanne Xu, Pranathi Arun Senthil, Harshita Jogi, Sahana Rajashekara, Risha Sheth, Kaustubh Suresh Gharat, Lucy Shah, Sunny Shen, Gia Patel, Silu Wang, Guoer Yu, Emma Gershman, Rhonda Wang, Tiffany Uong, Pallavi Shankar, Sarah Jane Gregory, Christine Vanson, Tanvi Bandikallu, Tiffany Dang, Saanvi Vutukur, Anjola Babalola, Anisha Koratala, Durva Sanjay Shelke, Samson Ajayi, Dreshta Boghra, Lena Tong, Emily Nguyen, Tina Shahani, Ziana Merchant, Dana Abarghoei, Prajwala Immareddy, Deepika Arulselvan, Kathryn Tran, Rona Liu-Zhong, Madhumitha Nair, Salena Kha, Jennifer Nguyen, Kaining Tian, Rimjhim Singh, Ananya Patil, Mishika Grover, Sarah Jane Gregory, Jacy Hennawy, Diya Ganesh, Samantha Sweeney, Bridget Minogue, Ashley Zheng, Sandra Tang, Poorvi Tikoo, Megan Lai, Jenna Madru, Lucy Shah, Sydney Bao, Aaniya Mahajan, Prisha Ganatra, Robiya Sahibnazarova, Meera Patel, Somayah Hussein, Natasha Neeck, Tanvi Agarwal, Nihitha Reddy, Ananya Pochinapeddi, Sarah Cooper, Preya Patel, Anoushka Abroal, Skye Kaden, Aarushi Thejaswi, Roslyn Maloney, Isabella Borda, Alayna Fu, Maya Borkar, Melanie Yu, Mahika Sharma, Vidhatri Pujar, Tori Smith, Lily Cordina, Natasha Joshi, Rohita Nookala, Akshaya Radhakrishnan, Rania Khan, Rachel Hsu, Riya Mohandas, Mia Corfmat, Rachel Haynes, Cesca Caldarella"
            
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
                <div className="members-section">
                    <h3>Members</h3>
                    <ul>
                        {data.members.map((members, index) => (
                            <li key={index}>{members}</li>
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