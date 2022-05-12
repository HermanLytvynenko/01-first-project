import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: () => {
            // (!state.dialogPage.newMessageText) ? alert('Строка не может быть пустая!') :
            dispatch(sendMessageActionCreator());
        },
        updateNewMessageText: (text) => {
            let action = updateNewMessageTextActionCreator(text)
            dispatch(action)
        },
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;