import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) =>  {
                    let state = store.getState();


                    let onDialogChange = (text) => {
                        let action = updateNewMessageTextActionCreator(text)
                        store.dispatch(action)
                    }

                    let onSendMessage = () => {
                        (!state.dialogPage.newMessageText) ? alert('Строка не может быть пустая!') : store.dispatch(sendMessageActionCreator());
                    }
                    return <Dialogs dialogPage={store.getState().dialogPage}
                                    onSendMessage={onSendMessage}
                             updateNewMessageText={onDialogChange}/>
            }
        }
        </StoreContext.Consumer>)
}

export default DialogsContainer;