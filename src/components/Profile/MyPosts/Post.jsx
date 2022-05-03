import React from "react";
import s from './Post.module.css'

const Post = (props) => {

    return (
            <div className={s.post}>
                <div className={s.post__image}>
                    <img src='http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg' title='Ava' alt='Ava'/>
                    <span className={s.post__text}> {props.message}</span>
                    <p >Likes: {`${props.likeCount}`}</p>
                </div>
            </div>
    )
}

export default Post;

