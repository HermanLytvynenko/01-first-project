import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>Dimych</div>
                <div className={s.dialog}>Artur</div>
                <div className={s.dialog}>Valerii</div>
                <div className={s.dialog}>Denis</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>How is your Samurai way?</div>
                <div className={s.message}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, dolorum.</div>
            </div>
        </div>
    )
}

export default Dialogs;