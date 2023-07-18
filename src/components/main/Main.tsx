import React from "react";
import s from './Main.module.scss'
import sContainer from '../../common/styles/Container.module.scss'
import myPhotoImage from "../../assets/image/main/myPhoto.jpeg";


function Main() {

    const myPhoto={
        backgroundImage: `url(${myPhotoImage})`
    }

    return (
        <div className={s.mainBlock}>
            <div className={`${sContainer.container} ${s.container}`}>
                <div className={s.introduce}>
                    <span>Привет!</span>
                    <h1>Меня зовут Валерия Богатова</h1>
                    <p>Я Front-end разработчик.</p>
                </div>
                <div className={s.photo} style={myPhoto}></div>
            </div>
        </div>
    );
}

export default Main;