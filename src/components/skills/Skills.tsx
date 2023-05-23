import React from "react";
import s from './Skills.module.css'
import sContainer from './../../common/styles/Container.module.css'
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Мои скиллы</h2>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Asperiores cumque deleniti doloribus error excepturi fuga in ipsa laudantium libero!'}/>
                    <Skill title={'HTML'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Skill title={'REACT'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Asperiores n ipsa laudantium libero!'}/>
                    <Skill title={'REDUX'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;