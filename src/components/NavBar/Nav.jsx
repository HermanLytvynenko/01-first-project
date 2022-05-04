import React from "react";
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import Post from "../Profile/MyPosts/Post";

const Nav = (props) => {
    let friendsBlockElement = props.state.friendsList.map (friend => <div className={s.friendBlockTextItem}>{friend.friendName}</div>);
    let friendsBlockElementImg = props.state.friendsList.map (friend => <div className={s.friendBlockImg}><img src={friend.friendImg}/></div>);

    return <nav className={s.nav}>
        <div><NavLink to="/profile" className = { (navData)  => navData.isActive ? s.active : s.item }>Profile</NavLink></div>
        <div><NavLink to="/dialogs" className = { (navData)  => navData.isActive ? s.active : s.item }>Messages</NavLink></div>
        <div><NavLink to="/news" className = { (navData)  => navData.isActive ? s.active : s.item }>News</NavLink></div>
        <div><NavLink to="/music" className = { (navData)  => navData.isActive ? s.active : s.item }>Music</NavLink></div>
        <div><NavLink to="/settings" className = { (navData)  => navData.isActive ? s.active : s.item }>Settings</NavLink></div>
        <div className={s.friendBlockText}>
            Friends
            <div className={s.friendBlockImages}>
                {friendsBlockElementImg}
            </div>
            <div className={s.friendBlockList}>
                {friendsBlockElement}
            </div>
        </div>
    </nav>
}

export default Nav;