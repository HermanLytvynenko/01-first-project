import React from "react";
import s from './NewPost.module.css'
import Post from "../Post";

const NewPost = (props) => {

    let onAddPost = () => {
        props.addNewPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text)
    }

    debugger
    let postsElements = props.posts.map (post => <Post message={post.message} id={post.id} likeCount={post.likesCount} key={post.id} />);


    return (
        <div className={s.NewPostBlock}>
            <h3>
                My posts:
            </h3>
            <div className={s.newPost}>
                <div>
                    <textarea onChange={onPostChange} placeholder={"Пиши свой пост сюда! =)"} value={props.newPostMessageText2}/>
                </div>
                <button className={s.newPostButton} onClick={ onAddPost }>
                    Отправить!
                </button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default NewPost;

