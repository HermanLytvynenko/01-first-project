import React from "react";
import s from './Profile.module.css'
import Post from "./MyPosts/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPost from "./MyPosts/NewPost/NewPost";

const Profile = (props) => {
    let postsElements = props.state.posts.map (post => <Post message={post.message} id={post.id} likeCount={post.likesCount} />);
    return (
        <div>
            <ProfileInfo />
            <NewPost addPost={props.addPost}/>
            {postsElements}
        </div>
    )
}

export default Profile;

