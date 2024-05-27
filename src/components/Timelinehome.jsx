import React from 'react';
import { Box, Divider } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import BUTTON from '../components/Button';
import TimelineEvent from '../components/Timeline';

const events = [
    {
        time: '9:30 am',
        title: 'Eat',
        description: 'Because you need strength',
        icon: '🍽️',
        dotColor: 'grey',
        connectorColor: 'grey',
        variant: 'filled',
    },
    {
        time: '10:00 am',
        title: 'Code',
        description: "Because it's awesome!",
        icon: '💻',
        dotColor: 'primary',
        connectorColor: 'blue',
        variant: 'filled',
    },
    {
        time: '11:00 am',
        title: 'Sleep',
        description: 'Because you need rest',
        icon: '🛏️',
        dotColor: 'secondary',
        connectorColor: 'purple',
        variant: 'filled',
    },
    {
        time: '11:30 am',
        title: 'Repeat',
        description: 'Because this is the life you love!',
        icon: '🔁',
        dotColor: 'secondary',
        connectorColor: 'purple',
        variant: 'filled',
    },
];

const TimelineComponent = () => {
    return (
        <>
            <Timeline position='alternate'>
                {events.map((event, index) => (
                    <TimelineEvent key={index} event={event} />
                ))}
            </Timeline>

            <Divider sx={{ margin: '20px 0', width: '100%', my: 1, backgroundColor: '#000' }} />
            
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
                <BUTTON link="#" text='Call for Papers' />
                <BUTTON link="#" text='Submit your Paper' />
            </Box>
        </>
    );
};

export default TimelineComponent;
