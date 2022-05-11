import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) =>  {
                    let state = store.getState();
                    let newMessageText = state.dialogPage.newMessageText;
                    let dialogsElements = state.dialogPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
                    let messagesElements = state.dialogPage.messages.map(message => <Message message={message.message}/>);

                    let onDialogChange = (text) => {
                        let action = updateNewMessageTextActionCreator(text)
                        store.dispatch(action)
                    }

                    let onSendMessage = () => {
                        (!newMessageText) ? alert('Строка не может быть пустая!') : store.dispatch(sendMessageActionCreator());
                    }
                    return <Dialogs onSendMessage={onSendMessage}
                             updateNewMessageText={onDialogChange}
                             newDialogMessageText={newMessageText}
                             dialogsElements={dialogsElements}
                             messagesElements={messagesElements}/>
            }
        }
        </StoreContext.Consumer>)
}

export default DialogsContainer;