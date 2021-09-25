import React from 'react';
import Header from '../Header/Header';
import About from './About/About';
import './Home.css';
import Reviews from './Reviews/Reviews';
import Collections from './Collections/Collections';
import Form from './Form/Form'
import Footer from './Footer/Footer';
import ExtraPart from '../ExtraPart/ExtraPart';
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