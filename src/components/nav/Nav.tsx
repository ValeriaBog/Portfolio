import React from "react";
import s from './Nav.module.scss'
import {Link} from "react-router-dom";


function Nav() {
    return (
        <div className={s.nav}>
            <Link to={'/'}>Главное</Link>
            <Link to={'/skills'}>Скиллы</Link>
            <Link to={'/works'}>Проекты</Link>
            <Link to={'/contacts'}>Контакты</Link>
        </div>
    );
}

export default Nav;