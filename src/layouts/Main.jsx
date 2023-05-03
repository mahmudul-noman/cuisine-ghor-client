import React from 'react';
import NavBar from '../pages/Shared/NavBar/NavBar';
import Banner from '../pages/Shared/Banner/Banner';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import ChefCard from '../pages/Home/ChefCard/ChefCard';


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <ChefCard></ChefCard>
            {/* <Outlet></Outlet> */}
            <Footer></Footer>
        </div>
    );
};

export default Main;