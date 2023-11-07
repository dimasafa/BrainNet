import React from 'react';
import './menu.scss';
import logo from '../../sources/Page_01/01_menu/logo.svg';
import '../../../font/fonts.css';

const Menu:React.FC = () => {
    return (
        <>
            <div className="menu">
                <img src={logo} alt="logo" />
                <div className="menu_center">
                    <a href="#">solutions</a>
                    <a href="#">developers</a>
                    <a href="#">customers</a>
                    <a href="#">blog</a>
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