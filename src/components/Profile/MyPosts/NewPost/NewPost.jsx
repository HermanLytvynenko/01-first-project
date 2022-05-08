import React from "react";
import s from './NewPost.module.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/State";

const NewPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        (!text) ? alert('Строка не может быть пустая!') : props.dispatch(addPostActionCreator());
        newPostElement.current.value = '';
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
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
                    <textarea onChange={onPostChange} ref={newPostElement} placeholder={"Пиши свой пост сюда! =)"} value={props.newPostText}/>
                </div>
                <button className={s.newPostButton} onClick={ addPost }>
                    Отправить!
                </button>
            </div>
        </div>
    )
}

export default NewPost;

