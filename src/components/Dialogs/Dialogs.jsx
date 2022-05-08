import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/State";

let newMessageElement = React.createRef();

let Dialogs = (props) => {

    let onDialogChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreator(text)
        props.dispatch(action)
    }

    let sendMessage = () => {
        let text = newMessageElement.current.value;
        (!text) ? alert('Строка не может быть пустая!') : props.dispatch(sendMessageActionCreator());
        newMessageElement.current.value = '';
    }

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.state.messages.map(message => <Message message={message.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.dialogTextArea}>
                <textarea onChange={onDialogChange} ref={newMessageElement} placeholder={"Введите ваше сообщение..."} value={props.newMessageText}></textarea>
            </div>
            <div>
                <button onClick={ sendMessage } className={s.newMessageButton}>Отправить сообщение!</button>
            </div>
        </div>
    )
}

export default Dialogs;