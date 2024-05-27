import { Typography, Stack } from '@mui/material'
import React from 'react'

function Herosection() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', width: '100%', height: 'auto' }}>
            <Stack sx={{ width: '100%', textAlign: 'center', backdropFilter: 'blur(4px)', zIndex: '9', padding: '20px 0px', background: '#ffffff90',boxShadow:'0px 0px 4px #e2e2e2' }}>
                <Typography variant='body1' sx={{ color: '#306fa0', textTransform: 'uppercase', fontSize: '36px', fontWeight: '500' }}>5TH IEEE INDIA COUNCIL INTERNATIONAL SUBSECTIONS CONFERENCE</Typography>
                <Typography variant='h1' sx={{ color: '#306fa0', textTransform: 'uppercase', fontSize: '66px', lineHeight: "80px", marginTop: '16px', fontWeight: '900',textShadow:'#000 1px 0px 4px' }}>Indiscon 2024</Typography>
            </Stack>
            <Stack sx={{ background: "url(/cover.jpeg)", height: '500px', width: "100%", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
                <Stack sx={{ width: '100%', height: '200px', zIndex: '4', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Stack sx={{ maxWidth: '30%', width: '100%', background: "#ffffff90", backdropFilter: 'blur(4px)', height: 'inherit', borderRadius: '0px 24px 24px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', gap: '12px', padding: '0px 24px' }}>
                        <Typography variant='h3' sx={{ textTransform: 'uppercase', fontSize: '40px', fontWeight: 'bolder' }}>Theme</Typography>
                        <Typography variant='body1' sx={{ fontSize: '24px', fontWeight: '500' }}>Science, Technology and Society</Typography>
                    </Stack>
                    <Stack sx={{ maxWidth: '30%', width: '100%', background: "#ffffff80", backdropFilter: 'blur(4px)', height: 'inherit', borderRadius: '24px 0px 24px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '12px', padding: '0px 24px' }}>
                        <Stack>
                            <Typography variant='h3' sx={{ fontSize: '22px', fontWeight: 'bolder' }}>
                                Conference Dates
                            </Typography>
                            <Typography variant='body2' sx={{ fontSize: '20px', fontWeight: '500' }}>
                                August 22-24 2024
                            </Typography>
                        </Stack>
                        <Stack>
                            <Typography variant='h3' sx={{ fontSize: '22px', fontWeight: 'bolder' }}>Venue</Typography>
                            <Typography variant='body2' sx={{ fontSize: '16px', fontWeight: '500' }}>VSSUT</Typography>
                            <Typography variant='body2' sx={{ fontSize: '16px', fontWeight: '500' }}>(University)</Typography>
                            <Typography variant='body2' sx={{ fontSize: '16px', fontWeight: '500' }}>Burla, Odisha, India</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background:'#306fa0',padding:'20px' }}>
                <Typography sx={{lineHeight:'25px',fontWeight:'500',textAlign:'justify',color:'white'}}>
                    INDISCON is a flagship annual international conference of the IEEE India Council organized by an IEEE Subsection in INDIA. INDISCON 2024 scheduled during August 22-24, 2024, is being organized by IEEE Bhubneswar Subsection along with IEEE India Council. The conference will be hosted by VSSUT (Deemed to be University), Chandigarh. The conference aims to provide an interdisciplinary platform for the academicians, researchers, industry professionals and research scholars to exchange and share their knowledge, experience & research. Papers that are selected and presented at the conference will be submitted to IEEE Xplore.
                </Typography>
            </Stack>
        </div>
    )
}

export default Herosection