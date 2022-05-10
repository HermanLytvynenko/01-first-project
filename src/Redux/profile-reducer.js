const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hello, world! This message from special function!.', likesCount: 23},
        {id: 2, message: 'My first message from State.JS', likesCount: 12},
        {id: 2, message: 'Coooool!!!', likesCount: 77},
    ],
    newPostText: '',
};

const profileRecuder = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0,
            };
            state.posts.push(newPost)
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }


}

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const addPostActionCreator = () => ({type: ADD_POST})

export default profileRecuder;