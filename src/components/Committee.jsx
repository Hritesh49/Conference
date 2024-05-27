import React from 'react';
import { Stack, Box } from '@mui/material';

const Committee = ({ committee }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', margin: '24px 0px ', gap: '24px' }}>
      <h2 style={{ fontSize: '28px', fontWeight: 'bold', textAlign: 'center', color: '#021E30' }}>{committee.name}</h2>
      <Stack sx={{ background: '#f2f4f6', maxWidth: '1200px', width: '100%', display: 'flex', flexDirection: 'row', gridTemplateColumns: 'repeat(3 1fr)', flexWrap: 'wrap', justifyContent: 'center', justifyItems: 'center', alignItems: 'center', padding: '24px 20px', borderRadius: '24px', gap: '18px' }}>
        {committee.members.map((member, index) => (
          <Box sx={{ display: 'flex', width: '300px', maxWidth: '400px', padding: '10px', background: 'white', color: 'black', borderRadius: '20px', alignItems: 'center', gap: '12px' }}>
            <img style={{ width: '80px', height: '80px', objectFit: 'contain', borderRadius: '20px' }} src={member.image} alt={member.name} className="member-image" />
            <Stack sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p style={{ fontSize: '16px', fontWeight: '400' }}>{member.name}</p>
              <p style={{ fontSize: '12px', fontWeight: '250', }}>{member.designation}</p>
              <a href={member.link} style={{ fontSize: '12px', fontWeight: '350', textDecoration: 'underline', }}>More Info</a>
            </Stack>
          </Box>
        ))}
      </Stack>
    </div>
  );
};

export default Committee;
