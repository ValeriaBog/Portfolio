import React from "react";
import s from './Header.module.scss'
import Nav from './../nav/Nav'

function Header() {
    return (
        <div className={s.header}>
          <span className={s.contacts}>
              <span>Tel: +7 (921) 435 64 56</span>
              <span>Email: ValeriaBog@yandex.ru</span>
          </span>
            <Nav/>
        </div>
    );
}

export default Header;