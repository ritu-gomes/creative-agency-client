import React from 'react';
import MainHeader from '../MainHeader/MainHeader';
import Navbar from '../Navbar/Navbar';
import './header.css';

const Header = () => {
    return (
        <header id="home" className="header">
            <Navbar></Navbar>
            <MainHeader></MainHeader>
        </header>
    );
};

export default Header;