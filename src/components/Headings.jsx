import React from 'react';
import { Stack, Divider, } from '@mui/material';


const Headingone = ({ text1 }) => {
    return (
        <Stack sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', width: '100%' }}>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', color: '#306fa0' }}>{text1}</h1>
            <Divider sx={{ width: "5%", my: 2, backgroundColor: '#000', borderWidth: 4 }} />
        </Stack>
    )

};

const Heading = ({ text, size, weight }) => {
    return (
        <h1 style={{ fontSize: size, fontWeight: weight || "bold", textAlign: 'center', color: 'white', background: '#306fa0', width: '100%', borderRadius: '8px', padding: '6px 0px' }}>
            {text}
        </h1>
    )
};


export { Headingone, Heading };
