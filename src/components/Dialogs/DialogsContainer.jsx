import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const DialogsContainer = (props) => {
    let state = props.store.getState();

    let newMessageText = state.dialogPage.newMessageText;
    let dialogsElements = state.dialogPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = state.dialogPage.messages.map(message => <Message message={message.message}/>);

    let onDialogChange = (text) => {
        let action = updateNewMessageTextActionCreator(text)
        props.store.dispatch(action)
    }

    let onSendMessage = () => {
        (!newMessageText) ? alert('Строка не может быть пустая!') : props.store.dispatch(sendMessageActionCreator());
    }

    return (<Dialogs onSendMessage={onSendMessage} updateNewMessageText={onDialogChange} newDialogMessageText={newMessageText} dialogsElements={dialogsElements} messagesElements={messagesElements}/>)
}

export default DialogsContainer;