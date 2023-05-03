import React from 'react';
import NavBar from '../pages/Shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Banner from '../pages/Shared/Banner/Banner';

const LoginLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;