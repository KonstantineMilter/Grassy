import React from 'react';
import s from './css/userFriends.module.css';
import {Route, Router, Switch, useParams, useRouteMatch} from "react-router";
import {BrowserRouter, Link} from "react-router-dom";
import {connect} from "react-redux";
import Avatar from "../common/RoundedAvatar/RoundedAvatar";
import createPushUp from "../common/CreatingPushUpsHOC";
import {
    getDataForFriendsSearch,
    getUserFriends,
    getUserFriendsRequests,
    getUserOnlineFriends
} from "../../BLL/userData/userDataAC";

const UserFriends = (props) => {
    let friendsBlockUrl = '/friends/1';
    return (
            <div className={s.userProfileContainer + " flex1"}>
                <div className={s.leftPartOfMainContentPage}>
                    <FirstMenuInFriendsPageContainer friendsBlockUrl={friendsBlockUrl}/>
                    <SecondMenuInFriendsPageContainer />
                    <MainPartInFriendsPageContainer photos={props.userData.photos} friendsBlockUrl={friendsBlockUrl}
                                                    />
                </div>
                <RightPartOfMainContentPageFriendsContainer friendsBlockUrl={friendsBlockUrl}/>
            </div>
    )
}

class MainPartInFriendsPageContainer extends React.Component {
    render() {
        return <MainPartInFriendsPage {...this.props} />;
    }
}
let mapStateToProps = (state) => {
    return {}
}
MainPartInFriendsPageContainer = connect(mapStateToProps, {})(MainPartInFriendsPageContainer);
const MainPartInFriendsPage = ({friendsBlockUrl, photos}) => {
    let { type } = useParams();
    let friendsArray = [];
    switch (type) {
        case "all":{
            friendsArray = getUserFriends().map( (item) => <ItemOfFriendBlock {...item} /> );
            break;
        }
        case "online":{
            friendsArray = getUserOnlineFriends().map( (item) => <ItemOfFriendBlock {...item} /> );
            break;
        }
        case "requests":{
            friendsArray = getUserFriendsRequests().map( (item) => <ItemOfFriendRequestsBlock {...item} /> );
            break;
        }
        case "search":{
            friendsArray = <FriendsSearchBlock {...getDataForFriendsSearch()}/>;
            break;
        }
        default:{
            friendsArray = getUserFriends().map( (item) => <ItemOfFriendBlock {...item} /> );
        }
    }
    return (
        <div className={s.mainPartInFriendsPage}>
            <div id={s.containerForDynamicFRIENDS}>
                {friendsArray}
            </div>
        </div>
    );
}
const ItemOfFriendBlock = ({id, avatarSmallSrc,  name, surname, ecoPosition, locationTown}) => {
    return (
        <div className={s.itemOfMainPartInFriendsPage + " flex1"} itemID={id}>
            <div className={s.leftPart_itemOfMainPartInFriendsPage + " flex1"}>
                <div className={s.avatarBox_mainPartInFriendsPage}>
                    <Avatar user={"other"} rounded={true} id={id} src={avatarSmallSrc}/>
                </div>
                <div className={s.rightPart_leftPartBlock}>
                    <h5 className={s.userName_itemOfMainPartInFriendsPage}>{name + ' ' + surname}</h5>
                    <div className={s.infoLine_itemOfMainPartInFriendsPage}>
                        <div className={s.textConstructionFriends + " flex1"}>
                            <h4 className={s.userEcoStatusText + " " + s.infoLineText}>{ecoPosition}</h4>
                            <h4 className={s.userLocationText + " " + s.infoLineText}>| {locationTown}</h4>
                        </div>
                    </div>
                    <a href="#" className={s.writeMess_itemOfMainPartInFriendsPage}>Напісать сябру</a>
                </div>
            </div>
            <MoreDetailsFriendsBlockContainer/>
        </div>
    )
}
const ItemOfFriendRequestsBlock = ({id, avatarSmallSrc,  name, surname, ecoPosition, locationTown}) => {
    return (
        <div className={s.itemOfMainPartInFriendsPage + " flex1"} itemID={id}>
            <div className={s.leftPart_itemOfMainPartInFriendsPage + " flex1"}>
                <div className={s.avatarBox_mainPartInFriendsPage}>
                    <Avatar user={"other"} rounded={true} id={id} src={avatarSmallSrc}/>
                </div>
                <div className={s.rightPart_leftPartBlock}>
                    <h5 className={s.userName_itemOfMainPartInFriendsPage}>{name + ' ' + surname}</h5>
                    <div className={s.infoLine_itemOfMainPartInFriendsPage}>
                        <div className={s.textConstructionFriends + " flex1"}>
                            <h4 className={s.userEcoStatusText + " " + s.infoLineText}>{ecoPosition}</h4>
                            <h4 className={s.userLocationText + " " + s.infoLineText}>| {locationTown}</h4>
                        </div>
                    </div>
                    <a href="#" className={s.writeMess_itemOfMainPartInFriendsPage}>Напісать карыстальніку</a>
                </div>
            </div>
            <div className={s.requestFriendsItemButtons}>
                <button className={s.requestButtonMakeFriend + " grassyButton"}>Сябраваць</button>
                <h6 className={s.skipRequestButton}>Прапусціць</h6>
            </div>
        </div>
    )
}

