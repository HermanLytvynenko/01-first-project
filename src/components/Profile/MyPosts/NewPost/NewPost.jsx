import React from "react";
import s from './NewPost.module.css'

const NewPost = () => {
    return (
        <div className={s.NewPostBlock}>
            <div className={s.newpost}>
                <textarea className={s.newpost__text}>
                    Текст нового поста
                </textarea>
                <button className={s.newpost__button}>
                    Кнопка
                </button>
            </div>
        </div>
    )
}

export default NewPost;

