import React from 'react';
import Brands from '../Brands/Brands';
import FeedBack from '../FeedBack/FeedBack';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Brands></Brands>
            <Services></Services>
            <Works></Works>
            <FeedBack></FeedBack>
            <Footer></Footer>
        </div>
    );
};

export default Home;