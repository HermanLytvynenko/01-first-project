import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/profile-reducer";
import NewPost from "./NewPost";
import StoreContext from "../../../../StoreContext";

const NewPostContainer = () => {

    return (
        <StoreContext.Consumer>
            {

                (store) => {
                    debugger
                    let state = store.getState();
                    let newPostMessageText = state.profilePage.newPostText;
                    let addPost = () => {
                        (!newPostMessageText) ? alert('Строка не может быть пустая!') : store.dispatch(addPostActionCreator());
                    }

                    let onPostChange = (text) => {
                        let action = updateNewPostTextActionCreator(text)
                        store.dispatch(action)
                    }

                    return <NewPost updateNewPostText={onPostChange}
                                    addNewPost={addPost}
                                    newPostMessageText2={newPostMessageText}/>
                }
            }
        </StoreContext.Consumer>)
}

export default NewPostContainer;

