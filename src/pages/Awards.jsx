import React from 'react';
import { Typography, Stack, Divider } from '@mui/material';
import { Headingone } from '../components/Headings';

function Awards() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', gap: "30px", width: '100%', margin: '24px 0px' }}>
            <Stack sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', width: '100%' }}>   {/*About us Section*/}
            <Headingone text1='Travel Grants' />
                <Typography variant='body1' sx={{ fontWeight: '500', fontSize: '16px', lineHeight: '25px', textAlign: 'justify' }}>INDISCON 2024 is pleased to offer financial support to the selected IEEE student first author for presenting their research work during INDISCON 2024 Conference. The grant will be awarded to a limited number of applicants on a highly competitive basis. The grant will help to cover Conference registration fees or partial travel of the authors for attending the Conference. The decision regarding this grant will be taken by the Conference Fellowship Committee.
                </Typography>
            </Stack>
            <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', width: '100%' }}>
                <Typography variant='h4' sx={{ fontSize: '18px', fontWeight: '700' }}>The interested student authors can email at <a href="mailto:ieeeindiscon2024@gmail.com" style={{ textDecoration: 'underline', color: '#306fa0' }}>ieeeindiscon2024@gmail.com</a> with the following details:</Typography>
                <Typography variant='body1' sx={{}}>Paper ID:</Typography>
                <Typography variant='body1' sx={{}}>Paper Title:</Typography>
                <Typography variant='body1' sx={{}}>Authors Names and Affiliations (with country name):</Typography>
                <Typography variant='body1' sx={{}}>Abstract:</Typography>
                <Typography variant='body1' sx={{}}>Email :</Typography>
                <Typography variant='body1' sx={{}}>Contact Number:</Typography>
            </Stack>
            <Stack sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', width: '100%' }}>   {/*About us Section*/}
            <Headingone text1='Awards' />
                <Typography variant='body1' sx={{ fontWeight: '500', fontSize: '16px', lineHeight: '25px', textAlign: 'justify' }}>Best Paper/Poster Awards will be presented to author's whose work represents groundbreaking research. The chairs of each track nominated a set of top papers for the award, and these nominations were reviewed by a committee. The committee considered each nominated paper, its reviewer comments, and a nomination statement by the chairs.
                </Typography>
            </Stack>
        </div>
    )
}

export default Awards