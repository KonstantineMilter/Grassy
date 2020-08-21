import React from 'react';
import s from './css/UserAuthInfoBlock.module.css';
import {NavLink} from "react-router-dom";
import createPushUp from "../../../common/CreatingPushUpsHOC";

const UserAuthInfoBlock = (props) => {
    return (
        <div>
            <div className={s.userAuthInfo + ' flex1 UserAuthInfoBlockDiv'} onClick={props.changeSettingsPushUpValue}>
                <div className={s.userName}>
                    <h4 className={s.userNameText}>{props.userData.name}</h4>
                </div>
                <img src={props.userData.photos.large} alt="userAvatar"
                     className={s.userAvatarPhoto}/>
                <div className={s.dynamicUserInfoPart}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className={s.buttonChevronIcon}>
                        <path
                            d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4
                            96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2
                            9.4-24.4 9.4-33.8 0z"></path>
                    </svg>
                </div>
            </div>
            {
                props.isSettingPushUp &&
                <UserAuthInfoBlockPushUpContainer changePushUpValue={props.changeSettingsPushUpValue}/>
            }
        </div>
    )
}

const UserAuthInfoBlockPushUp = () => {
    return (
        <div className={s.pushUpUserIcon}>
            <div className={s.settingsTriangle}></div>
            <div className={s.pushUpUserIconTriengl}>
                <NavLink to={'/user/1'} className={s.linkSettingsPushUp}>Мая старонка</NavLink>
                <NavLink to={'/user/1'} className={s.linkSettingsPushUp}>Налады</NavLink>
                <hr className="mainHr"/>
                <NavLink to={'/user/1'} className={s.linkSettingsPushUp}>Выйсці</NavLink>
            </div>
        </div>
    )
}
let UserAuthInfoBlockPushUpContainer = createPushUp(UserAuthInfoBlockPushUp, s.userAuthInfo, s.pushUpUserIcon);

export default UserAuthInfoBlock;