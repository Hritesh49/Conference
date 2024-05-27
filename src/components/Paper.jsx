import React from 'react'
import { Stack, } from '@mui/material';

const Paper = ({ track }) => {
    return (
        <Stack sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'center', color: '#021E30', textDecoration: 'underline', marginBottom: '10px' }}>{track.name}</h3>
            <ul>
                {track.details.map((detail, index) => (
                    <li style={{ fontSize: '16px', fontWeight: '400', listStyle: 'outside' }}>{detail}</li>
                ))}
            </ul>
        </Stack>
    )
}

export default Paper