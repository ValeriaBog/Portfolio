import React from "react";
import s from './Skills.module.scss'
import sContainer from '../../common/styles/Container.module.scss'
import Skill from "./skill/Skill";
import Title from "../../common/components/Title";
import jsImage from "../../assets/image/skills/js.svg";
import reactImage from "../../assets/image/skills/react.svg";
import htmlImage from "../../assets/image/skills/html.svg";
import reduxImage from "../../assets/image/skills/redux.svg";
import cssImage from "../../assets/image/skills/css.svg";
import angularImage from "../../assets/image/skills/angular.svg";
import nestImage from "../../assets/image/skills/nestjs.svg";
import tsImage from "../../assets/image/skills/typescript.svg";
import sassImage from "../../assets/image/skills/sass.svg";


function Skills() {

    const skills = {
        skill1: {
            title: 'JS',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        skill2: {
            title: 'HTML',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        skill3: {
            title: 'React',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        skill4: {
            title: 'REDUX',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        skill5: {
            title: 'CSS',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        skill6: {
            title: 'Angular',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        skill7: {
            title: 'Nestjs',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        skill8: {
            title: 'TS',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        skill9: {
            title: 'Sass',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
    }

    const jsIcon = {
        backgroundImage: `url(${jsImage})`
    }
    const htmlIcon = {
        backgroundImage: `url(${htmlImage})`
    }
    const reactIcon = {
        backgroundImage: `url(${reactImage})`
    }
    const reduxIcon = {
        backgroundImage: `url(${reduxImage})`
    }
    const cssIcon = {
        backgroundImage: `url(${cssImage})`
    }
    const angularIcon = {
        backgroundImage: `url(${angularImage})`
    }
    const nestIcon = {
        backgroundImage: `url(${nestImage})`
    }
    const tsIcon = {
        backgroundImage: `url(${tsImage})`
    }
    const sassIcon = {
        backgroundImage: `url(${sassImage})`
    }

    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Title firstPartTitle={'Мои'} secondPartTitle={'скиллы'}/>
                <div className={s.skills}>
                    <Skill style={jsIcon}
                           title={skills.skill1.title}
                           description={skills.skill1.description}/>
                    <Skill style={htmlIcon}
                           title={skills.skill2.title}
                           description={skills.skill2.description}/>
                    <Skill style={reactIcon}
                           title={skills.skill3.title}
                           description={skills.skill3.description}/>
                    <Skill style={reduxIcon}
                           title={skills.skill4.title}
                           description={skills.skill4.description}/>
                    <Skill style={cssIcon}
                           title={skills.skill5.title}
                           description={skills.skill5.description}/>
                    <Skill style={angularIcon}
                           title={skills.skill6.title}
                           description={skills.skill6.description}/>
                    <Skill style={nestIcon}
                           title={skills.skill7.title}
                           description={skills.skill7.description}/>
                    <Skill style={tsIcon}
                           title={skills.skill8.title}
                           description={skills.skill8.description}/>
                    <Skill style={sassIcon}
                           title={skills.skill9.title}
                           description={skills.skill9.description}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;