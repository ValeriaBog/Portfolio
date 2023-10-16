import React from "react";
import s from './Main.module.scss'
import sContainer from '../../common/styles/Container.module.scss'
import myPhotoImage from "../../assets/image/main/photo_main.jpg";


function Main() {

    const myPhoto = {
        backgroundImage: `url(${myPhotoImage})`
    }

    return (

        <div className={s.mainBlock} id="main">
            <div className={`${sContainer.container} ${s.container}`}>
                <div className={s.introduce}>
                    <span>Привет!</span>
                    <h1>Меня зовут <span>Валерия Богатова</span></h1>
                    <p className={s.info}><span className={s.mainInfo}><b>Front-end разработчик с двухлетним опытом разработки.</b></span> <br/> Имею опыт создания
                        <b> SPA</b>-приложений, используя <b>React, Redux, TypeScript</b>, а также <b>Angular</b>, которые адаптированы для
                        различных устройств и разрешений экранов. <br/><b>Оптимизирую производительность</b> веб-страниц, загрузку
                        ресурсов и управление состоянием. <br/>Эффективно <b>отлаживаю код и тестирую приложения</b>. <br/>Расширяю стек
                        новыми технологиями - разработка мобильных приложений (React Native).</p>
                </div>
                <div className={s.photo}>
                    <div className={s.image} style={myPhoto}></div>
                </div>
            </div>
        </div>

    );
}

export default Main;