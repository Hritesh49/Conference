import React from 'react';
import { Typography, Stack, Divider, Box, Button } from '@mui/material';
import Paper from '../components/Paper';
import { Headingone } from '../components/Headings';
import BUTTON from '../components/Button';

function Papers() {

    const tracks = [
        {
            name: 'Track 1: Power and Energy Systems',
            details: [
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
            ]
        },
        {
            name: 'Track 1: Power and Energy Systems',
            details: [
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
            ]
        },
        {
            name: 'Track 1: Power and Energy Systems',
            details: [
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
            ]
        },
        {
            name: 'Track 1: Power and Energy Systems',
            details: [
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
            ]
        },
        {
            name: 'Track 1: Power and Energy Systems',
            details: [
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
                "khiuer Grid Decarbu rization and Integration of Renewable Energy Systemsgherg",
            ]
        },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', margin: '24px 0px' }}>
            <Stack sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', width: '100%' }}>   {/*Call for Paper Section*/}
            <Headingone text1='Call for Papers' />
                <Typography variant='body1' sx={{ fontWeight: '500', fontSize: '16px', lineHeight: '25px', textAlign: 'justify' }}>The Conference aims to provide an active platform for research scientists, engineers, and practitioners throughout the world to present their latest research findings, ideas, and applications in the fields of interest which fall under the scope of INDISCON 2024. Papers (upto 6 pages in .pdf) presented in the Conference, duly accepted after peer review, will be eligible for submission for further consideration of publishing in the IEEE Xplore, subject to maintenance of quality, and post-conference scrutiny of response of Conference Organizers to Technical Program of Questionnaire (TPQ) on the Conference.
                </Typography>
            </Stack>
            <Box
                sx={{
                    width: '100%',
                    margin: '20px 0',
                    padding: '20px 0px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',

                }}
            >
                <BUTTON link="#" text="Click Here to Download" />
                <BUTTON link="#" text="Submit your Paper" />
            </Box>
            <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', margin: '0px 0px 24px' }}>
                <Typography variant='h2' sx={{ fontSize: '28px', fontWeight: 'bold', color: '#021E30' }}>Technical Tracks</Typography>
                <Stack sx={{ background: '#306fa070', width: '100%', padding: '24px', borderRadius: '16px', gap: '16px' }}>
                    {tracks.map((track, index) => (
                        <Typography variant='body1'>{track.name}</Typography>
                    ))}
                </Stack>
            </Stack>
            <Stack>
                <Typography variant='h2' sx={{ fontSize: '28px', fontWeight: 'bold', color: '#021E30' }}>Track Details</Typography>
                <Typography variant='body1' sx={{ fontSize: '16px', margin: '6px 0px 24px' }}>Following are the selected sub-topics (not limited to) under different tracks:</Typography>
                <Stack sx={{ width: '100%', borderRadius: '16px', gap: '24px' }}>
                    {tracks.map((track, index) => (
                        <Paper key={index} track={track} />
                    ))}
                </Stack>
            </Stack>

        </div>
    )
}

export default Papers