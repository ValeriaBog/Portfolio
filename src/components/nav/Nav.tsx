import React from "react";
import s from './Nav.module.scss'
import {Link} from "react-router-dom";


function Nav() {
    return (
        <div className={s.nav}>
            {/*<NavLink to={'/'} className={isActive=>isActive?s.active:s.primary}>Главное</NavLink>*/}
            {/*<NavLink to={'/skills'} className={isActive=>isActive?s.active:s.primary}>Скиллы</NavLink>*/}
            {/*<NavLink to={'/works'} style={isActive=>({color: isActive?'#ffb400':'#fff'}) }>Проекты</NavLink>*/}
            {/*<NavLink to={'/contacts'} style={isActive=>({color: isActive?'#ffb400':'#fff'}) }>Контакты</NavLink>*/}
            <Link to={'/'}>Главное</Link>
            <Link to={'/skills'}>Скиллы</Link>
            <Link to={'/works'}>Проекты</Link>
            <Link to={'/contacts'}>Контакты</Link>
        </div>
    );
}

export default Nav;