import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

let newMessageElement = React.createRef();
let newMessage = () => {
    let text = newMessageElement.current.value;
    alert(text)
}

let Dialogs = (props) => {

debugger;
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
                <textarea ref={newMessageElement} placeholder={"Введите ваше сообщение..."}></textarea>
            </div>
            <div>
                <button onClick={newMessage} className={s.newMessageButton}>Отправить сообщение!</button>
            </div>
        </div>
    )
}

export default Dialogs;