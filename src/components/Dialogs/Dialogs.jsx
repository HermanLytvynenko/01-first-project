import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={props.id} className={(navData) => navData.isActive ? s.active : s.item}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Artur" id="2"/>
                <DialogItem name="Valeriy" id="3"/>
                <DialogItem name="Denis" id="4"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi, how are you? Props =)" />
                <Message message="How is your Samurai way?" />
                <Message message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, dolorum." />
                <Message message="Yo!" />
            </div>
        </div>
    )
}

export default Dialogs;