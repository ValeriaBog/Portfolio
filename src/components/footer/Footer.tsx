import React from "react";
import s from './Footer.module.scss'
import sContainer from '../../common/styles/Container.module.scss'
import telegramImage from "../../assets/image/footer/telegram.svg";
import whatsappImage from "../../assets/image/footer/whatsapp.svg";
import vkImage from "../../assets/image/footer/vk.svg";
import {Link} from "react-router-dom";


function Footer() {

    const telegramIcon = {
        backgroundImage: `url(${telegramImage})`
    }
    const whatsappIcon = {
        backgroundImage: `url(${whatsappImage})`
    }
    const vkIcon = {
        backgroundImage: `url(${vkImage})`
    }

    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Валерия</h2>
                <div className={s.footer}>
                    <div className={s.socialNetwork}>
                        <Link to={'/'}><div className={s.site} style={telegramIcon}></div></Link>
                        <Link to={'/'}><div className={s.site} style={whatsappIcon}></div></Link>
                        <Link to={'/'}><div className={s.site} style={vkIcon}></div></Link>
                    </div>
                    <div className={s.copyright}>© 2023 Все права защищены</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;