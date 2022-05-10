const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Artur'},
        {id: 3, name: 'Valeriy'},
        {id: 4, name: 'Denis'},
    ],
    messages: [
        {id: 1, message: 'Hi, how are you? Props from State.JS =)'},
        {id: 2, message: 'How is your Samurai way?'},
        {id: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, dolorum.'},
        {id: 4, message: 'Yo!'},
    ],
    newMessageText: '',
};

const dialogsRecuder = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.textOfMessage
            return state;
        case SEND_MESSAGE:
            let newMessage = {
                id: 5, message: state.newMessageText
            };
            state.messages.push(newMessage)
            state.newMessageText = '';
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, textOfMessage: text})

export default dialogsRecuder;