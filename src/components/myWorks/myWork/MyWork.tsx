import React from "react";
import s from './MyWork.module.css'

type MyWorkType={
    title: string
    description: string
}

function MyWork(props: MyWorkType) {
    return (
        <div className={s.work}>
            <div className={s.image}>
                <button className={s.button}>Смотреть</button>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
}

export default MyWork;