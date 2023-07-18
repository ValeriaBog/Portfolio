import React from "react";
import s from './Title.module.scss'

type PropsTypeTitle={
    firstPartTitle: string
    secondPartTitle: string
}

function Title({firstPartTitle, secondPartTitle}: PropsTypeTitle) {
    return (
                <div className={s.title}>
                    <h2>{firstPartTitle} <span>{secondPartTitle}</span></h2>
                </div>
    );
}

export default Title;