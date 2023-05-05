import React from 'react';
import NavBar from '../pages/Shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Banner from '../pages/Shared/Banner/Banner';
import toast, { Toaster } from 'react-hot-toast';

const ChefDetailsLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default ChefDetailsLayout;