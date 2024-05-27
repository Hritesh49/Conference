import React from 'react';
import Committee from '../components/Committee';
import { Headingone } from '../components/Headings';


function Comite() {

  const committees = [
    {
      name: 'Finance Committee',
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
    {
      name: 'Marketing Committee',
      members: [
        {
          name: 'Diana Prince',
          designation: 'Marketing Head',
          image: '/5.png',
          link: 'https://example.com/diana'
        },
        {
          name: 'Edward Norton',
          designation: 'SEO Specialist',
          image: '/5.png',
          link: 'https://example.com/edward'
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
          name: 'Fiona Green',
          designation: 'Content Strategist',
          image: '/5.png',
          link: 'https://example.com/fiona'
        }
      ]
    },
    {
      name: 'HR Committee',
      members: [
        {
          name: 'George King',
          designation: 'HR Manager',
          image: '/5.png',
          link: 'https://example.com/george'
        },
        {
          name: 'Helen Carter',
          designation: 'Recruiterdjtrsjtrjhtrshjtr thryfnt trjryjnerytr trhets jryjryyh yjtrsjrs jrthjtrh',
          image: '/5.png',
          link: 'https://example.com/helen'
        },
      ]
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', width: '100%', margin: '24px 0px' }}>
      <Headingone text1='Organizing Committee' />
      {committees.map((committee, index) => (
        <Committee key={index} committee={committee} />
      ))}
    </div>
  )
}

export default Comite;