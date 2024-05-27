import React from 'react';
import { Typography, Stack, Table, TableContainer, TableHead, TableBody, Paper, TableRow, TableCell } from '@mui/material';
import { Headingone, Heading } from '../components/Headings';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import TableComponent from '../components/TableComponent';

const conferenceTableConfig = {
  registrations: [
  ],
  columns: [
    { field: 'edition', headerName: 'Previous Edition', isLink: true },
    { field: 'dates', headerName: 'Dates' },
    { field: 'venue', headerName: 'Venue' },
    { field: 'theme', headerName: 'Theme' },
  ],
  data: [
    { edition: { text: 'IEEE INDICON 2023', url: 'https://example.com/2023' }, dates: 'August 5-7, 2023', venue: 'GSSS Institute of Engineering & Technology for Women, Mysuru', theme: 'Computational Intelligence and Learning Systems' },
    { edition: { text: 'IEEE INDICON 2022', url: 'https://example.com/2022' }, dates: 'July 15-17, 2022', venue: 'KIIT Deemed to be University, Bhubaneswar', theme: 'Impactful Innovations for Benefits of Society and Industry' },
    { edition: { text: 'IEEE INDICON 2021', url: 'https://example.com/2021' }, dates: 'August 27-29, 2021', venue: 'Visvesvaraya National Institute of Technology, Nagpur', theme: 'Impactful innovations for the benefit of industry and society' },
    { edition: { text: 'IEEE INDICON 2020', url: 'https://example.com/2020' }, dates: 'October 3-4, 2020', venue: 'Gayatri Vidya Parishad College of Engineering, Visakhapatnam', theme: 'Smart and Sustainable Systems - Decade Ahead' },
  ],
};

