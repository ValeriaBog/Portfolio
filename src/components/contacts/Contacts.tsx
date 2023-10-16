import React, {useRef, useState} from "react";
import s from './Contacts.module.scss'
import sContainer from '../../common/styles/Container.module.scss'
import TextField from "@mui/material/TextField";
import Title from "../../common/components/Title";
import emailjs from '@emailjs/browser';
import Snackbar from "@mui/material/Snackbar";
import {AlertProps} from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Contacts() {

    const form = useRef<any>();
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState('')

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_mvukwim', 'template_fhdxafb', form.current, 'wl_ZV2fs00BAeCV1i')
            .then((result) => {
                if (result.status === 200) {
                    setOpen(true)
                    setMessage('Message sent successfully')
                }
            }, () => {
                setOpen(true)
                setMessage('Some error occurred')
            });
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const stylesInputs = {
        "& .css-10botns-MuiInputBase-input-MuiFilledInput-input": {color: "rgb(255,255,255)"},
        "& .css-17qms1e": {color: "rgb(255,255,255)"},
        "& .css-16wsfxt": {color: "rgba(194,193,193,0.76)"},
        "& .css-1o7gkuu-MuiFormLabel-root-MuiInputLabel-root": {color: "rgba(194,193,193,0.76)"},
        "& .css-imrgth": {color: "rgba(194,193,193,0.76)"},
        "& .css-bpg8fg-MuiFormLabel-root-MuiInputLabel-root": {color: "rgba(194,193,193,0.76)"},
        "& .css-2bbgvg-MuiInputBase-root-MuiFilledInput-root:after": {borderBottom: "2px solid #ffb400"},
        "& .css-17qms1e::after": {borderBottom: "2px solid #ffb400"},
        "& .css-bpg8fg-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {color: "#ffb400"},
        "& .css-imrgth.Mui-focused": {color: "#ffb400"},

    };
    const stylesTextarea = {
        "& .css-k70mun-MuiInputBase-root-MuiFilledInput-root:after": {borderBottom: "2px solid #ffb400"},
        "& .css-m8qjwn::after": {borderBottom: "2px solid #ffb400"},
        "& .css-bpg8fg-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {color: "#ffb400"},
        "& .css-imrgth.Mui-focused": {color: "#ffb400"},
        "& .css-1o7gkuu-MuiFormLabel-root-MuiInputLabel-root": {color: "rgba(194,193,193,0.76)"},
        "& .css-16wsfxt": {color: "rgba(194,193,193,0.76)"},
        "& .css-imrgth": {color: "rgba(194,193,193,0.76)"},
        "& .css-bpg8fg-MuiFormLabel-root-MuiInputLabel-root": {color: "rgba(194,193,193,0.76)"},
        "& .css-k70mun-MuiInputBase-root-MuiFilledInput-root": {color: "rgb(255,255,255)"},
        "& .css-m8qjwn": {color: "rgb(255,255,255)"},

    };
    const stylesAlert = {
        ".css-1othqhp-MuiPaper-root-MuiAlert-root": {backgroundColor: "#ffb400"}
    }

    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`} id="contacts">
                <Title firstPartTitle={''} secondPartTitle={'Контакты'}/>
                <div className={s.contacts}>
                    <form className={s.form} onSubmit={sendEmail} ref={form}>
                        <TextField label="Имя"
                                   variant="filled"
                                   name={"user_name"}
                                   fullWidth
                                   color="warning"
                                   className={s.input}
                                   sx={stylesInputs}
                                   margin="dense"
                        />
                        <TextField label="Почта"
                                   variant="filled"
                                   fullWidth
                                   color="warning"
                                   className={s.input}
                                   sx={stylesInputs}
                                   margin="dense"
                                   name={"user_email"}
                        />
                        <TextField label="Ваши предложения..."
                                   variant="filled"
                                   fullWidth
                                   color="warning"
                                   className={s.input}
                                   sx={stylesTextarea}
                                   multiline
                                   rows={4}
                                   margin="dense"
                                   name={"message"}


                        />
                        <button className={s.button}>Отправить ✔</button>
                    </form>
                </div>
                <Snackbar open={open} onClose={handleClose} sx={stylesAlert}>
                    <Alert onClose={handleClose} severity="info">
                        {message}
                    </Alert>
                </Snackbar>
            </div>
        </div>
    );
}

export default Contacts;