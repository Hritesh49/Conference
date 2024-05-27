import React from 'react';
import Timeline from '@mui/lab/Timeline';
import { Headingone } from '../components/Headings';
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

function Imp() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', width: '100%', margin: '24px 0px' }}>
            <Headingone text1='Timeline' />
            <Timeline position="alternate">
                {events.map((event, index) => (
                    <TimelineEvent key={index} event={event} />
                ))}
            </Timeline>
        </div>
    )
}

export default Imp