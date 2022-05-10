import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/profile-reducer";
import NewPost from "./NewPost";

const NewPostContainer = (props) => {
    let state = props.store.getState();

    let newPostMessageText = state.profilePage.newPostText;

    let addPost = () => {
        (!newPostMessageText) ? alert('Строка не может быть пустая!') : props.store.dispatch(addPostActionCreator());
        debugger
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }

    return (<NewPost updateNewPostText={onPostChange} addNewPost={addPost} newPostMessageText2={newPostMessageText}/>)
}

export default NewPostContainer;

