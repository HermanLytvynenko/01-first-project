import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/profile-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostMessageText2: state.profilePage.newPostText,
        posts: state.profilePage.posts,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => {
            // (!state.dialogPage.newMessageText) ? alert('Строка не может быть пустая!') :
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        },
    }
}

const NewPostContainer = connect(mapStateToProps,mapDispatchToProps)(NewPost)

export default NewPostContainer;

