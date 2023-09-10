import React from "react";
import s from './Nav.module.scss'
import { Link } from "react-scroll"

function Nav() {
    return (
        <div className={s.nav}>
            <Link to="main" smooth={true} duration={500}>Главное</Link>
            <Link to="skills" smooth={true} duration={500}>Скиллы</Link>
            <Link to="works" smooth={true} duration={500}>Проекты</Link>
            <Link to="contacts" smooth={true} duration={500}>Контакты</Link>
        </div>
    );
}

export default Nav;