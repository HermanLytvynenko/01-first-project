import React from "react";
import s from './Post.module.css'

const Post = () => {
    return (
            <div className={s.post}>
                <div className={s.post__image}>
                    <img src='http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg' title='Ava' alt='Ava'/>
                </div>
                <div className={s.post__text}>
                    text
                </div>
            </div>
    )
}

export default Post;

