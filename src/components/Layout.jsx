import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div style={{width:'90%', margin:'0 auto'}}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout