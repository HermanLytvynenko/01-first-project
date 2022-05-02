import React from "react";
import s from './Profile.module.css'
import Post from "./MyPosts/Post";

const Profile = () => {
    return <div>
        <div className={s.content__wallphoto}>
            <img src='https://i.imgur.com/4Bb1hpS.jpg'
                 title='Wall' alt='Wall photo'/>
        </div>
        <div className={s.content__ava}>
            <img src="https://lapkins.ru/upload/iblock/130/1309222f033fb6928ea065578276ab44.jpg" alt="Avatar"/>
        </div>
        <div>
            <div className={s.newpost}>
                <textarea className={s.newpost__text}>
                    Текст нового поста
                </textarea>
                <button className={s.newpost__button}>
                    Кнопка
                </button>
            </div>
        </div>
        <Post message='Hello, world!' likeCount='100'/>
        <Post message='My first message!' likeCount='200'/>
    </div>
}

export default Profile;

