import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPostContainer from "./MyPosts/NewPost/NewPostContainer";

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <NewPostContainer />
        </div>
    )
}

export default Profile;

