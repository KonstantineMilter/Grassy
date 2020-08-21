import React from 'react';
import s from './css/userProfile.module.css';
import {connect} from "react-redux";
import {changeShowPhotoBoxStatus} from "../../BLL/fullAppSettings/fullAppSettingsAC";
import createPushUp from "../common/CreatingPushUpsHOC";
import {Link, NavLink} from "react-router-dom";
import GalleryContainer from "../Gallery/GalleryContainer";
import Avatar from "../common/RoundedAvatar/RoundedAvatar";

const UserProfile = (props) => {
    return (
        <div className={s.userProfileContainer}>
            <div className={s.leftPartContainer}>
                <UserAvatarContainer />
                <MainButtonsOfUsersPageBlockContainer />
                <UsersFriendsBlockContainer photos={props.userData.photos}/>
                <UsersFriendsOnlineBlockContainer photos={props.userData.photos}/>
                <UsersEventsBlockContainer photos={props.userData.photos}/>
            </div>
            <div className={s.rightPartContainer}>
                <UsersNameOpinionStatusContainer />
                <UsersInfoBlockContainer />
                <UsersInfoInNumbersBlockContainer />
                <UsersGalleryBlockContainer photos={props.userData.photos}/>
                <CreatePostContainer photos={props.userData.photos}/>
            </div>
        </div>
    )
}

export class CreatePostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCreatingPostMode: false
        }
    }

    changeSettingsMode = () => {
        this.setState({
            isCreatingPostMode: !this.state.isCreatingPostMode
        });
    }

    render() {
        return (
            <div>
                {this.state.isCreatingPostMode ? <CreatePostBlock {...this.props} /> :
                    <BeforCreatePostBlock {...this.props} changeSettingsMode={this.changeSettingsMode}/>}
            </div>
        )
    }
}
const BeforCreatePostBlock = (props) => {
    return (
        <div>
            <hr className="mainHr"/>
            <div className={s.creatingPostContainer + " flex1"}>
                <div className={s.leftPart}>
                    <img src={props.photos.large} alt="userAvatar"
                         className={s.userAvatarPhoto}/>
                    <input type="text" className={s.inputTrigger + " grassyInput"}
                           value="Распавядзіце пра цікавую гісторыю..." readOnly onClick={props.changeSettingsMode}/>
                </div>
                <button type="button" className={s.createPostAlready + " grassyButton"}>Стварыць пост!</button>
            </div>
            <hr className="mainHr"/>
        </div>
    )
}
const CreatePostBlock = (props) => {
    const hello = (e) => {
        var textarea = e.currentTarget;
        if (textarea.scrollTop > 0) {
            textarea.style.height = textarea.scrollHeight + "px";
        }
    }
    return (
        <div>
            <hr className="mainHr"/>
            <div className={s.firstMenuCreatingPost2 + " flex1"}>
                <div className={s.firstBlockCreatingPost2}>
                    <img src={props.photos.large} alt="userAvatar"
                         className={s.userAvatarPhoto}/>
                    <div className={s.secondPart_firstBlockCreatingPost2}>
                        <div className={s.titleLineCreatingPost2}>
                            <h4 className={s.title_titleLineCreatingPost2}>Стварыце загаловак:</h4>
                            <input type="text" className={s.input_titleLineCreatingPost2 + " grassyInput"}/>
                        </div>
                        <div className={s.mainTextLineCreatingPost2}>
                            <h4 className={s.mainText_mainTextLineCreatingPost2}>Дадайце галоўны тэкст:</h4>
                            <textarea className={s.textarea_mainTextLineCreatingPost2 + " grassyTextarea"}
                                      onKeyUp={(e) => {hello(e)}} onKeyDown={(e) => {hello(e)}}></textarea>
                        </div>
                    </div>
                </div>
                <div className={s.secondBlockCreatingPost2 + " flex1"}>
                    <div className={s.addingPhotoIcon}>
                        <label className={s.AddingPhotoIconLabel}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                 className={s.addDocumentIntoPostNews}>
                                <path
                                    d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0
                                    48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0
                                    1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40
                                    40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971
                                    0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"></path>
                            </svg>
                            <input type="file" multiple="multiple" className={s.AddingFileIconInput}
                                   name="addingDocumentToYhePost"/>
                        </label>
                    </div>
                    <div className={s.rightPart_secondBlockCreatingPost2 + " flex1"}>
                        <button type="button" className={s.watchPostBeforSending + " grassyButton"}>Прадпрагляд</button>
                        <button type="button" className={s.createPostAlready + " grassyButton"}>Стварыць пост!</button>
                    </div>
                </div>
            </div>
            <hr className="mainHr"/>
        </div>
    )
}

