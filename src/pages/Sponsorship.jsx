import React from 'react';
import { Headingone } from '../components/Headings';
import { Stack } from '@mui/material';
import TableComponent from '../components/TableComponent';

const sponsorshipTableConfig = {
    registrations: [
      ],
    columns: [
        { field: 'grade', headerName: 'Sponsorship grade' },
        { field: 'contribution', headerName: 'Amount of Contribution' },
    ],
    data: [
        { grade: 'Title Sponsors', contribution: 'INR 5,00,000' },
        { grade: 'Platinum Sponsors', contribution: 'INR 3,00,000' },
        { grade: 'Gold Sponsors', contribution: 'INR 2,00,000' },
        { grade: 'Silver Sponsors', contribution: 'INR 1,00,000' },
        { grade: 'Academic Partners', contribution: 'INR 50,000' },
        { grade: 'Exhibitors', contribution: 'INR 50,000' },
    ],
};

const sponsorshipData = [
    {
        title: 'Title sponsors',
        amount: 'Rs. 5,00,000/-',
        details: 'Special mention “Presented by”, Inclusion in PR Activities, Inaugural ceremony presence, 10 minutes Presentation slot about the Company/Organisation, Social media mentions, Main stage panels, Podium, Name of the sponsor as well as its logo (Please provide a high resolution jpg file in a CD at the time of the contract) will appear in all announcement materials/documents including banner, poster, proceedings of the conference. Sponsors will be provided space (please mention your requirement at the time of the contract up to 5mx5m) at the very strategic place of the conference venue to showcase their products. Complimentary 10 registrations.'
    },
    {
        title: 'Platinum sponsors',
        amount: 'Rs. 3,00,000/-',
        details: 'Main stage panels, Podium, Inaugural ceremony presence, Gala dinner Invite, Social media mentions, Inclusion in PR Activity, Name of the sponsor as well as its logo (Please provide a high resolution jpg file in a CD at the time of the contract) will appear in all announcement materials/documents including banner, poster, proceedings of the conference. Sponsors will be provided space (please mention your requirement at the time of the contract up to 4mX4m) at the very strategic place of the conference venue to showcase their products. Acknowledgement to the sponsors during inaugural welcome/closing event of the conference. Complimentary 5 registrations.'
    },
    {
        title: 'Gold sponsors',
        amount: 'Rs. 2,00,000/-',
        details: 'Name of the sponsor as well as its logo (Please provide a high resolution jpg file in a CD at the time of the contract) will appear in all announcement materials/documents including banner, poster, hoarding of the conference. Sponsors will be provided space (please mention your requirement at the time of the contract up to 4mX4m) at the exhibition venue of the conference to showcase their products. Acknowledgement to the sponsors during inaugural welcome/closing event of the conference. Complimentary 3 registrations.'
    },
    {
        title: 'Silver sponsors',
        amount: 'Rs. 1,00,000/-',
        details: 'Sponsors name will be displayed in the event banner of the conference. Sponsors will be provided space (please mention your requirement at the time of the contract up to 3mX3m) at the exhibition venue of the conference to showcase their products. Complimentary 2 registrations.'
    }
];

function Sponsorship() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', gap: "40px", width: '100%', margin: '24px 0px' }}>
            <Stack sx={{ width: '100%' }}>
                <Headingone text1="Sponsorship" />
                <p style={{ fontWeight: '400', fontSize: '16px', lineHeight: '25px', textAlign: 'justify' }}>
                    INDISCON 2024 offers you a unique and focused way to showcase your service, technology and solutions, explore opportunities to outreach your potential customers and touch base with them. Our Sponsorship packages are provided with a set of special privileges and a clear focus on your promotion during the conference. We are excited to invite you to participate as an exhibitor or sponsor at our upcoming INDISCON 2024 at Punjab Engineering College, Chandigarh, India. We encourage you to take advantage of the enclosed exhibitor and sponsorship opportunities while they last as we have a limited number of exhibitor spaces and they will be filled on a first-come, first-served basis. Becoming a sponsor/exhibitors you will become a part of one of the largest technology conferences in asia pacific, world's largest organization for technology professionals, network with 700+ participants - top officials from India and global tech industry; representatives from Several countries; strong pre/post event media & online coverage; multiple industry/academia partnership opportunities; join our team of 20+ long term industry partners.
                </p>
            </Stack>
            <Stack sx={{ width: '100%', textAlign: 'start', gap: '18px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Sponsoring Packages</h2>
                <p style={{ fontWeight: '400', fontSize: '16px', lineHeight: '25px', textAlign: 'justify' }}>
                    Five categories of sponsorship packages are available to suit your needs at INDISCON 2024. Sponsorship packages offer you a unique and focused way to showcase your service, technology and solutions, explore opportunities to outreach your potential customers and touch base with them.
                </p>

                <TableComponent tableConfig={sponsorshipTableConfig} />
                
            </Stack>
            <Stack sx={{ width: '100%', textAlign: 'start', gap: '18px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Sponsorship Benefits (Grade specific)</h2>
                <Stack sx={{ gap: '24px' }}>
                    {sponsorshipData.map((sponsor, index) => (
                        <div key={index}>
                            <h3 style={{ fontSize: '20px', marginBottom: '10px', textDecoration: 'underline', color: '#306fa0' }}>{sponsor.title}</h3>
                            <p style={{ lineHeight: '20px', textAlign: 'justify' }}>Sponsorship amount: <strong>{sponsor.amount}</strong></p>
                            <p style={{ lineHeight: '20px', textAlign: 'justify' }}>{sponsor.details}</p>
                        </div>
                    ))}
                </Stack>
                <strong style={{ color: 'green', fontStyle: 'italic', textDecoration: 'underline' }}>To secure participation, please write to us at ieeeindiscon2024@gmail.com</strong>
            </Stack>
        </div>
    )
}

export default Sponsorship