import React from 'react';
import NavBar from '../pages/Shared/NavBar/NavBar';
import Banner from '../pages/Shared/Banner/Banner';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import ChefCard from '../pages/Home/ChefCard/ChefCard';
import MenuItem from '../pages/Home/MenuItem/MenuItem';
import Service from '../pages/Home/Service/Service';


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <ChefCard></ChefCard>
            <MenuItem></MenuItem>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Main;