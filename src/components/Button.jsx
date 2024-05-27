import React from 'react';
import { Button } from '@mui/material';

const BUTTON = ({ text, link }) => {
    return (
        <Button
            href={link}
            variant="contained"
            sx={{
                backgroundColor: '#306fa0',
                color: 'white',
                padding: '10px 30px',
                margin: '20px 0px',
                fontSize: '20px',
                boxShadow: '4px 2px 30px 2px rgba(0, 0, 0, 0.31)',
                transition: 'all 0.3s ease',
                '&:hover': {
                    backgroundColor: '#306fa9',
                    boxShadow: '9px -2px 20px 5px rgba(0, 0, 0, 0.31)',
                },
            }}
        >
            {text}
        </Button>
    )
}

export default BUTTON;