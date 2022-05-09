import React from "react";
import s from './NewPost.module.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/State";

const NewPost = (props) => {

    let newPostMessageText = props.newPostText;

    let addPost = () => {
        (!newPostMessageText) ? alert('Строка не может быть пустая!') : props.dispatch(addPostActionCreator());
        debugger
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }

    return (
        <div className={s.NewPostBlock}>
            <h3>
                My posts:
            </h3>
            <div className={s.newPost}>
                <div>
                    <textarea onChange={onPostChange} placeholder={"Пиши свой пост сюда! =)"} value={newPostMessageText}/>
                </div>
                <button className={s.newPostButton} onClick={ addPost }>
                    Отправить!
                </button>
            </div>
        </div>
    )
}

export default NewPost;

