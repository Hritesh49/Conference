import React from 'react';
import Herosection from '../components/Herosection';
import Timeline from '../components/Timelinehome';
import { Typography } from '@mui/material';

function home() {
  return (
    <div>
      <Typography variant="body2" style={{ backgroundColor: '#fff', color: 'red', padding: '5px', width: '100%', textAlign: 'center' }}>
        <marquee behavior="scroll" direction="left">
          Thanks for the overwhelming response for paper submissions in INDISCON 2024. The submission through the given CMT portal will be given in the Month of May 2024.
        </marquee>
      </Typography>
      <Herosection />
      <Timeline />
    </div>
  )
}

export default home