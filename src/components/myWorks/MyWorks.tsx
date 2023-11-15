import React from "react";
import s from './MyWorks.module.scss'
import sContainer from '../../common/styles/Container.module.scss'
import MyWork from "./myWork/MyWork";
import Title from "../../common/components/Title";
import todoImage from '../../assets/image/works/taskManager.png'
import socialImage from '../../assets/image/works/social-network.jpg'
import foodAppImage from '../../assets/image/works/foodApp.png'
import flashCardsImage from '../../assets/image/works/FlashCards.png'


function MyWorks() {

    const projects = {
        project1: {
            title: 'Intgram',
            mainDescription: 'Intgram - приложение социальной сети, где пользователи могут размещать посты на стене, редактировать профиль, подписаться на своих друзей и тд.',
            stackDescription: 'TS, React, Redux , Redux-Form, Redux-Thunk, React Router, Axios, Jest.',
            listDescription: {
                1: 'Разработала приложение с использованием классовых компонентов.',
                2: 'Декомпозировала компоненты.',
                3: 'Разработала систему регистрации: создание и валидация форм.',
                4: 'Применила Отложенную загрузку React.lazy и Suspense для сложных компонент для повышения производительности.',
            },
            link: 'https://valeriabog.github.io/Updated-Social-Network/'
        },
        project2: {
            title: 'Trello',
            mainDescription: 'Trello - приложение для создания, организации и управления задачами и списками дел.',
            stackDescription: 'TS, React, Redux Toolkit, Redux-thunk, React Router, Axios, Formik, MUI, Jest.',
            listDescription: {
                1: 'Разработала приложение, используя трехуровневую архитектуру: UI-BLL-DAL.',
                2: 'Разработала систему регистрации: создание и валидация форм.',
                3: 'Внедрила стейт-менеджмент, где хранятся данные об инициализации приложения, статусе загрузки данных с сервера и тд.',
                4: 'Покрыла код unit-тестами.',
            },
            link: 'https://task-manager-update.vercel.app/'
        },
        project3: {
            title: 'Online food delivery',
            mainDescription: 'Online food delivery - приложение для онлайн-заказа готовой продукции.',
            stackDescription: 'TS, Angular, Nestjs, RxJS, Prime NG, MongoDB.',
            listDescription: {
                1: 'Разработала системы аутентификации и авторизации пользователей, а также личный кабинет с информацией о пользователе.',
                2: 'Осуществила выгрузку информации о товарах из БД для карточек товаров, фильтрация и поиск для удобства пользователя.',
                3: 'Внедрила проверку на серверной части с применением библиотеки Mongoose введенной информации(логин/пароль) пользователем при авторизации(поиск пользователя в БД и сверка полученных данных с данными из БД) и аутентификации(поиск в БД пользователя с такими же данными).',
            },
            link: 'https://github.com/ValeriaBog/Online-ready-to-eat-delivery-service-frontend.git'
        },
        project4: {
            title: 'Flash cards',
            mainDescription: 'Flash cards - набор карточек, которые используются для обучения и меморизации информации.',
            stackDescription: 'TS, React, RTK Query, React Router, Radix, React Hook Form, Storybook.',
            listDescription: {
                1: 'Разработала библиотеку для быстрого создания веб-приложений из шаблонных блоков кода с гибкой настройкой, протестировав с помощью Storybook.',
                2: 'Применила концепцию Optimistic Updates, что позволило создать плавные переходы и избежать ощущения задержки при обновлении данных на сервере.',
                3: 'Интегрировала систему аутентификации и авторизации.',
            },
            link: 'https://fc4.vercel.app/'
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
    const flashCards = {
        backgroundImage: `url(${flashCardsImage})`
    }

    return (
        <div className={s.worksBlock} id="works">
            <div className={`${sContainer.container} ${s.worksContainer}`}>
                <Title firstPartTitle={'Мои'} secondPartTitle={'проекты'}/>
                <div className={s.works}>
                    <MyWork style={flashCards}
                            title={projects.project4.title}
                            mainDescription={projects.project4.mainDescription}
                            stackDescription={projects.project4.stackDescription}
                            listDescription={projects.project4.listDescription}
                            link={projects.project4.link}/>
                    <MyWork style={socialNetwork}
                            title={projects.project1.title}
                            mainDescription={projects.project1.mainDescription}
                            stackDescription={projects.project1.stackDescription}
                            listDescription={projects.project1.listDescription}
                            link={projects.project1.link}/>
                    <MyWork style={todolists}
                            title={projects.project2.title}
                            mainDescription={projects.project2.mainDescription}
                            stackDescription={projects.project2.stackDescription}
                            listDescription={projects.project2.listDescription}
                            link={projects.project2.link}/>
                    <MyWork style={foodDeliveryApp}
                            title={projects.project3.title}
                            mainDescription={projects.project3.mainDescription}
                            stackDescription={projects.project3.stackDescription}
                            listDescription={projects.project3.listDescription}
                            link={projects.project3.link}/>
                </div>
            </div>
        </div>
    );
}

export default MyWorks;