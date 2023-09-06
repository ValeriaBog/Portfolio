import React from "react";
import s from './Footer.module.scss'
import sContainer from '../../common/styles/Container.module.scss'
import telegramImage from "../../assets/image/footer/telegram.svg";
import whatsappImage from "../../assets/image/footer/whatsapp.svg";
import emailImage from "../../assets/image/footer/email.svg";
import {Link} from "react-router-dom";


function Footer() {

    const telegramIcon = {
        backgroundImage: `url(${telegramImage})`
    }
    const whatsappIcon = {
        backgroundImage: `url(${whatsappImage})`
    }
    const emailIcon = {
        backgroundImage: `url(${emailImage})`
    }

    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Валерия</h2>
                <div className={s.footer}>
                    <div className={s.socialNetwork}>
                        <Link to={'https://t.me/ValeriaBog'}><div className={s.site} style={telegramIcon}></div></Link>
                        <Link to={'https://api.whatsapp.com/send?phone=79214356456'}><div className={s.site} style={whatsappIcon}></div></Link>
                        <Link to={'mailto:valeriabog@yandex.ru'}><div className={s.site} style={emailIcon}></div></Link>
                    </div>
                    <div className={s.copyright}>© 2023 Все права защищены</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;