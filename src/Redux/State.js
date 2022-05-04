
let state = {
    dialogPage: {
        dialogs : [
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
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hello, world! This message from special function!.', likesCount: 23},
            {id: 2, message: 'My first message from State.JS', likesCount: 12},
            {id: 2, message: 'Coooool!!!', likesCount: 77},
        ],
    },



}

export default state;