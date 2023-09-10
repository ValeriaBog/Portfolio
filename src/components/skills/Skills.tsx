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
import MUIImage from "../../assets/image/skills/MUI.png";
import axiosImage from "../../assets/image/skills/axios.svg";
import styledComponentsImage from "../../assets/image/skills/styledComponents.svg";
import formikImage from "../../assets/image/skills/formik.svg";
import jestImage from "../../assets/image/skills/jest.svg";
import storybookImage from "../../assets/image/skills/storybook-icon.svg";
import gitImage from "../../assets/image/skills/github.svg";
import postmanImage from "../../assets/image/skills/postman.svg";
import mongoDBImage from "../../assets/image/skills/mongodb-original-wordmark.svg";


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
        skill10: {
            title: 'Axios',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        skill11: {
            title: 'Material UI',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        skill12: {
            title: 'Styled Components',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        skill13: {
            title: 'Formik',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        skill14: {
            title: 'Jest',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        skill15: {
            title: 'Storybook',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        skill16: {
            title: 'Git',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        skill17: {
            title: 'Postman',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        skill18: {
            title: 'MongoDB',
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
    const axiosIcon = {
        backgroundImage: `url(${axiosImage})`
    }
    const MUIIcon = {
        backgroundImage: `url(${MUIImage})`
    }
    const styledComponentsIcon = {
        backgroundImage: `url(${styledComponentsImage})`
    }
    const formikIcon = {
        backgroundImage: `url(${formikImage})`
    }
    const jestIcon = {
        backgroundImage: `url(${jestImage})`
    }
    const storybookIcon = {
        backgroundImage: `url(${storybookImage})`
    }
    const gitIcon = {
        backgroundImage: `url(${gitImage})`
    }
    const postmanIcon = {
        backgroundImage: `url(${postmanImage})`
    }
    const mongoDBIcon = {
        backgroundImage: `url(${mongoDBImage})`
    }


    return (
        <div className={s.skillsBlock} id="skills">
            <div className={`${sContainer.container} ${s.skillsContainer}`} >
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
                    <Skill style={axiosIcon}
                           title={skills.skill10.title}
                           description={skills.skill10.description}/>
                    <Skill style={MUIIcon}
                           title={skills.skill11.title}
                           description={skills.skill11.description}/>
                    <Skill style={styledComponentsIcon}
                           title={skills.skill12.title}
                           description={skills.skill12.description}/>
                    <Skill style={formikIcon}
                           title={skills.skill13.title}
                           description={skills.skill13.description}/>
                    <Skill style={jestIcon}
                           title={skills.skill14.title}
                           description={skills.skill14.description}/>
                    <Skill style={storybookIcon}
                           title={skills.skill15.title}
                           description={skills.skill15.description}/>
                    <Skill style={gitIcon}
                           title={skills.skill16.title}
                           description={skills.skill16.description}/>
                    <Skill style={postmanIcon}
                           title={skills.skill17.title}
                           description={skills.skill17.description}/>
                    <Skill style={mongoDBIcon}
                           title={skills.skill18.title}
                           description={skills.skill18.description}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;