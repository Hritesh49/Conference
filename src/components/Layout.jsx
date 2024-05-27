import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
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