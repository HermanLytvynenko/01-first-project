import React from "react";
import s from './Profile.module.css'
import Post from "./MyPosts/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPostContainer from "./MyPosts/NewPost/NewPostContainer";

const Profile = (props) => {
    let postsElements = props.state.posts.map (post => <Post message={post.message} id={post.id} likeCount={post.likesCount} />);
    return (
        <div>
            <ProfileInfo />
            <NewPostContainer dispatch={props.dispatch} newPostText={props.state.newPostText}/>
            {postsElements}
        </div>
    )
}

export default Profile;

