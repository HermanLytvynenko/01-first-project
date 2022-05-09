const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsRecuder = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.textOfMessage
            break;
        case SEND_MESSAGE:
            let newMessage = {
                id: 5, message: state.newMessageText
            };
            state.messages.push(newMessage)
            state.newMessageText = '';
            break;
    }
    return state;
}

export default dialogsRecuder;