import React, { useContext,useEffect,useState } from 'react';
import NavHead from '../NavHead/Navhead';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css';
import { UserContext } from './../../../App';
const Header = () => {
    
    return (
        <div className="header-container" >
            <NavHead></NavHead>
            <HeaderMain ></HeaderMain>
        </div>
    );
};

export default Header;