import React from 'react';
import { Box } from '@mui/material';

const FooterComponent = () => {
    return (
        <Box
            sx={{
                textAlign: 'center',
                padding: '20px',
                backgroundColor: '#ddd',
            }}
        >
            <p style={{
                fontWeight: '300',
            }}>
                © 2024 Copyright. All Rights Reserved. Designed by Veer Surendra Sai University of Technology (University), Odisha.
            </p>
        </Box>
    );
}

export default FooterComponent;
