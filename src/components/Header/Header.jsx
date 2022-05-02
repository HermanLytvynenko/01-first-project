import React from "react";
import logo from "../../logo.svg";
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src='https://www.freepnglogos.com/uploads/logo-website-png/logo-website-file-wikt-globe-bullet-svg-wikimedia-commons-19.png'
                alt={logo} title='Shlyapa'/>
        </header>
    )
}

export default Header;

