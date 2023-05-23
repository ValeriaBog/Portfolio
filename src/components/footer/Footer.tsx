import React from "react";
import s from './Footer.module.css'
import sContainer from './../../common/styles/Container.module.css'


function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Валерия</h2>
                <div className={s.footer}>
                    <div className={s.socialNetwork}>
                        <div className={s.site}></div>
                        <div className={s.site}></div>
                        <div className={s.site}></div>
                        <div className={s.site}></div>
                    </div>
                    <div className={s.copyright}>© 2023 Все права защищены</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;