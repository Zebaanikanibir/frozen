import React from 'react';
import Header from '../Header/Header';

import './Home.css';
import Reviews from './Reviews/Reviews';
import Collections from './Collections/Collections';
import Footer from './Footer/Footer';
const Home = () => {
    return (
        <div  className="home">
        <Header></Header>
        <Collections></Collections>
        <Reviews></Reviews>


        <Footer></Footer>
        </div>
    );
};

export default Home;