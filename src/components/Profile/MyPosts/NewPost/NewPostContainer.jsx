import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/profile-reducer";
import NewPost from "./NewPost";

const NewPostContainer = (props) => {

    let newPostMessageText = props.newPostText;

    let addPost = () => {
        (!newPostMessageText) ? alert('Строка не может быть пустая!') : props.dispatch(addPostActionCreator());
        debugger
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }

    return (<NewPost updateNewPostText={onPostChange} addNewPost={addPost} newPostMessageText2={props.newPostText}/>)
}

export default NewPostContainer;

