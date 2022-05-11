import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

let Dialogs = (props) => {

    let onDialogChange = (elem) => {
        let text = elem.target.value;
        props.updateNewMessageText(text)
    }

    let onSendMessage = () => {
        props.onSendMessage()
    }
    let state = props.dialogPage;
    debugger
    let newMessageText = state.newMessageText;
    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = state.messages.map(message => <Message message={message.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <div className={s.dialogTextArea}>
                    <textarea onChange={onDialogChange} placeholder={"Введите ваше сообщение..."} value={newMessageText}></textarea>
                </div>
                <div>
                    <button onClick={ onSendMessage } className={s.newMessageButton}>Отправить сообщение!</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;