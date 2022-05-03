import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

let Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Artur'},
        {id: 3, name: 'Valeriy'},
        {id: 4, name: 'Denis'},
    ]
    let messages = [
        {id: 1, message: 'Hi, how are you? Props =)'},
        {id: 2, message: 'How is your Samurai way?'},
        {id: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, dolorum.'},
        {id: 4, message: 'Yo!'},
    ]

    let dialogsElements = dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = messages
        .map(message => <Message message={message.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;