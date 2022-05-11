import React from "react";
import s from "./Dialogs.module.css";

let Dialogs = (props) => {

    let onDialogChange = (elem) => {
        let text = elem.target.value;
        props.updateNewMessageText(text)
    }

    let onSendMessage = () => {
        props.onSendMessage()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsElements}
            </div>
            <div className={s.messages}>
                {props.messagesElements}
            </div>
            <div>
                <div className={s.dialogTextArea}>
                    <textarea onChange={onDialogChange} placeholder={"Введите ваше сообщение..."} value={props.newDialogMessageText}></textarea>
                </div>
                <div>
                    <button onClick={ onSendMessage } className={s.newMessageButton}>Отправить сообщение!</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;