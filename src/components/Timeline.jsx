import React from 'react';
import { TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot } from '@mui/lab';
import { Typography } from '@mui/material';

const TimelineEvent = ({ event }) => {
    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
            >
                {event.time}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color={event.dotColor} variant={event.variant}>
                    {event.icon}
                </TimelineDot>
                <TimelineConnector sx={{ backgroundColor: event.connectorColor }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="h1">
                    {event.title}
                </Typography>
                <Typography>{event.description}</Typography>
            </TimelineContent>
        </TimelineItem>
    );
};

export default TimelineEvent;




