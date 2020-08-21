import React from 'react';
import s from './css/News.module.css'
import {CreatePostContainer} from "../userProfile/userProfile";
import Avatar from "../common/RoundedAvatar/RoundedAvatar";

const News = (props) => {
    return (
        <div className={s.newsContainer}>
            <div className={s.leftPartNews}>
                <div className={s.firstMenuNews}>
                    <CreatePostContainer photos={props.userData.photos}/>
                </div>
                <hr className="mainHr"/>
                    <div className={s.mainContentNews}>
                        <div className={s.itemOfNews}>
                            <div className={s.infoLine + " flex1"}>
                                <div className={s.authorInfoBox}>
                                    <div className={s.avatarBox}>
                                        <Avatar user={"me"} rounded={true}/>
                                    </div>
                                    <div className={s.moreInfoBox}>
                                        <div className={s.nameBox + " flex2"}>
                                            <h5 className={s.userName}>Kostya Milter</h5>
                                        </div>
                                        <div className={s.timeOfCreationBox}>
                                            <h5 className={s.timeOfCreation}>17 мая 2020</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className={s.moreActionsWithPostBox}>
                                    <div className={s.moreActionsButton}>
                                        <div className={s.moreActionsText}>...</div>
                                    </div>
                                </div>
                            </div>
                            <div className={s.mainTextLine}>
                                <div className={s.mainTextBox}>
                                    <h4 className={s.mainText}>
                                        Экалогія не павінна быць нечым незвычайным! Гэта наша будучае...
                                    </h4>
                                </div>
                            </div>
                            <div className={s.moreTextLine}>
                                <div className={s.moreTextBox}>
                                    <div className={s.moreText}>
                                        В чем-то есть своя суть, что тебя так грозно корили, ведь видели дети, как продков всех наших избили. Пусть славится...
                                    </div>
                                </div>
                            </div>
                            <div className={s.photosLine}>
                                <div className={s.photosBox}>
                                    <img src="https://www.washingtonpost.com/graphics/2018/lifestyle/travel/amp-stories/2018-travel-photo-contest/img/180905-travel-photo-contest-010.jpg"
                                         alt="post photo" className={s.amountPhoto1_img}/>
                                </div>
                            </div>
                            <div className={s.actionsLine}>
                                <div className={s.actionsBox + " flex2"}>
                                    <div className={s.actionItem + " flex2"} onHover={props.showLikeHovered}>
                                        <div className={s.iconBox + " flex2"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={s.iconOfAction}>
                                                <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7
                                                62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1
                                                53-154.3-9.8-207.9z"></path>
                                            </svg>
                                        </div>
                                        <div className={s.textsOfActionBox}>
                                            <h5 className={s.textOfAction}>
                                                <span className={s.numberOfAction}>101 </span>
                                                <span className={s.moreTextOfAction}>(Падабаецца)</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className={s.actionItem + " flex2"}>
                                        <div className={s.iconBox + " flex2"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className={s.iconOfAction}>
                                                <path d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5
                                                 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7
                                                 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7
                                                 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8
                                                 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25
                                                 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"></path>
                                            </svg>
                                        </div>
                                        <div className={s.textsOfActionBox}>
                                            <h5 className={s.textOfAction}>
                                                <span className={s.numberOfAction}>13 </span>
                                                <span className={s.moreTextOfAction}>(Каментаваць)</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className={s.actionItem + " flex2"}>
                                        <div className={s.iconBox + " flex2"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={s.iconOfAction}>
                                                <path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"></path>
                                            </svg>
                                        </div>
                                        <div className={s.textsOfActionBox}>
                                            <h5 className={s.textOfAction}>
                                                <span className={s.moreTextOfAction}>Сахраніць</span>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={s.moreActionsLine}>
                                <div className={s.moreActionsBox}>
                                    {props.isLikeHovered && <LikeBox />}
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={s.rightPartNews}>
                <div className={s.rightMenuNews}>
                    <hr className="mainHr"/>
                    <div className={s.mainContent_rightMenuNews + " flex1"}>
                        <div className={s.item_rightMenuNews + " " + s.item_rightMenuNews_friendsRE}>
                            <h3 className={s.textOfRightMenu}>Рэкамендаванае</h3>
                        </div>
                        <div className={s.item_rightMenuNews + " " + s.item_rightMenuNews_friendsRE}>
                            <h3 className={s.textOfRightMenu}>Навіны сяброў</h3>
                        </div>
                    </div>
                    <hr className="mainHr"/>
                </div>
            </div>
        </div>
)
}

const LikeBox = ({}) => {
    return (
        <div className={s.likeBox}>
            <div className={s.avatarsPart}>
                <div className={s.avatarBoxMoreActions} title="Kostya Milter">
                    <Avatar user={"me"} rounded={true} />
                </div>
                <div className={s.avatarBoxMoreActions} title="Kostya Milter">
                    <Avatar user={"me"} rounded={true} />
                </div>
                <div className={s.avatarBoxMoreActions} title="Kostya Milter">
                    <Avatar user={"me"} rounded={true} />
                </div>
                <div className={s.avatarBoxMoreActions} title="Kostya Milter">
                    <Avatar user={"me"} rounded={true} />
                </div>
                <div className={s.avatarBoxMoreActions} title="Kostya Milter">
                    <Avatar user={"me"} rounded={true} />
                </div>
                <div className={s.avatarBoxMoreActions} title="Kostya Milter">
                    <Avatar user={"me"} rounded={true} />
                </div>
                <div className={s.avatarBoxMoreActions} title="Kostya Milter">
                    <Avatar user={"me"} rounded={true} />
                </div>
                <div className={s.avatarBoxMoreActions} title="Kostya Milter">
                    <Avatar user={"me"} rounded={true} />
                </div>
            </div>
            <div className={s.morePart + " flex2"}>
                <h5 className={s.andMoreUsersLiked}>яшчэ 85...</h5>
            </div>
        </div>
    )
}

export default News;