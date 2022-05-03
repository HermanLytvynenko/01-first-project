import React from "react";
import s from './Profile.module.css'
import Post from "./MyPosts/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPost from "./MyPosts/NewPost/NewPost";

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <NewPost />
            <Post message='Hello, world!' likeCount='23'/>
            <Post message='My first message!' likeCount='43'/>
        </div>
    )
}

export default Profile;

