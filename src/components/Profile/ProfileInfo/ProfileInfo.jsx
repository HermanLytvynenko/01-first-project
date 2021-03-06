import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            {/********** WALL PHOTO ***************/}
            <div className={s.content__wallphoto}>
                <img src='https://i.imgur.com/4Bb1hpS.jpg'
                     title='Wall' alt='Wall photo'/>
            </div>
            {/********** AVATARKA + DESCRIPTION ***************/}
            <div className={s.ProfileInfoBlock}>
                <div className={s.content__ava}>
                    <img src="https://i.imgur.com/2rUeyXM.jpeg" alt="Avatar"/>
                </div>
                <div className="profile__description">
                    Profile Description
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;

