import React from 'react';
import { Headingone } from '../components/Headings';
import BUTTON from '../components/Button';

const authorsData = [
    {
        header: "Submission Details",
        text1: "Authors are requested to submit their original research papers in <b style='color: #306fa0'>IEEE format</b> through the <b style='color: #306fa0'>submission link</b>",
        lists: [
        ],
        text2: "",
    },
    {
        header: "Paper Specifications",
        text1: "Use IEEE template to meet formatting requirements. Your paper must comply with the following:",
        lists: [
            "Paper Length: Maximum 6 pages",
            "Paper Size: US Letter (8.5” x 11”)",
            "Fonts: Embed ALL fonts in your PDF file. Avoid the use of Type 3 fonts.",
            "File Format: Adobe PDF (.pdf)",
            "Allowed File Size: 2.0Mb",
            "Do NOT page number your paper.",
            "Do NOT apply security settings to your PDF file.",
        ],
        text2: "<b>Note:</b> Deviations from the above paper specifications will result in rejection of your submission.",
    },
    {
        header: "Final Submission Procedure",
        text1: "Use IEEE template to meet formatting requirements. Your paper must comply with the following:",
        lists: [
            "Pay for conference registration here: IEEE INDISCON 2024 registration site",
            "Final submission is REQUIRED, even if you do not intend to make any changes to your original submission.",
            "BEFORE YOU PROCEED, carefully read the Author Information page to ensure that your submission meets the guidelines.",
            "Prepare a copy of your paper in PDF format using our templates",
            "MANDATORY: Make sure your PDF file meets IEEE Xplore compliance by following the instructions on the PDF Express page. IEEE Xplore link will be provided later.",
            "Log in using the same username and password you created during your initial submission.",
            "Do NOT apply security settings to your PDF file.",
        ],
        text2: "<b>MANDATORY:</b> You must pay for conference registration BEFORE you will be allowed to upload your final paper. You will need your registration code in order to proceed. Prospective authors are requested to submit full length paper no longer than six (6) pages. The paper must clearly state the objectives of the work, its significance in the advancement of scientific and technical knowledge.",
    },
    {
        header: "Plagiarism Policy",
        text1: `<a href="#"><b>Click here</b></a> for IEEE policy on plagiarism, guidelines for AI generated text etc.:`,
        lists: [
        ],
        text2: "<b>Note:</b> Papers presented in the Conference, duly accepted after peer review, will be eligible for submission for further consideration of publishing in the IEEE Xplore, subject to maintenance of quality, and post-conference scrutiny of response of Conference Organizers to Technical Program of Questionnaire (TPQ) on the Conference."
    },
]

function Authors() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', width: '100%', margin: '24px 0px 36px' }}>
            <Headingone text1="Authors" />
            <div style={{ width: '100%', textAlign: 'start', gap: '18px', display: 'flex', flexDirection: 'column',marginBottom:'36px' }}>
                {authorsData.map((author, index) => (
                    <div key={index} style={{ width: '100%', textAlign: 'start', }}>
                        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>{author.header}</h2>
                        <p dangerouslySetInnerHTML={{ __html: author.text1 }} style={{ lineHeight: '20px', textAlign: 'justify', marginBottom: '4px' }}></p>
                        <ul style={{ listStyle: 'square', paddingLeft: '18px' }}>
                            {author.lists.map((listItem, listIndex) => (
                                <li key={listIndex} style={{ fontSize: '16px', fontWeight: '400', lineHeight: '25px', textAlign: 'justify' }}>{listItem}</li>
                            ))}
                        </ul>
                        <p dangerouslySetInnerHTML={{ __html: author.text2 }} style={{ lineHeight: '20px', textAlign: 'justify', marginTop: '10px' }}></p>
                    </div>
                ))}
            </div>
            <BUTTON link="#" text="Submit your Paper" />
        </div>
    )
}

export default Authors