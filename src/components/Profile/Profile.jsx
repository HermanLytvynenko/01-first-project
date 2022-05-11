import React from "react";
import s from './Profile.module.css'
import Post from "./MyPosts/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPostContainer from "./MyPosts/NewPost/NewPostContainer";

const Profile = (props) => {
    let state = props.store.getState().profilePage.posts;
    let postsElements = state.map (post => <Post message={post.message} id={post.id} likeCount={post.likesCount} />);
    return (
        <div>
            <ProfileInfo />
            <NewPostContainer store={props.store}/>
            {postsElements}
        </div>
    )
}

export default Profile;

