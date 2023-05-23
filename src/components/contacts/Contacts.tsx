import React from "react";
import s from './Contacts.module.css'
import sContainer from './../../common/styles/Container.module.css'


function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Контакты</h2>
                <div className={s.contacts}>
                    <form className={s.form}>
                        <input type="text" className={s.input}/>
                        <input type="text" className={s.input}/>
                        <textarea name="" id=""></textarea>
                    </form>
                    <button className={s.button}>Отправить</button>
                </div>
            </div>
        </div>
    );
}

export default Contacts;