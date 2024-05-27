import React from 'react';

const Route = ({ routes }) => {
    return (
        <ol style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '36px', margin: '10px 0px 20px' }}>
            {routes.map((route, index) => (
                <li key={index}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '24px', }}>
                        <p style={{ fontSize: '16px', lineHeight: '26px', textAlign: 'justify' }}>
                            <b>{route.name}</b>
                            <span>{route.text}</span>
                        </p>
                        <img style={{ width: '500px', height: '300px', borderRadius: '8px' }} src={route.image} alt={route.name} />
                    </div>
                </li>
            ))}
        </ol>
    )
};

const Famous = ({ famous }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', margin: '20px 0px', gap: '18px', alignItems: 'center' }}>
            <img style={{ height: '200px', width: '260px', borderRadius: '16px', boxShadow: '0px 4px 10px  1px #00000020' }} src={famous.pic} alt={famous.head} />
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', textAlign: 'start' }}>
                <a href={famous.link}><h3>{famous.head}</h3></a>
                <p>{famous.text}</p>
            </div>
        </div>
    )
};

export { Route, Famous };
