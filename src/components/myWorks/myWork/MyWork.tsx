import React from "react";
import s from './MyWork.module.scss'
import {Link} from "react-router-dom";

type MyWorkType = {
    title: string
    mainDescription: string
    stackDescription: string
    listDescription:{
        1: string,
        2?: string
        3?: string,
        4?: string,
        5?: string,
    }
    style: {
        backgroundImage: string
    }
    link: string
}

function MyWork(props: MyWorkType) {


    return (
        <div className={s.work} >
            <div className={s.image} style={props.style}>
                <Link className={s.button} to={props.link} >Смотреть</Link>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.title}>{props.title}</h3>
                <div className={s.containerDescription}>
                    <span className={s.description}>{props.mainDescription}</span> <br/>
                    <span className={s.description}>Стек: {props.stackDescription}</span> <br/>
                    {/*<span className={s.description}>{props.listDescription}</span>*/}
                    <ul className={s.lists}>
                        <li className={s.list}>{props.listDescription["1"]}</li>
                        {props.listDescription["2"] &&<li className={s.list}>{props.listDescription["2"]}</li>}
                        {props.listDescription["3"] &&<li className={s.list}>{props.listDescription["3"]}</li>}
                        {props.listDescription["4"] &&<li className={s.list}>{props.listDescription["4"]}</li>}
                        {props.listDescription["5"] && <li className={s.list}>{props.listDescription["5"]}</li>}
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default MyWork;