import React from "react";
import s from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div className={s.posts}>
            <div className={s.post}>
                <div className={s.post__image}>
                    <img src='https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png' title='Ava' alt='Ava'/>
                </div>
                <div className={s.post__text}>
                    text
                </div>
            </div>
        </div>
    )
}

export default MyPosts;