class UsersGalleryBlockContainer extends React.Component {
    render() {
        return <UsersGalleryBlock  {...this.props} />
    }
}
const UsersGalleryBlock = (props) => {
    return (
        <div className={s.usersGalleryBlock}>
            <hr className="mainHr"/>
            <div className={s.infoAboutBlock}>
                <div className={s.namePartOfBlock}>
                    <h4 className={s.nameOfBlock}>Фатаграфіі</h4>
                    <h4 className={s.numberOfContentOfBlock}>16</h4>
                </div>
                <Link to={'/gallery/1'}>
                    <div className={s.showAllLinkOfBlock}>
                        <h4 className={s.showAllLink}>Паказаць усе</h4>
                    </div>
                </Link>
            </div>
            <div className={s.galleryPart}>
                <div className={s.galleryPhotoBox + ' photoCentring'}
                     style={{backgroundImage: "url(" + props.photos.large + ")"}}></div>
                <div className={s.galleryPhotoBox + ' photoCentring'}
                     style={{backgroundImage: "url(" + props.photos.large + ")"}}></div>
                <div className={s.galleryPhotoBox + ' photoCentring'}
                     style={{backgroundImage: "url(" + props.photos.large + ")"}}></div>
                <div className={s.galleryPhotoBox + ' photoCentring'}
                     style={{backgroundImage: "url(" + props.photos.large + ")"}}></div>
            </div>
            <hr className="mainHr"/>
        </div>
    )
}

class UsersInfoInNumbersBlockContainer extends React.Component {
    render() {
        return <UsersInfoInNumbersBlock  {...this.props} />
    }
}
const UsersInfoInNumbersBlock = (props) => {
    return (
        <div className={s.usersInfoInNumbersBlock}>
            <hr className="mainHr"/>
            <div className={s.mainContentOfusersInfoInNumbersBlock}>
                <div className={s.partOfUsersInfoInNumbersBlock}>
                    <h3 className={s.number}>123</h3>
                    <h5 className={s.dopTextForNumber}>сяброў</h5>
                </div>
                <div className={s.partOfUsersInfoInNumbersBlock}>
                    <h3 className={s.number}>12</h3>
                    <h5 className={s.dopTextForNumber}>мерапрыемстваў</h5>
                </div>
                <div className={s.partOfUsersInfoInNumbersBlock}>
                    <h3 className={s.number}>-</h3>
                    <h5 className={s.dopTextForNumber}>рэйцінг</h5>
                </div>
            </div>
            <hr className="mainHr"/>
        </div>
    )
}

class UsersInfoBlockContainer extends React.Component {
    render() {
        return <UsersInfoBlock  {...this.props} />
    }
}
const UsersInfoBlock = (props) => {
    return (
        <div className={s.usersInfoBlock}>
            <div className={s.bearthDate + ' ' + s.itemOfUsersInfoBlock}>
                <div className={s.textContainer}>
                    <h3 className={s.simpleTextInInfo}>Дзень нараджэння:</h3>
                </div>
                <h3 className={s.simpleTextInInfo + ' ' + s.greenPart}>17 january 2004</h3>
            </div>
            <div className={s.EcoPosition + ' ' + s.itemOfUsersInfoBlock}>
                <div className={s.textContainer}>
                    <h3 className={s.simpleTextInInfo}>Экалагічная пазіцыя:</h3>
                </div>
                <h3 className={s.simpleTextInInfo + ' ' + s.greenPart}>activist</h3>
            </div>
            <div className={s.usersInterests + ' ' + s.itemOfUsersInfoBlock}>
                <div className={s.textContainer}>
                    <h3 className={s.simpleTextInInfo}>Зацікаўленасці:</h3>
                </div>
                <h3 className={s.simpleTextInInfo + ' ' + s.greenPart}>Bnterest1, interest2, interest3</h3>
            </div>
            <div className={s.usersLocation + ' ' + s.itemOfUsersInfoBlock}>
                <div className={s.textContainer}>
                    <h3 className={s.simpleTextInInfo}>Местазнаходжанне:</h3>
                </div>
                <h5 className={s.simpleTextInInfo + ' ' + s.greenPart}>Town, district</h5>
            </div>
        </div>
    )
}

class UsersNameOpinionStatusContainer extends React.Component {
    render() {
        return <UsersNameOpinionStatus  {...this.props} />
    }
}
const UsersNameOpinionStatus = (props) => {
    return (
        <div className={s.usersNameOpinionStatus + " flex1"}>
            <div className={s.usersNameOpinionBlock}>
                <h1 className={s.usersNameText}>Konstantine Milter</h1>
                <h3 className={s.usersOpinionText}>Hello, world!</h3>
            </div>
            <div className={s.usersStatus}>
                <h3 className={s.usersStatusText}>online</h3>
            </div>
        </div>
    )
}

