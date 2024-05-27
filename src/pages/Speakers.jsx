import React from 'react';
import Speaker from '../components/Speaker';
import { Headingone } from '../components/Headings';

function Speakers() {

  const spekaers = [
    {
      members: [
        {
          name: 'Alice Johnson',
          designation: 'Treasurer',
          image: '/5.png',
          link: 'https://example.com/alice'
        },
        {
          name: 'Helen Carter',
          designation: 'Recruiter',
          image: '/5.png',
          link: 'https://example.com/helen'
        },
        {
          name: 'Helen Carter',
          designation: 'Recruiter',
          image: '/5.png',
          link: 'https://example.com/helen'
        },
        {
          name: 'Helen Carter',
          designation: 'Recruiter',
          image: '/5.png',
          link: 'https://example.com/helen'
        },
        {
          name: 'Bob Smith',
          designation: 'Accountant',
          image: '/5.png',
          link: 'https://example.com/bob'
        },
        {
          name: 'Charlie Davis',
          designation: 'Financial Analyst',
          image: '/5.png',
          link: 'https://example.com/charlie'
        }
      ]
    },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', width: '100%', margin: '24px 0px' }}>
      <Headingone text1='Speakers' />
      {spekaers.map((speaker, index) => (
        <Speaker key={index} speaker={speaker} />
      ))}
    </div>
  )
}

export default Speakers