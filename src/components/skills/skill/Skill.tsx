import React from "react";
import s from './Skill.module.scss'

type SkillType={
    title: string
    description: string
    style:{
        backgroundImage:string
    }
}

function Skill(props: SkillType) {
    return (
        <div className={s.skill}>
            <div style={props.style} className={s.icon}></div>
            <h3 className={s.title}>{props.title}</h3>
            {/*<span className={s.description}>{props.description}</span>*/}
        </div>
    );
}

export default Skill;