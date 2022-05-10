import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/profile-reducer";
import NewPost from "./NewPost";

const NewPostContainer2 = (props) => {
    let newPostMessageText = props.store.profilePage.newPostText;
    debugger

        let addPost = () => {
        (!newPostMessageText) ? alert('Строка не может быть пустая!') : props.store.dispatch(addPostActionCreator());
    }

        let onPostChangeText = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }
    return (<NewPost onPostChangeText={onPostChangeText} addPost={addPost} newPostText={newPostMessageText} />)

}

export default NewPostContainer2;

