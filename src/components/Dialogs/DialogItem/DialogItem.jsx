import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/${props.id}`} className={s.item} className={(navData) => navData.isActive ? s.active : s.item}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;