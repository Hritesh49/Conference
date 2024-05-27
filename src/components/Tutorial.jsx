import { Stack, Typography } from '@mui/material';
import React from 'react';

const renderHTML = (html) => ({ __html: html });

const Session = ({ session }) => {
  return (
    <Stack>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#021E30', marginBottom: '10px' }}>{session.head}</h2>
      <p style={{ fontWeight: '400', fontSize: '16px', lineHeight: '25px', textAlign: 'justify' }}>{session.text1}</p>
      <br />
      <ol type={session.type} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '20px' }}>
        {session.lists && session.lists.map((list, index) => (
          <li key={index} className='boldmarker'>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#021E30', marginBottom: '10px' }}>{list.subhead}</h3>
            {list.text2 && list.text2.map((paragraph, subIndex) => (
              <Typography key={subIndex} variant='body1' sx={{ fontWeight: '500', fontSize: '16px', lineHeight: '25px', textAlign: 'justify' }} dangerouslySetInnerHTML={renderHTML(paragraph)} />
            ))}
            <ul style={{ listStyleType: 'circle', paddingLeft: '18px' }}>
              {list.details && list.details.map((detail, subIndex) => (
                <li key={subIndex} style={{ fontSize: '16px', fontWeight: '400', listStyle: 'outside', lineHeight: '25px', textAlign: 'justify' }}>{detail}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Stack>
  );
};

const Format = ({ format }) => {
  return (
    <Stack>
      <h2 style={{ fontSize: '24px', fontWeight: 'bolder', color: '#021E30', marginBottom: '10px' }}>{format.head}</h2>
      <p style={{ fontWeight: '400', fontSize: '16px', lineHeight: '25px', textAlign: 'justify', marginBottom: '4px' }}>{format.text1}</p>
      <ol style={{ paddingLeft: '18px' }}>
        {format.lists && format.lists.map((detail, index) => (
          <li key={index} style={{ fontSize: '16px', fontWeight: '400', lineHeight: '25px', textAlign: 'justify' }}>{detail}</li>
        ))}
      </ol>
    </Stack>
  )
}

export { Session, Format };
