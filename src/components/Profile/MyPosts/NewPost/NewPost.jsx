import React from "react";
import s from './NewPost.module.css'

const NewPost = () => {
    return (
        <div className={s.NewPostBlock}>
            <h3>
                My posts:
            </h3>
            <div className={s.newpost}>
                <div>
                    <textarea className={s.newpost__text} placeholder="Текст нового поста..."> </textarea>
                </div>
                <button className={s.newpost__button}>
                    Отправить!
                </button>
            </div>
        </div>
    )
}

export default NewPost;