class UsersEventsBlockContainer extends React.Component {
    render() {
        return <UsersEventsBlock  {...this.props} />
    }
}
const UsersEventsBlock = (props) => {
    return (
        <div className={s.usersEventsBlock}>
            <hr className="mainHr"/>
            <div className={s.infoAboutBlock}>
                <div className={s.namePartOfBlock}>
                    <h4 className={s.nameOfBlock}>Мерапрыемства</h4>
                    <h4 className={s.numberOfContentOfBlock}>24</h4>
                </div>
                <div className={s.whatIsItLinkOfBlock}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                         className={s.whatIsItIcon + " " + s.iconOfDecriptionOfBlock}>
                        <path
                            d="M256 8C119.043 8 8 119.083 8 256c0 136.997
                                    111.043 248 248 248s248-111.003 248-248C504 119.083
                                    392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200
                                    0-110.495 89.472-200 200-200 110.491 0 200 89.471 200
                                     200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421
                                      68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627
                                       0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516
                                        17.561-9.845 28.324-16.541 28.324-29.579
                                        0-17.246-21.999-28.693-39.784-28.693-23.189
                                        0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666
                                        2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846
                                        131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298
                                        368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841
                                        42 42z"></path>
                    </svg>
                </div>
            </div>
            <div className={s.mainContentOfUsersEventsBlock}>
                <EventContainer photos={props.photos} />
            </div>
            <hr className="mainHr"/>
        </div>
    )
}

class UsersFriendsOnlineBlockContainer extends React.Component {
    render() {
        return <UsersFriendsOnlineBlock  {...this.props} />
    }
}
const UsersFriendsOnlineBlock = (props) => {
    return (
        <div className={s.usersFriendsOnlineBlock}>
            <hr className="mainHr"/>
            <div className={s.infoAboutBlock}>
                <div className={s.namePartOfBlock}>
                    <h4 className={s.nameOfBlock}>Сябры онлайн</h4>
                    <h4 className={s.numberOfContentOfBlock}>6</h4>
                </div>
                <div className={s.showAllLinkOfBlock}>
                    <h4 className={s.showAllLink}>Усе</h4>
                </div>
            </div>
            <div className={s.mainContentOfFriendsOnlineBlock}>
                <div className={s.usersFriendDescription}>
                    <img src={props.photos.large} alt="friends avatar"
                         className={s.usersAvatarInRound}/>
                    <h5 className={s.friendsName}>Name</h5>
                </div>
                <div className={s.usersFriendDescription}>
                    <img src={props.photos.large} alt="friends avatar"
                         className={s.usersAvatarInRound}/>
                    <h5 className={s.friendsName}>Name</h5>
                </div>
                <div className={s.usersFriendDescription}>
                    <img src={props.photos.large} alt="friends avatar"
                         className={s.usersAvatarInRound}/>
                    <h5 className={s.friendsName}>Name</h5>
                </div>
            </div>
            <hr className="mainHr"/>
        </div>
    )
}

class UsersFriendsBlockContainer extends React.Component {
    render() {
        return <UsersFriendsBlock  {...this.props} />
    }
}
const UsersFriendsBlock = (props) => {
    return (
        <div className={s.usersFriendsBlock}>
            <hr className="mainHr"/>
            <div className={s.infoAboutBlock}>
                <div className={s.namePartOfBlock}>
                    <h4 className={s.nameOfBlock}>Сябры</h4>
                    <h4 className={s.numberOfContentOfBlock}>14</h4>
                </div>
                <div className={s.showAllLinkOfBlock}>
                    <h4 className={s.showAllLink}>Усе</h4>
                </div>
            </div>
            <div className={s.mainContentOfFriendsBlock}>
                <div className={s.usersFriendDescription}>
                    <img src={props.photos.large} alt="friends avatar"
                         className={s.usersAvatarInRound}/>
                    <h5 className={s.friendsName}>Name</h5>
                </div>
                <div className={s.usersFriendDescription}>
                    <img src={props.photos.large} alt="friends avatar"
                         className={s.usersAvatarInRound}/>
                    <h5 className={s.friendsName}>Name</h5>
                </div>
                <div className={s.usersFriendDescription}>
                    <img src={props.photos.large} alt="friends avatar"
                         className={s.usersAvatarInRound}/>
                    <h5 className={s.friendsName}>Name</h5>
                </div>
            </div>
            <hr className="mainHr"/>
        </div>
    )
}

