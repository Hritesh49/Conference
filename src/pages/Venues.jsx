import React from 'react';
import { Stack } from '@mui/material';
import { Headingone, Heading } from '../components/Headings';
import { Route, Famous } from '../components/Venue';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function Venues() {

    const Routes = [
        {
            name: "Airport: ",
            text: [
                ` Chandigarh International Airport serves not only Chandigarh but neighbouring cities of Panchkula, Mohali and even some of the southern districts of Himachal. The international airport operates flights of 7 airlines including Indigo, Spicejet and Air India which connect Chandigarh with several national and international destinations. Travellers can either take private cabs or public transport like buses, autos to reach the college from here.`
            ],
            image: "/e.jpg",
        },
        {
            name: "Airport: ",
            text: [
                ` Chandigarh International Airport serves not only Chandigarh but neighbouring cities of Panchkula, Mohali and even some of the southern districts of Himachal. The international airport operates flights of 7 airlines including Indigo, Spicejet and Air India which connect Chandigarh with several national and international destinations. Travellers can either take private cabs or public transport like buses, autos to reach the college from here.`
            ],
            image: "/e.jpg",
        },
        {
            name: "Airport: ",
            text: [
                ` Chandigarh International Airport serves not only Chandigarh but neighbouring cities of Panchkula, Mohali and even some of the southern districts of Himachal. The international airport operates flights of 7 airlines including Indigo, Spicejet and Air India which connect Chandigarh with several national and international destinations. Travellers can either take private cabs or public transport like buses, autos to reach the college from here.`
            ],
            image: "/e.jpg",
        },

    ];

    const famouss = [
        {
            head: "Sambalpur",
            link: "#",
            text: [
                ` Chandigarh International Airport serves not only Chandigarh but neighbouring cities of Panchkula, Mohali and even some of the southern districts of Himachal. The international airport operates flights of 7 airlines including Indigo, Spicejet and Air India which connect Chandigarh with several national and international destinations. Travellers can either take private cabs or public transport like buses, autos to reach the college from here.`
            ],
            pic: "/e.jpg"
        },
        {
            head: "Sambalpur",
            link: "#",
            text: [
                ` Chandigarh International Airport serves not only Chandigarh but neighbouring cities of Panchkula, Mohali and even some of the southern districts of Himachal. The international airport operates flights of 7 airlines including Indigo, Spicejet and Air India which connect Chandigarh with several national and international destinations. Travellers can either take private cabs or public transport like buses, autos to reach the college from here.`
            ],
            pic: "/e.jpg"
        },
        {
            head: "Sambalpur",
            link: "#",
            text: [
                ` Chandigarh International Airport serves not only Chandigarh but neighbouring cities of Panchkula, Mohali and even some of the southern districts of Himachal. The international airport operates flights of 7 airlines including Indigo, Spicejet and Air India which connect Chandigarh with several national and international destinations. Travellers can either take private cabs or public transport like buses, autos to reach the college from here.`
            ],
            pic: "/e.jpg"
        },
        {
            head: "Sambalpur",
            link: "#",
            text: [
                ` Chandigarh International Airport serves not only Chandigarh but neighbouring cities of Panchkula, Mohali and even some of the southern districts of Himachal. The international airport operates flights of 7 airlines including Indigo, Spicejet and Air India which connect Chandigarh with several national and international destinations. Travellers can either take private cabs or public transport like buses, autos to reach the college from here.`
            ],
            pic: "/e.jpg"
        },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', gap: "30px", width: '100%', margin: '24px 0px' }}>
            <Stack sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', width: '100%' }}>   {/*About us Section*/}
                <Headingone text1='Venue' />
                <p style={{ fontWeight: '400', fontSize: '16px', lineHeight: '25px', textAlign: 'justify' }}>
                    Punjab Engineering College is located in Chandigarh, Sector-12. Chandigarh, also known as The City Beautiful, is a city and a union territory in the northern part of India that serves as the capital of the states of Punjab and Haryana. Chandigarh is easily accessible from anywhere in the country via all modes of transport, including flight, train and bus. The city is served by an international airport as well as well-planned rail and road network, using which travellers can enter the city with ease.
                </p>
            </Stack>
            <Stack sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', flexDirection: 'row' }}>
                <img style={{ height: '300px', width: '500px', margin: '30px auto', borderRadius: '12px' }} src="/e.jpg" alt="" />
                <img style={{ height: '300px', width: '500px', margin: '30px auto', borderRadius: '12px' }} src="/e.jpg" alt="" />
                <img style={{ height: '300px', width: '500px', margin: '30px auto', borderRadius: '12px' }} src="/e.jpg" alt="" />
            </Stack>
            <Stack sx={{ width: "100%" }}>
                <Heading size="24px" text="Ways to reach Burla" />
                <Route routes={Routes} />
            </Stack>
            <Stack sx={{ width: "100%" }}>
                <Heading size="24px" text="Hotels near VSSUT" />
                <Stack sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '36px', justifyContent: 'center', alignItems: 'center', padding: '30px 0px' }}>
                    <a href='https://www.google.com/maps/search/hotels+near+vssut+burla/@21.5022601,83.9008639,14.41z/data=!4m7!2m6!3m5!2sVeer+Surendra+Sai+University+Of+Technology!3s0x3a213da4ec28af2d:0xb33a5cc9af8c33c7!4m2!1d83.9039969!2d21.4974486?entry=ttu' target='_blank'>
                        <img style={{ width: '500px', height: '300px', objectFit: 'cover', border: '1px solid black', boxShadow: '0px 4px 10px  1px #00000020', borderRadius: '4px' }} src='/m.png' alt='' />
                    </a>
                    <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', lineHeight: '25px', textAlign: 'justify' }}>
                        <p style={{ fontWeight: 'bold' }}>Some good hotels near VSSUT</p>
                        <li>Hotel Bhayankar</li>
                        <li>Hotel Tabahi</li>
                        <li>Hotel Hotel</li>
                        <li>Hotel Resutrant</li>
                        <li>Hotel Rocky</li>
                        <a href='#' style={{ color: '#306fa0', fontWeight: '500' }}>You can check more hotels here.<OpenInNewIcon sx={{ fontSize: '20px', color: '#306fa0' }} /></a>
                    </ul>
                </Stack>
            </Stack>
            <Stack sx={{ display: 'flex', width: '100%', flexDirection: 'column', textAlign: 'center' }}>
                <Heading size="24px" text="Attractions" />
                <Stack sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', flexDirection: 'row', margin: '12px 0px', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <img style={{ height: '300px', width: '500px', borderRadius: '8px' }} src="/e.jpg" alt="" />
                    <img style={{ height: '300px', width: '500px', borderRadius: '8px' }} src="/e.jpg" alt="" />
                </Stack>
                <p>Some of the popular must visit place in Chandigarh are <a>Rock Garden</a>, <a>Sukhna Lake</a>, <a>Rose Garden</a>, <a>Chhatbir Zoo</a>, etc</p>
            </Stack>
            <Stack sx={{ width: '100%' }}>
                <Heading size="24px" text="Within 200kms" />
                {famouss.map((famous, index) => (
                    <Famous key={index} famous={famous} />
                ))}
            </Stack>
        </div>
    )
}

export default Venues