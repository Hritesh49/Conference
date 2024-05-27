import React from 'react';
import { Typography, Stack, Divider, } from '@mui/material';
import { Session, Format } from '../components/Tutorial';
import { Headingone } from '../components/Headings';

function Tutorials() {
    const Sessions = [
        {
            head: 'Guidelines for Special Session Proposers',
            text1: [
                `The Special Sessions should provide the conference attendees with an insight view of research topics that are not covered by the regular tracks. They can also be focused on particular research niches within the greater topic of a regular track; however, it is important that such sessions offer sufficient diversity from the main topic. Therefore, the proposers are invited to highlight the difference between the contents of their submission and the regular tracks.
                Special Session Organizers are expected to operate within their professional networks to promote their session and INDISCON 2024. Having an invited paper/presentation will help to attract more interest, hence it is strongly encouraged. Accepted special sessions will have 4-6 oral presentations. A Special Session can be one of the following:`
            ],
            type: "A",
            lists: [
                {
                    subhead: "Special Session with an invited presentation",
                    text2: [
                        `The organizers invite a leading researcher on the topic of the Special Session who provides an oral presentation in the Special Session. The organizers provide the name of the presenter together with an email confirming their acceptance and an abstract. No full paper is requested, nor will the abstract be published in IEEE Xplore.`
                    ]
                },
                {
                    subhead: "Special Session with an invited paper",
                    text2: [
                        `The organizers invite a leading researcher on the topic of the Special Session who provides an oral presentation in the Special Session. The organizers provide the name of the presenter together with an e-mail confirming their acceptance. The presenter, together with possible co-authors, prepares a full paper and submits it to the INDISCON 2024 conference by the stipulated deadline. The paper will be peer-reviewed and must reflect an innovation providing a significant novelty to the state-of-the-art in its (sub)field. The paper, if accepted and presented, will be submitted for the possible publication in IEEE Xplore.<br/><b>NOTE:</b> No financial assistance is available from the conference to support the participation of the presenter of an invited paper/presentation. The Special Session Organizer and all presenters in the session are required to register and pay for the conference.`
                    ]
                },
            ]
        },
        {
            head: 'Special Session Proposal Contents',
            text1: [
                `Special session proposals should be a maximum of 2 pages and must address the items listed below:`
            ],
            type: "A",
            lists: [
                {
                    subhead: " Special Session Details",
                    details: [
                        "Title of the Special Session",
                        "Special Session organizer's name, affiliation, and a brief biodata",
                        "Special Session organizer's name, affiliation, and a brief biodata",
                    ]
                },
                {
                    subhead: "Invited paper/presentation Details (optional)",
                    details: [
                        "Title",
                        "Authors and their affiliation",
                        "Abstract",
                    ]
                },
                {
                    subhead: " Reviewers",
                    text2: [
                        `Please provide details of reviewers who may be able to help review papers for the proposed Special Session. A suitable list of willing reviewers (name, affiliation, e-mail) will be required and should be provided by the Special Session organizer before the start of the review process.<br/>
                        List of reviewers in the Special Session proposal is optional at the time of submission.`
                    ]
                },
            ]
        },
    ];

    const Formats = [
        {
            head: 'Tutorial/Workshop Proposal Format',
            text1: [
                `Tutorial/Workshop proposals should have a maximum of 4 pages. Proposals should address all of the sub-headings below:`
            ],
            lists: [
                `Title of the tutorial/workshop`,
                `Abstract (200 words maximum) to publicize the tutorial on the website`,
                `Length of the tutorial/workshop: maximum up to 90 minutes`,
                `Names, addresses, and a short biography (up to 200 words) of each instructor(s)`,
                `Novelty, that the tutorial/workshop will address, emphasizing its significance and timeliness`,
                `An outline of the tutorial/workshop content`,
                `Intended audience`,
            ]
        },
        {
            head: 'Tutorial/Workshop Proposal Submissions',
            text1: [
                `The Proposals for tutorial/workshop should be submitted by e-mail to ieeeindiscon2024@gmail.com by March 31, 2024 April 15, 2024 .`
            ],
        },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', margin: '24px 0px', gap: '50px' }}>
            <Stack sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', width: '100%' }}>   {/*Call for session Section*/}
                <Headingone text1='Call for Special Session Proposals' />
                <p style={{ fontWeight: '400', fontSize: '16px', lineHeight: '25px', textAlign: 'justify' }}>
                    INDISCON 2024 will provide an excellent forum for the dissemination of the latest research and ideas in a wide range of Science, Engineering and Technology. The conference is keen to disseminate state-of-the-art knowledge on specialist and latest topics related to the theme of the conference through dedicated Special Sessions.<br /><br />Submission of proposals for such Special Sessions for the INDISCON 2024 are welcome.
                </p>
            </Stack>
            <Stack sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: "40px", justifyContent: 'center', alignItems: 'flex-start' }}>
                {Sessions.map((session, index) => (
                    <Session key={index} session={session} />
                ))}
                <Stack>
                    <h2 style={{ fontSize: '24px', fontWeight: 'bolder', color: '#021E30', marginBottom: '20px' }}>
                        Special Session Proposal Timelines and Process
                    </h2>
                    <ul style={{ lineHeight: '25px', textAlign: "justify", fontSize: '16px', fontWeight: '400', listStyle: 'outside', }}>
                        <li>Proposal Submission Date: March 15, 2024 [Extended]: April 15, 2024</li>
                        <li>To submit a proposal for a Special Session, the Special Session Organizer should send their proposal by e-mail at ieeeindiscon2024@gmail.com.</li>
                    </ul>
                </Stack>
            </Stack>
            <Stack>
                <Stack sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', width: '100%' }}>   {/*Call for session Section*/}
                    <Headingone text1='Call for Tutorial/Workshop Proposals' />
                    <p style={{ fontWeight: '400', fontSize: '16px', lineHeight: '25px', textAlign: 'justify' }}>INDISCON 2024 solicits proposals for Tutorials/Workshops of 90 minutes (one session) that complement the regular program with clear and focused coverage of new and emerging topics within the scope of the conference. Tutorials/Workshops are an opportunity for researchers from academia and industry to learn about state-of-the-art research.</p>
                </Stack>
                <Stack sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: "40px", justifyContent: 'center', alignItems: 'flex-start' }}>
                    {Formats.map((format, index) => (
                        <Format key={index} format={format} />
                    ))}
                </Stack>
            </Stack>
        </div>
    )
}

export default Tutorials