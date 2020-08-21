import React from 'react';
import s from './css/UpMenu.module.css';
import UserAuthInfoBlockContainer from "./blocks/UserAuthInfoBlock/UserAuthInfoBlockContainer";
import {Field, reduxForm} from "redux-form";
import {useHistory} from "react-router-dom";
import createPushUp from "../common/CreatingPushUpsHOC";

const UpMenu = (props) => {
    return (
        <div className={s.UpMenuContainer}>
            <div className={s.UpMenuContent + ' flex1 widthContainer'}>
                <div className={s.logoDiv}>
                    <h3 className={s.logoText}>Grassy</h3>
                </div>
                <CentralPartUpMenu/>
                <UserAuthInfoBlockContainer/>
            </div>
        </div>
    )
}

const CentralPartUpMenu = (props) => {
    let history = useHistory();
    let onGlobalSearchSubmit = (data) => {
        history.push("/globalSearch?" + data.searchRequestUpMenu);
    }
    return (
        <div className={s.centralPart + ' flex1'}>
            <GlobalSearchBlockUpMenu onSubmit={onGlobalSearchSubmit}/>
            <NotificationBlockUpMenuContainer/>
        </div>
    )
}

class NotificationBlockUpMenuContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSettingPushUp: false
        }
    }

    changeSettingsPushUpValue = () => {
        this.setState({
            isSettingPushUp: !this.state.isSettingPushUp
        });
    }

    render() {
        return <NotificationBlockUpMenu changeSettingsPushUpValue={this.changeSettingsPushUpValue}
                                        isSettingPushUp={this.state.isSettingPushUp}/>
    }
}
const NotificationBlockUpMenu = (props) => {
    return (
        <div>
            <div className={s.notifDiv} onClick={props.changeSettingsPushUpValue}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={s.notifIcon}>
                    <path d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97
                            64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98
                            14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4
                            12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path>
                </svg>
            </div>
            {props.isSettingPushUp &&
            <NotificationPushUpUpMenuContainer changePushUpValue={props.changeSettingsPushUpValue}/>
            }
        </div>
    )
}
const NotificationPushUpUpMenu = (props) => {
    return (
        <div className={s.notificationPushUp}>
            <div className={s.settingsTriangle}></div>
            hello, here are your notifications
        </div>
    )
}
let NotificationPushUpUpMenuContainer = createPushUp(NotificationPushUpUpMenu, s.notifDiv, s.notificationPushUp);

let GlobalSearchBlockUpMenu = (props) => {
    return (
        <form className={s.globalSearchInputBlock + " flex1"} onSubmit={props.handleSubmit}>
            <Field name="searchRequestUpMenu" component="input" type="text" className={s.globalSearch}
                   placeholder={"Пошук..."}/>
            <button className={s.searchButtonInput + ' flex2'}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={s.searchIcon}>
                    <path
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9
                                0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7
                                99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128
                                0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
            </button>
        </form>
    )
}
GlobalSearchBlockUpMenu = reduxForm({form: 'globalSearchFormUpMenu'})(GlobalSearchBlockUpMenu);

export default UpMenu;