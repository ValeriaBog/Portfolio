import React from "react";
import s from './Contacts.module.scss'
import sContainer from '../../common/styles/Container.module.scss'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import SendIcon from '@mui/icons-material/Send';
import Title from "../../common/components/Title";
import {styled} from "@mui/system";



function Contacts() {

    const styles={
        "& .css-10botns-MuiInputBase-input-MuiFilledInput-input": {color: "rgb(255,255,255)"},
        "& .css-1o7gkuu-MuiFormLabel-root-MuiInputLabel-root": {color:"rgba(194,193,193,0.76)"},
        "& .css-2bbgvg-MuiInputBase-root-MuiFilledInput-root:after": {borderBottom:"2px solid #ffb400"},
        "& .css-bpg8fg-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {color:"#ffb400"},

    };
    // const textarea = {
    //     "& .css-k70mun-MuiInputBase-root-MuiFilledInput-root:after": {borderBottom:"2px solid #ffb400"},
    //     "& .css-bpg8fg-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {color:"#ffb400"},
    //     "& .css-1o7gkuu-MuiFormLabel-root-MuiInputLabel-root": {color:"rgba(194,193,193,0.76)"},
    //     "& .css-k70mun-MuiInputBase-root-MuiFilledInput-root": {color: "rgb(255,255,255)"},
    //
    // };


    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <Title firstPartTitle={''} secondPartTitle={'Контакты'}/>
                <div className={s.contacts}>
                    <form className={s.form}>
                        <TextField label="Имя"
                                   variant="filled"
                                   fullWidth
                                   color="warning"
                                   className={s.input}
                                    sx={styles}
                                   margin="dense"
                        />
                        <TextField label="Номер телефона"
                                   variant="filled"
                                   fullWidth
                                   color="warning"
                                   className={s.input}
                                   // sx={styles}
                                   margin="dense"
                        />
                        <TextField label="Введите текст..."
                                   variant="filled"
                                   fullWidth
                                   color="warning"
                                   className={s.input}
                                   sx={{"& .css-k70mun-MuiInputBase-root-MuiFilledInput-root:after": {borderBottom:"2px solid #ffb400"}}}
                                   multiline
                                   rows={4}
                                   margin="dense"

                        />
                        <Button variant="outlined"  className={s.button}>
                            Отправить
                        </Button>
                    </form>
                    {/*<button className={s.button}>Отправить</button>*/}
                </div>
            </div>
        </div>
    );
}

export default Contacts;