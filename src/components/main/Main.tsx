import React from "react";
import s from './Main.module.css'
import sContainer from './../../common/styles/Container.module.css'


function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.introduce}>
                    <span>Привет!</span>
                    <h1>Меня зовут Валерия Богатова</h1>
                    <p>Я Front-end разработчик.</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
}

export default Main;