import React from "react";
import s from './NewPost.module.css'

const NewPost = () => {



    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    }


    return (
        <div className={s.NewPostBlock}>
            <h3>
                My posts:
            </h3>
            <div className={s.newpost}>
                <div>
                    <textarea ref={newPostElement} placeholder={"Пиши свой пост сюда! =)"}></textarea>
                </div>
                <button className={s.newPostButton} onClick={ addPost }>
                    Отправить!
                </button>
            </div>
        </div>
    )
}

export default NewPost;

