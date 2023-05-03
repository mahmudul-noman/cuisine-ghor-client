import React from 'react';
import NavBar from '../pages/Shared/NavBar/NavBar';
import Banner from '../pages/Shared/Banner/Banner';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;