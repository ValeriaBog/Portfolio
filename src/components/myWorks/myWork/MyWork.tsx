import React from "react";
import s from './MyWork.module.scss'

type MyWorkType = {
    title: string
    description: string
    style: {
        backgroundImage: string
    }
}

function MyWork(props: MyWorkType) {
    return (
        <div className={s.work} >
            <div className={s.image} style={props.style}>
                <button className={s.button}>Смотреть</button>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.title}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
}

export default MyWork;