import { Stack, Divider, Typography, } from '@mui/material';
import React from 'react';
import { Headingone } from '../components/Headings';


function Contacts() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', margin: '24px 0px', gap: '24px' }}>
            <Stack sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', width: '100%' }}>   {/*About us Section*/}
            <Headingone text1='Contact Us' />
            </Stack>
            <Stack sx={{ display: 'flex', flexDirection: 'row', width: '100%', gap: '24px',flexWrap:'wrap' }}>
                <iframe title='college location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.262170640436!2d83.90142197504517!3d21.49744858027182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a213da4ec28af2d%3A0xb33a5cc9af8c33c7!2sVeer%20Surendra%20Sai%20University%20of%20Technology!5e0!3m2!1sen!2sin!4v1716451688891!5m2!1sen!2sin" style={{ width: '50%', height: '400px', borderRadius: '8px', border: '2px solid black', boxShadow: '0px 4px 10px  1px #00000020' }} allowfullscreen="" loading="lazy" ></iframe>
                <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', }}>
                    <Typography variant='body1' sx={{ fontSize: '18px', fontWeight: 'Bold' }}>General Chair (INDISCON 2024)</Typography>
                    <br/>
                    <Typography variant='body1' sx={{ fontSize: '18px', fontWeight: '500' }}>Department of Electronics and Telecommunication</Typography>
                    <Typography variant='body1' sx={{ fontSize: '18px', fontWeight: '500' }}>Veer Surendra Sai University Of Technology</Typography>
                    <Typography variant='body1' sx={{ fontSize: '18px', fontWeight: '500' }}>University</Typography>
                    <Typography variant='body1' sx={{ fontSize: '18px', fontWeight: '500' }}>Burla, Sambalpur, Odisha, India</Typography>
                    <Typography component='a' variant='body1' sx={{ fontSize: '16px', fontWeight: '300', color: '#306fa0', textDecoration: 'underline' }}>Link of indiscon</Typography>
                </Stack>
            </Stack>
        </div >
    )
}

export default Contacts