const FriendsSearchBlock = () => {
    return (
        <div className={s.friendsSearchBlock + " flex1"}>
           friends search
        </div>
    )
}

class MoreDetailsFriendsBlockContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPushUp: false
        }
    }
    changePushUpValue = () => {
        this.setState({
            isPushUp: !this.state.isPushUp
        });
    }
    render() {
        return <MoreDetailsFriendsBlock {...this.props} isPushUp={this.state.isPushUp}
                                          changePushUpValue={this.changePushUpValue}/>;
    }
}
const MoreDetailsFriendsBlock = ({isPushUp, changePushUpValue}) => {
    return (
        <div className={s.moreDetailsFriendsBlockContainer}>
            <div className={s.moreDetailsFriendsBlock + " flex2 cursor"} onClick={changePushUpValue}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                     className={s.moreDetailsFriends + " " + s.rightIcon_itemOfMainPartInFriendsPage}>
                    <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4
                                96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2
                                9.4-24.4 9.4-33.8 0z"></path>
                </svg>
            </div>
            {isPushUp && <MoreDetailsFriendsPushUpContainer changePushUpValue={changePushUpValue}/>}
        </div>
    )
}
const MoreDetailsFriendsPushUp = ({}) => {
    return (
        <div className={s.moreDetailsPushUp + " grassyPushUp"}>
            <div className={s.itemOfMoreDetailsPushUp}>
                <h5 className={s.textOfMoreDetailsPushUp}>Напісаць</h5>
            </div>
            <div className={s.itemOfMoreDetailsPushUp}>
                <h5 className={s.textOfMoreDetailsPushUp}>Інфарамацыя</h5>
            </div>
            <div className={s.itemOfMoreDetailsPushUp}>
                <h5 className={s.textOfMoreDetailsPushUp}>Выдаліць з сяброў</h5>
            </div>
        </div>
    )
}
let MoreDetailsFriendsPushUpContainer = createPushUp(MoreDetailsFriendsPushUp, s.moreDetailsFriendsBlock, s.moreDetailsPushUp);


class FirstMenuInFriendsPageContainer extends React.Component {
    render() {
        return (
            <div>
                <FirstMenuInFriendsPage {...this.props}/>
            </div>
        )
    }
}
const FirstMenuInFriendsPage = ({friendsBlockUrl}) => {
    let { type } = useParams();
    return (
        <div className={s.firstMenuInFriendsPage}>
            <div className={s.leftPartOfFirstMenuInFriendsPageBlock}>
                <Link to={friendsBlockUrl + '/all'}>
                    <div className={type==="all" ? s.elementOfFirstMenuInFriendsPage + " flex1 "
                         + s.itemOf1Menu_FriendsPageActive : "flex1 " + s.elementOfFirstMenuInFriendsPage}>
                        <h2 className={s.mainTextInMenuFriends}>Усе сябры</h2>
                        <h2 className={s.mainTextInMenuFriends + " " + s.numberFriends}>152</h2>
                    </div>
                </Link>
                <Link to={friendsBlockUrl + '/online'}>
                    <div className={type==="online" ? s.elementOfFirstMenuInFriendsPage + " flex1 "
                        + s.itemOf1Menu_FriendsPageActive : "flex1 " + s.elementOfFirstMenuInFriendsPage}>
                        <h2 className={s.mainTextInMenuFriends}>Сябры online</h2>
                        <h2 className={s.mainTextInMenuFriends + " " + s.numberFriends}>54</h2>
                    </div>
                </Link>
            </div>
            <button className={s.searchForFriends}>Пошук сяброў</button>
        </div>
    );
}

