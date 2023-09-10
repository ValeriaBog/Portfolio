import React from "react";
import s from './MyWorks.module.scss'
import sContainer from '../../common/styles/Container.module.scss'
import MyWork from "./myWork/MyWork";
import Title from "../../common/components/Title";
import todoImage from '../../assets/image/works/todolists.jpg'
import socialImage from '../../assets/image/works/social-network.jpg'
import foodAppImage from '../../assets/image/works/foodApp.png'


function MyWorks() {

    const projects = {
        project1: {
            title: 'Social network',
            description: 'Asperiores cumque deleniti doloribus error excepturi fuga in ipsa laudantium libero!Asperiores cumque deleniti doloribus error excepturi fuga in ipsa laudantium libero!Asperiores cumque deleniti doloribus error excepturi fuga in ipsa laudantium libero!Asperiores cumque deleniti doloribus error excepturi fuga in ipsa laudantium libero!'
        },
        project2: {
            title: 'Todolists',
            description: 'Asperiores cumque deleniti doloribus error excepturi fuga in ipsa laudantium libero!Asperiores cumque deleniti doloribus error excepturi fuga in ipsa laudantium libero!Asperiores cumque deleniti doloribus error excepturi fuga in ipsa laudantium libero!'
        },
        project3: {
            title: 'Online food delivery',
            description: 'Asperiores cumque deleniti doloribus error excepturi fuga in ipsa laudantium libero!Asperiores cumque deleniti doloribus error excepturi fuga in ipsa laudantium libero!Asperiores cumque deleniti doloribus error excepturi fuga in ipsa laudantium libero!'
        },
    }

    const socialNetwork = {
        backgroundImage: `url(${socialImage})`
    }
    const todolists = {
        backgroundImage: `url(${todoImage})`
    }
    const foodDeliveryApp = {
        backgroundImage: `url(${foodAppImage})`
    }

    return (
        <div className={s.worksBlock} id="works">
            <div className={`${sContainer.container} ${s.worksContainer}`} >
                <Title firstPartTitle={'Мои'} secondPartTitle={'проекты'}/>
                <div className={s.works}>
                    <MyWork style={socialNetwork}
                            title={projects.project1.title}
                            description={projects.project1.description}/>
                    <MyWork style={todolists}
                            title={projects.project2.title}
                            description={projects.project2.description}/>
                    <MyWork style={foodDeliveryApp}
                            title={projects.project3.title}
                            description={projects.project3.description}/>
                </div>
            </div>
        </div>
    );
}

export default MyWorks;