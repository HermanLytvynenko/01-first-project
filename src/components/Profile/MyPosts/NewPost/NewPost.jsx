import React from "react";
import s from './NewPost.module.css'

const NewPost = (props) => {

    let newPostMessageText = props.newPostMessageText2;

    let onAddPost = () => {
        props.addNewPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text)
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
                <button className={s.newPostButton} onClick={ onAddPost }>
                    Отправить!
                </button>
            </div>
        </div>
    )
}

export default NewPost;

