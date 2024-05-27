import React from 'react';
import { Stack, Box } from '@mui/material';

const Speaker = ({ speaker }) => {
    return (
        <Stack sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', justifyItems: 'center', alignItems: 'center', gap: '24px', padding: '16px 0px' }}>
            {speaker.members.map((member, index) => (
                <Box sx={{ display: 'flex', width: '300px', background: 'white', color: 'black', borderRadius: '20px', alignItems: 'center', gap: '8px', flexDirection: 'column', textAlign: 'center' }}>
                    <img style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '20px' }} src={member.image} alt={member.name} className="member-image" />
                    <Stack sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <p style={{ fontSize: '16px', fontWeight: '700' }}>{member.name}</p>
                        <p style={{ fontSize: '12px', fontWeight: '400', }}>{member.designation}</p>
                        <a href={member.link} style={{ fontSize: '12px', fontWeight: '350', textDecoration: 'underline', }}>More Info</a>
                    </Stack>
                </Box>
            ))}
        </Stack>
    )
}

export default Speaker