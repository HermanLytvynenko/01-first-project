import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/State";


let Dialogs = (props) => {

    let onDialogChange = (e) => {
        let text = e.target.value;
        let action = updateNewMessageTextActionCreator(text)
        props.dispatch(action)
    }

    let sendMessage = () => {
        (!newMessageText) ? alert('Строка не может быть пустая!') : props.dispatch(sendMessageActionCreator());
    }

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let newMessageText = props.state.newMessageText;
    let messagesElements = props.state.messages.map(message => <Message message={message.message}/>);
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
                    <button onClick={ sendMessage } className={s.newMessageButton}>Отправить сообщение!</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;