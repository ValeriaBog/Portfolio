import React from "react";
import s from './Footer.module.scss'
import sContainer from '../../common/styles/Container.module.scss'
import telegramImage from "../../assets/image/footer/telegram.svg";
import whatsappImage from "../../assets/image/footer/whatsapp.svg";
import emailImage from "../../assets/image/footer/email.svg";
import codeWarsImage from "../../assets/image/footer/codewars.svg";
import gitHubImage from "../../assets/image/footer/github.svg";
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
    const codeWarslIcon = {
        backgroundImage: `url(${codeWarsImage})`
    }
    const gitHublIcon = {
        backgroundImage: `url(${gitHubImage})`
    }

    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Валерия Богатова</h2>
                <div className={s.footer}>
                    <div className={s.socialNetwork}>
                        <Link to={'https://t.me/ValeriaBog'} className={s.link}><div className={s.site} style={telegramIcon}></div></Link>
                        <Link to={'https://api.whatsapp.com/send?phone=79214356456'} className={s.link}><div className={s.site} style={whatsappIcon}></div></Link>
                        <Link to={'mailto:valeriabog@yandex.ru'} className={s.link}><div className={s.site} style={emailIcon}></div></Link>
                        <Link to={'https://www.codewars.com/users/ValeriaBog'} className={s.link}><div className={s.site} style={codeWarslIcon}></div></Link>
                        <Link to={'https://github.com/ValeriaBog'} className={s.link}><div className={s.site} style={gitHublIcon}></div></Link>
                    </div>
                    <div className={s.copyright}>© 2023 Все права защищены</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;