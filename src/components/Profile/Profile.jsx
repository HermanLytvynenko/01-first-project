import React from "react";
import s from './Profile.module.css'
import Post from "./MyPosts/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPost from "./MyPosts/NewPost/NewPost";

const Profile = () => {

    let posts = [
        {id: 1, message: 'Hello, world! This message from special function!.', likesCount: 23},
        {id: 2, message: 'My first message', likesCount: 12},
        {id: 2, message: 'Coooool!!!', likesCount: 14},
    ]

    let postsElements = posts
        .map (post => <Post message={post.message} id={post.id} likeCount={post.likesCount} />);

    return (
        <div>
            <ProfileInfo />
            <NewPost />
            {postsElements}
        </div>
    )
}

export default Profile;