class RightPartOfMainContentPageFriendsContainer extends React.Component {
    render() {
        return <RightPartOfMainContentPageFriends {...this.props}/>;
    }
}
const RightPartOfMainContentPageFriends = ({friendsBlockUrl}) => {
    let { type } = useParams();
    return (
        <div className={s.rightPartOfMainContentPageFriends}>
            <div className={s.rightMenuInFriendsPage}>
                <Link to={friendsBlockUrl + '/all'}>
                    <div className={type==="all" ? s.activeItemOfMenu_rightMenuInFriendsPage + " flex1 "
                        + s.itemOfMenu_rightMenuInFriendsPage : "flex1 " + s.itemOfMenu_rightMenuInFriendsPage}>
                        <h3 className={s.textOfFriendsMenu}>Мае сябры</h3>
                    </div>
                </Link>
                <Link to={friendsBlockUrl + '/requests'}>
                    <div className={type==="requests" ? s.activeItemOfMenu_rightMenuInFriendsPage + " flex1 "
                        + s.itemOfMenu_rightMenuInFriendsPage : "flex1 " + s.itemOfMenu_rightMenuInFriendsPage}>
                        <h3 className={s.textOfFriendsMenu}>Заяўкі на сяброўства</h3>
                    </div>
                </Link>
                <Link to={friendsBlockUrl + '/search'}>
                    <div className={type==="search" ? s.activeItemOfMenu_rightMenuInFriendsPage + " flex1 "
                        + s.itemOfMenu_rightMenuInFriendsPage : "flex1 " + s.itemOfMenu_rightMenuInFriendsPage}>
                        <h3 className={s.textOfFriendsMenu}>Пошук сяброў</h3>
                    </div>
                </Link>
            </div>
        </div>
    );
}

class SecondMenuInFriendsPageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPushUp: false
        }
    }
    changePushUpValue = () => {
        this.setState({
            isPushUp: !this.state.isPushUp
        });
    }
    render() {
        return (
            <div>
                <SecondMenuInFriendsPage {...this.props} isPushUp={this.state.isPushUp}
                                         changePushUpValue={this.changePushUpValue} />
            </div>
        )
    }
}

const SecondMenuInFriendsPage = (props) => {
    return (
        <div className={s.secondMenuContainer}>
            <div className={s.secondMenuInFriendsPage + " flex1"}>
                <div className={s.searchingAmongFriendsBlock + " flex1"}>
                    <div className={s.avatarBox}>
                        <Avatar user="me" rounded={true}/>
                    </div>
                    <input type="text" className={s.inputOfSearchingAmongFriendsBlock + " grassyInput"}
                           placeholder="Пошук паміж сяброў"/>
                </div>
                <div className={s.rightPart_secondMenuInFriendsPage + " flex1 cursor"}
                     onClick={props.changePushUpValue}>
                    <h6 className={s.filterLinkOfSearchingAmongFriendsBlock}>Параметры</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                         className={s.iconBottomFriends}>
                        <path
                            d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4
                                96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2
                                9.4-24.4 9.4-33.8 0z"></path>
                    </svg>
                </div>
            </div>
            {props.isPushUp && <FiltersInSearchPushUpContainer changePushUpValue={props.changePushUpValue}/>}
        </div>
    );
}

const FiltersInSearchPushUp = ({}) => {
    return (
        <div className={s.filtersConatiner}>
            <hr className={"mainHr"}/>
            <div className={s.filtersInSearchPushUp}>
                <div className={s.filterOfSearch}>
                    <h6 className={s.filtersInSearchngTitle}>Пол:</h6>
                    <select className={s.filtersGenderSelect} name="genderFilter">
                        <option disabled>Пол</option>
                        <option value="male">Мужчынскі</option>
                        <option selected value="allGenders">Любы</option>
                        <option value="female">Жаночы</option>
                        <option value="no gender>">Бязполы</option>
                    </select>
                </div>
                <div className={s.filterOfSearch}>
                    <h6 className={s.filtersInSearchngTitle}>Горад:</h6>
                    <select className={s.filtersGenderSelect} name="genderFilter">
                        <option disabled>Горад</option>
                        <option value="male">Мужчынскі</option>
                        <option selected value="allGenders">Любы</option>
                        <option value="female">Жаночы</option>
                        <option value="no gender>">Бязполы</option>
                    </select>
                </div>
            </div>
            <hr className={"mainHr"}/>
        </div>
    )
}
let FiltersInSearchPushUpContainer = createPushUp(FiltersInSearchPushUp, s.rightPart_secondMenuInFriendsPage, s.filtersInSearchPushUp);


export default UserFriends;