function About() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', gap: "50px", width: '100%', margin: '24px 0px' }}>
      <Stack sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', width: '100%' }}>   {/*About us Section*/}
        <Headingone text1='About Us' />
        <p style={{ fontWeight: '400', fontSize: '16px', lineHeight: '25px', textAlign: 'justify' }}>
          <b>INDISCON</b> is a flagship annual international conference of the IEEE India Council organized by an IEEE Subsection in INDIA. INDISCON 2024 scheduled during <b>August 22-24, 2024</b>, is being organized by IEEE Chandigarh Subsection along with IEEE India Council. The conference will be hosted by <b>VSSUT, Burla</b>. The conference aims to provide an interdisciplinary platform for the academicians, researchers, industry professionals and research scholars to exchange and share their knowledge, experience & research.
        </p>
        <Typography component="a" href='#' sx={{ textAlign: 'flex-start', width: '100%', textDecoration: 'none', color: '#306fa0' }}>Proceedings of previous versions of the conference are available here<OpenInNewIcon sx={{ fontSize: '20px', color: '#306fa0' }} /></Typography>
      </Stack>

      <TableComponent tableConfig={conferenceTableConfig} />  {/*Table Section*/}

      <Stack sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', width: '100%', gap: '8px' }}>  {/*Council Section*/}
        <Heading size="32px" text="IEEE India Council" />
        <Typography variant='body1' sx={{ fontWeight: '500', fontSize: '16px', lineHeight: '25px', textAlign: 'justify', width: '100%' }}>IEEE is the world's largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity. IEEE and its members inspire a global community through IEEE's highly cited publications, conferences, technology standards, and professional & educational activities. IEEE India Council is the umbrella organisation which coordinates IEEE activities in India. Its primary aim is to assist and coordinate the activities of local “Sections”, in order to benefit mutually, and avoid duplication of effort and resources. IEEE India Council was established on May 20, 1976 and is one of the five councils in the Asia Pacific Region (Region #10 of IEEE).<br /><Typography component='a' href='#' sx={{ textAlign: 'flex-start', width: '100%', textDecoration: 'none', color: '#306fa0' }}>Details<OpenInNewIcon sx={{ fontSize: '20px', color: '#306fa0' }} /></Typography></Typography>
      </Stack>
      <Stack sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', width: '100%', gap: '8px' }}>  {/*Council Section*/}
        <Heading size="32px" text="IEEE Bhubaneswar Subsection" />
        <Typography variant='body1' sx={{ fontWeight: '500', fontSize: '16px', lineHeight: '25px', textAlign: 'justify', width: '100%' }}>IEEE Bhubneswar Subsection is a technical society that was established on June 18, 2005, under IEEE Delhi Section of IEEE India Council. It provides a platform for the students to enhance their technical skills and professional growth. The subsection organizes various events and technical extravaganzas, such as Techadroit, which is an annual event organized by IEEE PEC Student Branch in association with IEEE Chandigarh Subsection for students. In 2020, the subsection organized the first-ever Chandigarh Subsection Congress with the participation of more than 1700 delegates.<br /><Typography component='a' href='#' sx={{ textAlign: 'flex-start', width: '100%', textDecoration: 'none', color: '#306fa0' }}>Details<OpenInNewIcon sx={{ fontSize: '20px', color: '#306fa0' }} /></Typography></Typography>
      </Stack>
      <Stack sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', width: '100%', gap: '8px' }}>  {/*Council Section*/}
        <Heading size="32px" text="IEEE VSSUT Student Branch" />
        <Typography variant='body1' sx={{ fontWeight: '500', fontSize: '16px', lineHeight: '25px', textAlign: 'justify', width: '100%' }}>IEEE VSSUT Student Branch is a technical society that was established on June 18, 2005, under IEEE Delhi Section of IEEE India Council. It provides a platform for the students to enhance their technical skills and professional growth. The subsection organizes various events and technical extravaganzas, such as Techadroit, which is an annual event organized by IEEE PEC Student Branch in association with IEEE Chandigarh Subsection for students. In 2020, the subsection organized the first-ever Chandigarh Subsection Congress with the participation of more than 1700 delegates.<br /><Typography component='a' href='#' sx={{ textAlign: 'flex-start', width: '100%', textDecoration: 'none', color: '#306fa0' }}>Details<OpenInNewIcon sx={{ fontSize: '20px', color: '#306fa0' }} /></Typography></Typography>
      </Stack>
      <Stack sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', width: '100%' }}>   {/*College Section*/}
        <Headingone text1="Veer Surendra Sai University of Technology" />
        <Typography variant='body1' sx={{ fontWeight: '500', fontSize: '16px', lineHeight: '25px', textAlign: 'justify' }}>Veer Surendra Sai University Of Technology (VSSUT) having its roots in Lahore as Mugalpura Engineering College since 1921, moved to its present campus in 1953 as PEC affiliated to Panjab University. The institute became Deemed University in 2003 through a MHRD notification and rechristened as PEC University of Technology in 2009. It is a Grant-in-Aid institution under administration of Union Territory of Chandigarh, Government of India. The institute has a 146 acres sprawling and pious campus and is house of Chandigarh College of Architecture also. The academic and administrative processes are similar to IITs in the country. The institute governance is through a vibrant Board of Governors, chaired by a renowned industrialist, Sh. Rajinder Gupta. The institute offers 8 Undergraduate B. Tech. Programmes and 14 Post graduate M. Tech. Programmes in various disciplines of engineering and technology. After becoming University, the institute has also started PhD programme in various disciplines of engineering, science, management, humanities and social sciences. There are 9 academic departments and 2 centers of excellence. The faculty of academic departments and centers is involved in cutting edge research and development works. The institute collaborates very closely with research organisations, industries, alumni and other academic institutions both India and abroad, and has signed MoUs to pursue joint research in niche areas. With a history of more than 100 Years now, the institute has produced a number of alumni who have earned name and fame both for themselves and the institute. For more details, visit <Typography component='a' href='#' sx={{ textAlign: 'flex-start', width: '100%', textDecoration: 'none', color: '#306fa0' }}>Website<OpenInNewIcon sx={{ fontSize: '20px', color: '#306fa0' }} /></Typography>  of the institute.
        </Typography>
      </Stack>
      <Stack sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '40px', marginTop: '16px' }}> {/*College img Section*/}
        <Stack sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', flexDirection: 'row', gap: '12px' }}>
          <img style={{ height: "400px", display: 'flex', flex: '1', borderRadius: '24px' }} src="/e.jpg" alt="" />
          <img style={{ height: "400px", display: 'flex', flex: '1', borderRadius: '24px' }} src="/e.jpg" alt="" />
        </Stack>
        <Stack sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', flexDirection: 'row', gap: '12px' }}>
          <img style={{ height: "400px", display: 'flex', flex: '1', borderRadius: '24px' }} src="/e.jpg" alt="" />
          <img style={{ height: "400px", display: 'flex', flex: '1', borderRadius: '24px' }} src="/e.jpg" alt="" />
        </Stack>
      </Stack>
    </div>
  )
}

export default About
