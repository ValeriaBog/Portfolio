import React from 'react';
import s from './App.module.css';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Skills from "./components/skills/Skills";
import MyWorks from "./components/myWorks/MyWorks";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className={s.App}>
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
