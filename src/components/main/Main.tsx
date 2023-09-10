import React from "react";
import s from './Main.module.scss'
import sContainer from '../../common/styles/Container.module.scss'
import myPhotoImage from "../../assets/image/main/myPhoto.jpeg";


function Main() {

    const myPhoto = {
        backgroundImage: `url(${myPhotoImage})`
    }

    return (

        <div className={s.mainBlock} id="main">
                <div className={`${sContainer.container} ${s.container}`} >
                    <div className={s.introduce}>
                        <span>Привет!</span>
                        <h1>Меня зовут <span>Валерия Богатова</span></h1>
                        <p>Я Front-end разработчик.</p>
                        <p className={s.info}>Имею опыт создания SPA-приложений, используя React, Redux,
                            TypeScript. <br/>  Сейчас я совершенствую свои навыки в этом направлении,
                            а также расширяю свой экспертный горизонт новыми технологиями.
                            В свободное время читаю Дэвида Флэнаган - "JS. Подробное руководство",
                            повышаю свой английский (уровень владения B1 - Intermediate). Открыта для ваших предложений.</p>
                    </div>
                    <div className={s.photo}>
                        <div className={s.image} style={myPhoto}></div>
                    </div>
                </div>
        </div>

    );
}

export default Main;