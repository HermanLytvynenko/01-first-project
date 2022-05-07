
let indexRerender;

let state = {
    dialogPage: {
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
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hello, world! This message from special function!.', likesCount: 23},
            {id: 2, message: 'My first message from State.JS', likesCount: 12},
            {id: 2, message: 'Coooool!!!', likesCount: 77},
        ],
    },
    friendBlockList: {
        friendsList: [
            {
                id: 1,
                friendImg: 'https://w7.pngwing.com/pngs/193/660/png-transparent-computer-icons-woman-avatar-avatar-girl.png',
                friendName: 'Masha'
            },
            {
                id: 2,
                friendImg: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
                friendName: "Alex"
            },
            {
                id: 2,
                friendImg: 'https://w7.pngwing.com/pngs/178/419/png-transparent-man-illustration-computer-icons-avatar-login-user-avatar-child-web-design-face.png',
                friendName: "Dimych"
            },
        ],
    }


}

export let addPost = (postMessage) => {
    let newPost = {
        id: 4,
        message: postMessage,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost)
    indexRerender(state)

}
    export let updateNewPostText = (newText) => {
    state.profilePage.NewPostText = newText;
        indexRerender(state)
}

export const subscribe = (observer) => {
    indexRerender = observer;
}

export default state;