class MainButtonsOfUsersPageBlockContainer extends React.Component {
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
        return <MainButtonsOfUsersPageBlock  {...this.props} isPushUp={this.state.isPushUp}
                                             changePushUpValue={this.changePushUpValue}/>
    }
}
const MainButtonsOfUsersPageBlock = (props) => {
    return (
        <div className={s.mainButtonsOfUsersPageBlock}>
            <button type="button" className={s.redactButton}>Рэдагаваць</button>
            <div className={s.moreActionsOnUser} onClick={props.changePushUpValue}>
                <h3 className={s.text_moreActionsOnUser}>...</h3>
            </div>
            { props.isPushUp && <MoreActionsOnUserPushUpContainer changePushUpValue={props.changePushUpValue}/> }
        </div>
    )
}
const MoreActionsOnUserPushUp = () => {
    return(
        <div className={s.moreActionsOnUserPushUp}>
            <div className={s.settingsTriangle}/>
            <NavLink to={'/settings'}>
                <span className={s.pointOfText_moreActionsOnUserPushUp}>Рэдагаваць</span>
            </NavLink>
        </div>
    )
}
let MoreActionsOnUserPushUpContainer = createPushUp(MoreActionsOnUserPushUp, s.moreActionsOnUser, s.moreActionsOnUserPushUp);

class EventContainer extends React.Component {
    render() {
        return <EventBlock  {...this.props} />
    }
}
const EventBlock = (props) => {
    return (
        <div className={s.itemOfEvents}>
            <div className={s.imgKeepingBlock}>
                <div className={s.avatarOfEvent + ' photoCentring'}
                     style={{backgroundImage: "url(" + props.photos.large + ")"}}></div>
            </div>
            <div className={s.infoPartOfEventsBlock}>
                <div className={s.textsOfEventsBlock}>
                    <div className={s.nameOfEvent}>Patrebno pribrat' vulicu...</div>
                    <div className={s.dateOfEvent}>13 may 2020</div>
                </div>
                <div className={s.buttonsOfEventsBlock}>
                    <button className={s.moreDetailsOfEvent}>Інфармацыя</button>
                    <button className={s.makeEventFavoriteButton + " flex1"}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                             className={s.makeItFavoriteIcon}>
                            <path
                                d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194
                                    150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5
                                    26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5
                                    105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3
                                    23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

class UserAvatarContainer extends React.Component {
    showPhoto = () => {
        this.props.changeShowPhotoBoxStatus();
    }
    render() {
        return <UserAvatar  {...this.props} showPhoto={this.showPhoto}/>
    }
}
let mapStateToPropsUserAvatar = (state) => {
    return {

    }
}
UserAvatarContainer = connect(mapStateToPropsUserAvatar, { changeShowPhotoBoxStatus })(UserAvatarContainer);
const UserAvatar = (props) => {
    return (
        <div className={s.ownerAvatar} >
            <div className={s.ownerAvatarImg} onClick={props.showPhoto}>
                <Avatar user="me" rounded={false} />
            </div>
            <div className={s.workingWithAvatarBlock}>
                <div className={s.item_workingWithAvatarBlock}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                         className={s.iconOfItemOfWorkingWithAvatarBlcok}>
                        <path d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49
                                48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072
                                56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208
                                320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"></path>
                    </svg>
                    <h3 className={s.textOfWorkingWithAvatarBlock}>Праглядзець аватар</h3>
                </div>
                <div className={s.item_workingWithAvatarBlock}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                         className={s.iconOfItemOfWorkingWithAvatarBlcok}>
                        <path d="M464,128H272L208,64H48A48,48,0,0,0,0,112V400a48,48,0,0,0,
                                48,48H464a48,48,0,0,0,48-48V176A48,48,0,0,0,464,128ZM359.5,296a16,16,0
                                ,0,1-16,16h-64v64a16,16,0,0,1-16,16h-16a16,16,0,0,1-16-16V312h-64a16,16,
                                0,0,1-16-16V280a16,16,0,0,1,16-16h64V200a16,16,0,0,1,16-16h16a16,16,0,0,1,16,16v64h64a16,
                                16,0,0,1,16,16Z"></path>
                    </svg>
                    <h3 className={s.textOfWorkingWithAvatarBlock}>Змяніць аватар</h3>
                </div>
                <div className={s.item_workingWithAvatarBlock}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                         className={s.iconOfItemOfWorkingWithAvatarBlcok}>
                        <path d="M487.4 315.7l-42.6-24.6c4.3-23.2
                                4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8
                                110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4
                                11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6
                                11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1
                                10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2
                                9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6
                                1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path>
                    </svg>
                    <h3 className={s.textOfWorkingWithAvatarBlock}>Выдаліть аватар</h3>
                </div>
            </div>
        </div>
    )
}


export default UserProfile;