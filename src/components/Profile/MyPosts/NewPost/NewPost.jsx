import React from "react";
import s from './NewPost.module.css'

const NewPost = (props) => {



    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        (text == '') ? alert('Строка не может быть пустая!') : props.addPost(text);
        newPostElement.current.value = '';
    }


    return (
        <div className={s.NewPostBlock}>
            <h3>
                My posts:
            </h3>
            <div className={s.newPost}>
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

