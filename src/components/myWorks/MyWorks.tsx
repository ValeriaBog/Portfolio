import React from "react";
import s from './MyWorks.module.css'
import sContainer from './../../common/styles/Container.module.css'
import MyWork from "./myWork/MyWork";


function MyWorks() {
    return (
        <div className={s.worksBlock}>
            <div className={`${sContainer.container} ${s.worksContainer}`}>
                <h2 className={s.title}>My Works</h2>
                <div className={s.works}>
                    <MyWork title={'Название проекта'} description={'Asperiores cumque deleniti doloribus error excepturi fuga in ipsa laudantium libero!Asperiores cumque deleniti doloribus error excepturi fuga in ipsa laudantium libero!Asperiores cumque deleniti doloribus error excepturi fuga in ipsa laudantium libero!Asperiores cumque deleniti doloribus error excepturi fuga in ipsa laudantium libero!'}/>
                    <MyWork title={'Название проекта'} description={'Asperiores cumque deleniti doloribus error excepturi fuga in ipsa laudantium libero!Asperiores cumque deleniti doloribus error excepturi fuga in ipsa laudantium libero!Asperiores cumque deleniti doloribus error excepturi fuga in ipsa laudantium libero!Asperiores cumque deleniti doloribus error excepturi fuga in ipsa laudantium libero!Asperiores cumque deleniti doloribus error excepturi fuga in ipsa laudantium libero!'}/>
                </div>
            </div>
        </div>
    );
}

export default MyWorks;