import React, { useState, useEffect } from 'react';
import './menu.scss';
import logo from '../../sources/Page_01/01_menu/logo.svg';
import '../../../font/fonts.css';
import { Link, useLocation } from "react-router-dom";


const Menu:React.FC = () => {

    const [firstButtonFarbe, setFirstButtonFarbe] = useState('#E03F3F');
    const [secondButtonFarbe, setSecondButtonFarbe] = useState('#FFF');
    const [thirdButtonFarbe, setThirdButtonFarbe] = useState('#FFF');
    const [fourthButtonFarbe, setFourthButtonFarbe] = useState('#FFF');

    function firstAktive() {
        setFirstButtonFarbe('#E03F3F');
        setSecondButtonFarbe('#FFF');
        setThirdButtonFarbe('#FFF');
        setFourthButtonFarbe('#FFF');
    }

    function secondAktive() {
        setFirstButtonFarbe('#FFF');
        setSecondButtonFarbe('#E03F3F');
        setThirdButtonFarbe('#FFF');
        setFourthButtonFarbe('#FFF');
    }

    function thirdAktive() {
        setFirstButtonFarbe('#FFF');
        setSecondButtonFarbe('#FFF');
        setThirdButtonFarbe('#E03F3F');
        setFourthButtonFarbe('#FFF');
    }

    function fourthAktive() {
        setFirstButtonFarbe('#FFF');
        setSecondButtonFarbe('#FFF');
        setThirdButtonFarbe('#FFF');
        setFourthButtonFarbe('#E03F3F');
    }

    const location = useLocation();

    useEffect(() => {
        // Handle color changes based on the current location
        const path = location.pathname;
        if (path === '/') {
            setFirstButtonFarbe('#E03F3F');
            setSecondButtonFarbe('#FFF');
            setThirdButtonFarbe('#FFF');
            setFourthButtonFarbe('#FFF');
        } else if (path === '/developers') {
            setFirstButtonFarbe('#FFF');
            setSecondButtonFarbe('#E03F3F');
            setThirdButtonFarbe('#FFF');
            setFourthButtonFarbe('#FFF');
        } else if (path === '/customers') {
            setFirstButtonFarbe('#FFF');
            setSecondButtonFarbe('#FFF');
            setThirdButtonFarbe('#E03F3F');
            setFourthButtonFarbe('#FFF');
        } else if (path === '/blog') {
            setFirstButtonFarbe('#FFF');
            setSecondButtonFarbe('#FFF');
            setThirdButtonFarbe('#FFF');
            setFourthButtonFarbe('#E03F3F');
        }
        }, [location.pathname]);
    

    return (
        <>
            <div className="menu">
                <a href="#">
                    <img src={logo} alt="logo" />
                </a>
                
                <div className="menu_center">
                    <Link to="/" style={{ color: firstButtonFarbe }} onClick={firstAktive}>
                        solutions
                    </Link>
                    <Link to="/developers" style={{ color: secondButtonFarbe }} onClick={secondAktive}>
                        developers
                    </Link>
                    <Link to="/customers" style={{ color: thirdButtonFarbe }} onClick={thirdAktive}>
                        customers
                    </Link>
                    <Link to="/blog" style={{ color: fourthButtonFarbe }} onClick={fourthAktive}>
                        blog
                    </Link>
                </div>
                <div className="menu_rechts">
                    <a href="#">login</a>
                    <div className="menu_rechts_blur"></div>
                    <a className="menu_rechts_signup" href="#">signup</a>
                    <div className="menu_rechts_blurtwo"></div>
                </div>
            </div>
        </>
    )
}

export default Menu;