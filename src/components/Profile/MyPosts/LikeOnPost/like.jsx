import React from "react";
import s from './like.module.css'

const Like = (props) => {
    return (
        <div className={s.like}>
            <p>Likes: {props.likes}</p>
        </div>
    )
}

export default Like;

